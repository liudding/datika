<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>设置</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item-group>
        <ion-item @click="setQuestionCountOpen(true)"
          >默认题目数量
          <div slot="end">10</div>
        </ion-item>
        <ion-item-divider></ion-item-divider>
        <ion-item @click="setAutoArchiveOpen(true)"
          >自动归档测验
          <div slot="end">半年前的</div>
        </ion-item>
      </ion-item-group>
    </ion-content>

    <ion-modal
      :is-open="questionCountRef"
      css-class="my-custom-class"
      @onDidDismiss="setQuestionCountOpen(false)"
    >
      <ion-header>
        <ion-toolbar>
          <ion-title>设置默认题目数量</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="">
        <ion-item>10</ion-item>
        <ion-item>15</ion-item>
        <ion-item>20</ion-item>
      </ion-content>
    </ion-modal>

    <ion-modal
      :is-open="autoArchiveRef"
      css-class=""
      @onDidDismiss="setAutoArchiveOpen(false)"
    >
      <ion-header>
        <ion-toolbar>
          <ion-title>设置自动归档测验</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-padding">
        <ion-item>30 天</ion-item>
        <ion-item>60 天</ion-item>
        <ion-item>120 天</ion-item>
        <ion-item>180 天</ion-item>
      </div>
    </ion-modal>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonModal, IonItemDivider, IonItemGroup } from "@ionic/vue";

export default defineComponent({
  name: "Settings",
  components: { IonModal, IonItemDivider, IonItemGroup },
  setup() {
    const questionCountRef = ref(false);
    const setQuestionCountOpen = (state: boolean) =>
      (questionCountRef.value = state);

    const autoArchiveRef = ref(false);
    const setAutoArchiveOpen = (state: boolean) =>
      (autoArchiveRef.value = state);

    return {
      questionCountRef,
      setQuestionCountOpen,
      autoArchiveRef,
      setAutoArchiveOpen,
    };
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
ion-item-divider {
  --background: transparent;
  --inner-padding-bottom: 0;
  --inner-padding-top: 0;
  --padding-top: 0;
  --padding-bottom: 0;
  min-height: 8px;
}
</style>