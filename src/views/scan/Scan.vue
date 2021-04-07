<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ quiz.name }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="showSettings" :disabled="scanStatus !== 'ready'"
            ><ion-icon :icon="settingsOutline"></ion-icon
          ></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div id="camera-container"></div>

    <ion-content :fullscreen="false">
      <div v-if="scanStatus !== 'ready'" class="initializing">
        <ion-spinner
          v-if="scanStatus === 'initializing'"
          name="circles"
          color="primary"
        ></ion-spinner>
        <div v-if="scanStatus === 'failed'" style="color: white">启动失败</div>
      </div>

      <ion-fab vertical="bottom" horizontal="end">
        <radial-progress-bar
          :diameter="65"
          :completed-steps="completedCount"
          :total-steps="totalCount"
          :strokeWidth="4"
          :innerStrokeWidth="4"
          innerStrokeColor="rgba(255, 255, 255, 0.3);"
        >
          <ion-fab-button @click="onClickFab" translucent>
            <!-- <ion-icon :icon="appsOutline"></ion-icon> -->
            {{ completedCount }}/{{ quiz.studentCount }}
          </ion-fab-button>
        </radial-progress-bar>
      </ion-fab>

      <div class="footer">
        <div>保持答题卡边框在相机范围内</div>
        <div>点击右上角设置按钮，可以切换相机</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { appsOutline, settingsOutline } from "ionicons/icons";
import { defineComponent } from "vue";
import { useStore, mapState } from "vuex";

import Scanner from "@/services/scanner/Scanner";
import Sound from "@/utils/sound";
import { speak } from "@/services/speech";
import Records from "./Records.vue";
import StudentPicker from "./StudentPicker";
import AnswerCorrection from "./AnswerCorrection";
import Result from "./Result.vue";
import Settings from "./Settings.vue";
import Api from "@/api";
import Modal from "@/mixins/Modal";
import Alert from "@/mixins/Alert";
import Toast from "@/mixins/Toast";
import RadialProgressBar from "vue-radial-progress";
import { checkIsSame, checkNeedCorrection } from "@/utils/answer";

let scanner;

export default defineComponent({
  name: "Scan",
  mixins: [Modal, Alert, Toast],
  setup() {
    return {
      store: useStore(),
      settingsOutline,
    };
  },
  computed: {
    ...mapState({
      records: (state) => state.quiz.records,
    }),
  },
  data() {
    const recordsModal = null;
    const resultModal = null;
    return {
      quiz: {
        name: "",
        questionCount: 0,
      },
      currentRecord: {
        name: "",
        number: "",
        score: 0,
      },
      appsOutline,
      recordsModal,
      resultModal,
      settingsModal: null,

      totalCount: 100,
      completedCount: 0,

      settings: {
        sound: true,
        camera: "",
      },

      scanStatus: "initializing", // initializing, ready, failed
    };
  },

  components: { RadialProgressBar },
  async created() {
    this.scanStatus = "initializing";

    this.getRecords();
  },
  async mounted() {
    await this.getQuiz();

    if (!window.cameraPermissionGranted) {
      window.cameraPermissionGranted = await this.preRequestPermission();
    }

    this.initScanner();
  },
  ionViewWillLeave() {
    scanner && scanner.stop();
  },
  beforeUnmount() {
    scanner && scanner.stop();
  },
  methods: {
    async getQuiz() {
      const resp = await Api.quiz.show(+this.$route.params.id, {
        with: ["classrooms", "questions"],
      });
      this.quiz = resp.data;
      this.totalCount =
        this.quiz.studentCount === 0 ? 100 : this.quiz.studentCount;
      this.completedCount = this.quiz.recordCount;
    },

    async getRecords() {
      await this.store.dispatch("quiz/studentRecords", +this.$route.params.id);
    },

    async submit(data, record) {
      if (checkIsSame(data.answers, record.answers)) {
        return {
          type: "nochange",
          data: record,
        };
      }

      const params = {
        student: record.studentId,
        answers: data.answers,
      };

      const resp = await Api.quiz.submit(+this.$route.params.id, params);

      this.store.commit(
        "quiz/ADD_RECORDS",
        Object.assign({}, record, resp.data)
      );

      return {
        type: record.recordId ? "update" : "new",
        data: resp.data,
      };
    },
    /**
     * 在 scanner 之前请求相机权限
     * 否则可能会出现 scanner 拿不到相机 label 的情况
     */
    async preRequestPermission() {
      console.log("pre request camera permission");

      if (!navigator.mediaDevices) {
        this.scanStatus = "failed";
        this.alert("无法读取摄像头");
        return false;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true,
        });

        stream.getTracks &&
          stream.getTracks().forEach((track) => {
            track.stop();
          });

        stream.stop && stream.stop();

        return true;
      } catch (err) {
        this.scanStatus = "failed";

        if (err.name === "NotAllowedError") {
          alert("您拒绝了使用相机的请求，无法扫描");
        }

        console.error(err.name, err.message);
      }
    },

    async initScanner() {
      scanner = new Scanner("camera-container", this.quiz.questionCount, true);

      scanner.bind("scan", this.onScan);
      scanner.bind("scanIssue", this.onIssue);
      scanner.onAsk(this.validateCallback);

      try {
        await scanner.start(true);

        this.scanStatus = "ready";
      } catch (err) {
        this.scanStatus = "failed";
        console.error(err);
      }
    },
    async onScan(scanObj) {
      await this.hideResult();

      // convert format
      const scanData = {
        studentId: scanObj.gradecam_id,
        answers: scanObj.answers.map((i) => i.value),
      };

      this.duplicatedScanCount = 0;

      console.log("SCAN: ", scanObj, scanData, this.records);

      this.settings.sound && Sound.beep();

      let record = this.findRecord(scanData.studentId);

      if (!record) {
        this.settings.sound && Sound.warning();

        try {
          scanner.pause();

          const studentNumber = await this.pickerStudent();

          record = this.findRecord(studentNumber);
        } catch (e) {
          return;
        } finally {
          scanner.resume();
        }
      }

      const needValidate = checkNeedCorrection(scanData, this.quiz.questions);

      if (needValidate) {
        this.settings.sound && Sound.warning();

        try {
          scanner.pause();

          const correctedAnswers = await this.doCorrection(needValidate);

          for (const corrected of correctedAnswers) {
            scanData.answers[corrected.index] = corrected.corrected;
          }
        } catch (e) {
          return;
        } finally {
          console.log("resume");
          scanner.resume();
        }
      }

      this.submit(scanData, record).then((res) => {
        console.log("on sunmited", this.quiz.recordCount);

        const result = res.data;

        this.currentRecord = {
          name: record.studentName,
          number: record.studentNumber,
          score: result.score,
          type: res.type,
        };

        this.completedCount = this.quiz.recordCount;

        this.showResult(this.currentRecord);
      });
    },

    findRecord(studentNumber) {
      return this.records.find((item) => item.studentNumber === studentNumber);
    },

    doCorrection(answers) {
      return new Promise((resolve, reject) => {
        this.modal(
          AnswerCorrection,
          {
            answers: answers,
            onChange: (res) => {
              console.log(res);

              resolve(res);
            },
          },
          null,
          false
        ).then((modal) => {
          modal.onWillDismiss().then(() => {
            reject();
          });
        });
      });
    },

    onIssue(issue) {
      console.log("ISSUE: ", issue);

      this.hideResult();

      // if (issue.type === "examLength") {
      //   this.toast("答题卡题目数量不足");
      // } else if (issue.type === "duplicateId") {
      //   this.toast("已经扫描过了");
      // } else if (issue.type === "cannotHighRes") {
      //   this.toast("无法获取高分辨率图像");
      // } else if (issue.type === "badStructure") {
      //   this.toast({
      //     title: "无法识别这张答题卡。请检查摆放位置、光线等。",
      //   });
      // }
    },

    validateCallback(validateObj, finish) {
      console.log(finish);
      return validateObj;
    },

    async showRecords() {
      this.recordsModal = await this.modal(Records, {
        records: this.records,
      });
    },

    async showSettings() {
      this.settingsModal = await this.modal(
        Settings,
        {
          cameraList: scanner.getCameraList(),
          onChange: (res) => {
            if (this.settings.camera != res.camera) {
              scanner.setCamera(res.camera);
            }

            this.settings = res;
          },
        },
        "scan-settings-modal"
      );
    },

    async hideResult() {
      this.resultModal && (await this.resultModal.dismiss());
    },

    async showResult(result) {
      speak(result.name + " " + result.score + " 分");

      this.resultModal = await this.modal(
        Result,
        {
          result: result,
        },
        "scan-result-modal",
        true,
        false
      );
    },

    async pickerStudent() {
      return new Promise((resolve, reject) => {
        this.modal(
          StudentPicker,
          {
            records: this.records,
            onChange: (res) => {
              console.log(res);

              resolve(res);
            },
          },
          null,
          false
        ).then((modal) => {
          modal.onWillDismiss().then(() => {
            reject();
          });
        });
      });
    },

    onClickFab() {
      this.showRecords();
    },
  },
});
</script>

<style scoped>
ion-header {
  position: fixed;
  top: 0;
  left: 0;
}

ion-content {
  --background: transparent;
}

ion-content {
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
}


ion-fab-button {
  --color: white;
  --background: rgba(255, 255, 255, 0.3);
  --background-activated: rgba(250, 250, 250, 0.5);
}

#camera-container {
  height: 100%;
  width: 100%;
  background: black;
}

.initializing {
  position: fixed;
  z-index: 100;
  width: 100%;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  /* background: red; */
  position: fixed;
  z-index: 100;
  bottom: env(safe-area-inset-bottom, 16px);
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 12px;
  line-height: 16px;
  color: gray;
}
</style>