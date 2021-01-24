<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-img src=""></ion-img>
      <ion-button expand="block">微信登录</ion-button>

      <ion-button>账号密码登录</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
    };
  },
  setup() {
      return {};
  },
  components: {
    IonContent,
    IonPage,
    IonButton,
  },
  methods: {
  },
});
</script>

<style scoped>
ion-content {
    --padding-start: 16px;
    --padding-end: 16px;
}
</style>