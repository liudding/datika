<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button
            text="back"
            default-href="/"
          ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div id="camera-container"></div>

    <ion-content :fullscreen="false">
     
    </ion-content>

    <ion-footer class="ion-no-border">
    <ion-toolbar>
      <ion-title>
        <ion-button @click="openModal">Open Modal</ion-button>
      </ion-title>
    </ion-toolbar>
  </ion-footer>
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
  modalController
} from "@ionic/vue";
import { personCircle } from "ionicons/icons";
import { defineComponent } from "vue";

import Scanner from "@/services/gradecam/Scanner";
import Modal from './Modal.vue'

let scanner: Scanner;

export default defineComponent({
  name: "Scan",
  data() {
    return {
      // scanner: Scanner,
      personCircle,
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
    IonToolbar
  },
  mounted() {
    console.log('====')
    this.initScanner();
  },
  ionViewWillLeave() {
    console.log(' page will leave');
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
      const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: 'New Title',
            swipeToClose: true
          },
        })
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
}

ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}

#camera-container {
  height: 100%;
  width: 100%;
}
</style>