<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>校正学生作答</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal">取消</ion-button>
        <ion-button @click="confirm">确定</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div style="padding: 8px; font-size: 14px; margin-bottom: 16px">
      以下题目填涂有误，请手工校正。选择实际填涂的选项
    </div>

    <ion-list>
      <ion-item
        v-for="answer in answers"
        :key="answer.question.id"
        lines="none"
      >
        <div style="width: 30px; text-align: right">
          {{ answer.question.label }}.

          <div style="font-size: 10px; color: gray">
            {{ questionType(answer.question.type) }}
          </div>
        </div>

        <Bubbles
          :choices="answer.question.choices"
          :answer="answer.answer"
          :selected="corrected[answer.question.id] || ''"
          :showResult="false"
          :name="answer.question.id"
          mode="question"
          @change="onBubbleChange"
        />
        <div style="margin-left: 16px" slot="end">
          <span style="font-size: 14px; color: gray">
            {{ answer.question.score }} 分</span
          >
        </div>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";
import Bubbles from "@/views/quizzes/Bubbles.vue";
import { questionType } from "@/utils/map";

export default defineComponent({
  props: ["answers"],
  emits: ["change"],
  components: { Bubbles },
  watch: {
    answers: function () {
      this.resetCorrected();
    },
  },
  data() {
    return {
      corrected: {},
      questionType,
    };
  },
  created() {
    this.resetCorrected();
  },
  methods: {
    resetCorrected() {
      for (const answer of this.answers) {
        if (!answer.question) continue;

        this.corrected[answer.question.id] = answer.answer
      }
    },
    onBubbleChange(selected, name) {
      this.corrected[name] = selected;

      this.corrected = Object.assign({}, this.corrected);
    },

    confirm() {
      const data = [];

      for (const answer of this.answers) {
        const corrected = this.corrected[answer.question.id];

        data.push({
          index: answer.index,
          question: answer.question,
          corrected: corrected,
        });
      }

      this.$emit("change", data);

      this.dismissModal();
    },
    dismissModal() {
      window._modal.dismiss();
    },
  },
});
</script>
