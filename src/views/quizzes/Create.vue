<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>创建测验</ion-title>
      <ion-buttons slot="end">
        <ion-button onclick="dismissModal()">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div style="margin-top: 30px">
      <ion-item lines="none">
        <ion-input
          :value="name"
          @ionChange="name = $event.target.value"
          autofocus
          required
          placeholder="测验名称"
        ></ion-input>
      </ion-item>

      <ion-button @click="login" expand="block" style="margin-top: 32px"
        >创建</ion-button
      >
    </div>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateModal",
  props: {
    title: { type: String, default: "Super Modal" },
  },
  data() {
    return {
      name: "",
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  methods: {
    dismissModal() {
      this.dismiss();
    },
  },
});
</script>

<style scoped>
</style>