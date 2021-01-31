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
    return {
      quiz: {
        name: "",
        questionCount: 0,
      },
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
    this.getQuiz();
    this.initScanner();
  },
  ionViewWillLeave() {
    scanner.stop();
  },
  methods: {
    async getQuiz() {
      const resp = await Api.quiz.show(+this.$route.params.id);
      this.quiz = resp.data;
    },
    async submit(data: any) {
      const resp = await Api.quiz.submit(+this.$route.params.id, data);
      this.currentRecord = resp.data;
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
    onScan(scanObj: object) {
      // const scanner = this.scanner as Scanner;
      // scanner.pause();

      this.showPopup(false);

      this.submit(scanObj);
    },
    onIssue(issue: object) {
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