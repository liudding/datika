<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button
            :text="getBackButtonText()"
            default-href="/"
          ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="message">
      <ion-item>
        <ion-icon :icon="personCircle" color="primary"></ion-icon>
        <ion-label class="ion-text-wrap">
          <h2>
            Edit
            <span class="date">
              <ion-note>{{ message.date }}</ion-note>
            </span>
          </h2>
          <h3>To: <ion-note>Me</ion-note></h3>
        </ion-label>
      </ion-item>

      <ion-item>
        <ion-label>班级</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-button expand="block">Outline + Full</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { personCircle } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
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
  components: {},
});
</script>

<style scoped>
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
</style>