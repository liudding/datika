<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div id="camera-container"></div>

    <ion-content :fullscreen="false">
      <van-popup
        v-model:show="popupStatus"
        position="bottom"
        round
        safe-area-inset-bottom
        :overlay-style="{ background: 'rgba(0,0,0,0.1)' }"
      >
        <div class="record-panel">
          <div>{{ currentRecord.name }}</div>
          <div style="margin-top: 8px">
            <span style="font-size: 36px">{{ currentRecord.score }}</span>
            <span style="font-size: 10px; margin-left: 3px; color: dark"
              >分</span
            >
          </div>

          <div style="color: gray; margin-top: 16px">
            <small>正确：</small>
            <small>错误：</small>
          </div>
        </div>
      </van-popup>

      <van-popup
        v-model:show="recordsPopupStatus"
        position="bottom"
        round
        closeable
        safe-area-inset-bottom
        :style="{ height: '90%' }"
      >
        <Records></Records>
      </van-popup>

      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button @click="onClickFab" translucent>
          <ion-icon :icon="appsOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { appsOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";

import Scanner from "@/services/gradecam/Scanner";
import Records from "./Records.vue";
import Api from "@/api";

let scanner: Scanner;

export default defineComponent({
  name: "Scan",
  data() {
    const students: any[] = [];
    return {
      quiz: {
        name: "",
        questionCount: 0,
      },
      students,
      currentRecord: {
        name: "",
        score: 0,
      },
      appsOutline,
    };
  },
  setup() {
    const popupStatus = ref(false);
    const showPopup = (show = true) => {
      popupStatus.value = show;
    };

    const recordsPopupStatus = ref(false);
    const showRecords = (show = true) => {
      recordsPopupStatus.value = show;
    };

    return {
      popupStatus,
      showPopup,

      recordsPopupStatus,
      showRecords,
    };
  },
  components: {
    Records,
  },
  async mounted() {
    await this.getQuiz();
    this.initScanner();
  },
  ionViewWillLeave() {
    scanner.stop();
  },
  methods: {
    async getQuiz() {
      const resp = await Api.quiz.show(+this.$route.params.id, { detail: true });
      this.quiz = resp.data;
    },
    async getStudents() {
      const resp = await Api.student.list();
      this.students = resp.data;
    },
    async submit(data: any) {
      const studentNumber = data["gradecam_id"];

      const student = this.students.find((s) => s.number == studentNumber);

      const answers = data.answers.map((item: any) => {
        return item.value;
      });

      const params = {
        student:  0,
        answers: answers,
      };

      const resp = await Api.quiz.submit(+this.$route.params.id, params);

      return resp.data;
    },
    initScanner() {
      scanner = new Scanner("camera-container", this.quiz.questionCount, true);

      scanner.bind("scan", this.onScan);
      scanner.bind("issue", this.onIssue);

      scanner
        .start()
        .then((res) => {
          console.log("SUCC", res);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    gcInitCallback(suc: boolean) {
      return suc;
    },
    onScan(scanObj: any) {
      // const scanner = this.scanner as Scanner;
      // scanner.pause();
      console.log("SCAN: ", scanObj);

      this.showPopup(false);

      // const studentNumber = scanObj["gradecam_id"];

      // const student = this.students.find((s) => s.number == studentNumber);
      // if (!student) {
      //   // show alert;
      //   console.log("no student found");
      //   return;
      // }

      this.submit(scanObj).then((res) => {
        this.currentRecord = res;
         this.showPopup(true);

        console.log(res);
      });
    },
    onIssue(issue: object) {
      console.log("ISSUE: ", issue);

      return issue;
    },

    gcValidateCallback(validateObj: object, finish: boolean) {
      console.log(finish);
      return validateObj;
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

ion-toolbar {
  --background: transparent !important;
  --background-color: transparent;
  --ion-color-base: transparent !important;
  --border-width: 0px;
  --border-color: transparent;
}

ion-fab-button {
  --color: white;
  --background: rgba(255, 255, 255, 0.3);
  --background-activated: rgba(255, 255, 255, 0.5);
}

#camera-container {
  height: 100%;
  width: 100%;
}

.panel {
  position: fixed;
  z-index: 1000000000000;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  height: 150px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.1);

  padding: 8px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

.panel.show {
  /* bottom: -100px; */
}

.record-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
</style>