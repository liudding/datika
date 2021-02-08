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
     <QuestionCount :count="settings.questionCount" @change="onQuestionCountChange"></QuestionCount>
     
    </ion-modal>

    <ion-modal
      :is-open="autoArchiveRef"
      css-class="my-custom-class"
      @onDidDismiss="setAutoArchiveOpen(false)"
    >
     <AutoArchive :days="settings.autoArchiveDays"></AutoArchive>
    </ion-modal>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonModal, IonItemDivider, IonItemGroup } from "@ionic/vue";
import QuestionCount from './QuestionCount.vue'
import AutoArchive from './AutoArchive.vue'

export default defineComponent({
  name: "Settings",
  components: { IonModal, IonItemDivider, IonItemGroup , QuestionCount, AutoArchive},
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
    return {
      settings: {
        questionCount: 15,
        autoArchiveDays: 30,
      }
    };
  },
  methods: {
    onQuestionCountChange(count: number) {
      this.settings.questionCount = count;
    }
  }
});
</script>

<style>
.my-custom-class .modal-wrapper {
  position: absolute;
  bottom: 0;
  height: 80%;
}

.my-custom-class .modal-shadow {
  position: absolute;
  bottom: 0;
  height: 80%;
}
</style>

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