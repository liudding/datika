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
import { defineComponent } from "vue";

import Scanner from "@/services/scanner/Scanner";
import Records from "./Records.vue";
import Result from "./Result.vue";
import Api from "@/api";
import Modal from "@/mixins/Modal";

let scanner: Scanner;

export default defineComponent({
  name: "Scan",
  mixins: [Modal],
  data() {
    const students: any[] = [];
    const records: any[] = [];
    const recordsModal: any = null;
    const resultModal: any = null;
    return {
      quiz: {
        name: "",
        questionCount: 0,
      },
      students,
      records,
      currentRecord: {
        name: "",
        number: "",
        score: 0,
      },
      appsOutline,
      recordsModal,
      resultModal,
    };
  },

  components: {},
  async created() {
    this.getStudents();
    this.getRecords();
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
      const resp = await Api.quiz.show(+this.$route.params.id, {
        with: ["classrooms", "questions"],
      });
      this.quiz = resp.data;
    },
    async getStudents() {
      const resp = await Api.quiz.students(+this.$route.params.id);
      this.students = resp.data;
    },
    async getRecords() {
      const resp = await Api.quiz.records(+this.$route.params.id);
      this.records = resp.data.data;
    },
    checkIsOldRecordData(answers: any, studentId: number) {
      const record = this.records.find(
        (record) => record.student.id === studentId
      );

      if (!record) return false;

      const newAnswer = answers.join("_");
      const oldAnswer = record.answers.map((i: any) => i.answer).join("_");

      return newAnswer == oldAnswer ? record : false;
    },
    async submit(data: any, student: any) {
      const answers = data.answers.map((item: any) => {
        return item.value;
      });

      let record = this.checkIsOldRecordData(answers, student.id);
      if (record) {
        return record;
      }

      const params = {
        student: student.id,
        answers: answers,
      };

      const resp = await Api.quiz.submit(+this.$route.params.id, params);

      record = resp.data;
      record.student = student;

      this.records.unshift(record);

      return record;
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
    async onScan(scanObj: any) {
      console.log("SCAN: ", scanObj);

      await this.hideResult();

      const student = this.students.find(
        (item) => item.number === scanObj.gradecam_id
      );

      if (!student) {
        alert(`学号：${scanObj.gradecam_id} 不存在`);
        return;
      }

      this.submit(scanObj, student).then((res) => {
        this.currentRecord = res;
        this.currentRecord.name = student.name;
        this.currentRecord.number = student.number;

        this.showResult(this.currentRecord);

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

    async showRecords() {
      this.recordsModal = await this.modal(Records, {
        records: this.records,
      });
    },

    async hideResult() {
      this.resultModal && (await this.resultModal.dismiss());
    },

    async showResult(result: any) {
      this.resultModal = await this.modal(
        Result,
        {
          result: result,
        },
        "scan-result-modal"
      );
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
  --box-shadow: none;
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
</style>