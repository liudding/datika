<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title></ion-title>
        <ion-buttons slot="end"> </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-item>
        成绩：{{record.score}}
      </ion-item>

      <ion-list>
        <QuestionItem
          v-for="question in quiz.questions"
          :key="question.id"
          :question="question"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { actionSheetController, alertController } from "@ionic/vue";

import QuestionItem from "./QuestionItem.vue";
import Api from "@/api";

export default defineComponent({
  props: ["recordId", "quizId"],
  components: {
    QuestionItem,
  },

  data() {
    return {
      record: {},
      quiz: {},
    };
  },
  async created() {
    const resp = await Api.quiz.record(this.recordId);
    this.record = resp.data;

    const quizResp = await Api.quiz.show(this.quizId, { with: ["questions"] });
    this.quiz = quizResp.data;
  },
  methods: {},
});
</script>

<style scoped>
ion-list {
  padding: 8px;
  background: transparent;
}
</style>