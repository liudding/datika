<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>关于</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
   
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAvatar,
} from "@ionic/vue";

export default {
  name: "My",
  components: {
    IonHeader,
    IonTitle,
  },
  data() {
    return {
      user: {
        name: "ClassroomItem",
      },
    };
  },
};
</script>

<style scoped>
.profile ion-item {
  /* height: 80px; */
  --padding-top: 16px;
  --padding-bottom: 16px;
}
.profile .name {
  margin-left: 8px;
  font-weight: 700;
}
</style>