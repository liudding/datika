<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button text="back" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div id="camera-container"></div>

    <ion-content :fullscreen="false">

       <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button @click="gotoScan" translucent>
          <ion-icon :icon="appsOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <div class="panel show" v-if="false">
        <div class="panel-center"></div>
        <div class="record">
          <div>张无忌</div>
          <div style="margin-top: 8px;">
            <span style="font-size: 36px;">20</span>
            <span style="font-size:10px; margin-left:3px;color:dark;">分</span>
          </div>

          <div style="color: gray;margin-top: 16px;">
            <small>正确：</small>
            <small>错误：</small>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import { appsOutline } from "ionicons/icons";
import { defineComponent } from "vue";

import Scanner from "@/services/gradecam/Scanner";
import Modal from "./Modal.vue";

let scanner: Scanner;

export default defineComponent({
  name: "Scan",
  data() {
    return {
      // scanner: Scanner,
      appsOutline,
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === "ios" ? "Inbox" : "";
      },
    };
  },
  setup() {
    const message = {
      fromName: "Jordan Firth",
      subject: "Report Results",
      date: "4:55 AM",
      id: 2,
    };

    return { message };
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
  },
  mounted() {
    console.log("====");
    this.initScanner();
  },
  ionViewWillLeave() {
    scanner.stop();
  },
  methods: {
    initScanner() {
      scanner = new Scanner("camera-container", 10, 10);

      // const scanner = this.scanner;

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

    async openModal() {
      const modal = await modalController.create({
        component: Modal,
        cssClass: "my-custom-class",
        componentProps: {
          title: "New Title",
          swipeToClose: true,
        },
      });
      return modal.present();
    },

    gcInitCallback(suc: boolean) {
      return suc;
    },
    onScan(scanObj: object) {
      // const scanner = this.scanner as Scanner;
      // scanner.pause();

      return scanObj;
    },
    onIssue(issue: object) {
      return issue;
    },

    gcValidateCallback(validateObj: object, finish: boolean) {
      console.log(finish);
      return validateObj;
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

.record {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>