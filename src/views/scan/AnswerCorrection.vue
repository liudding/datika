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
      this.updateCorrected();
    },
  },
  data() {
    return {
      corrected: {},
      questionType,
    };
  },
  created() {
    console.log(this.answers);

    this.updateCorrected();
  },
  methods: {
    updateCorrected() {
      for (const answer of this.answers) {
        if (!answer.question) continue;

        this.corrected[answer.question.id] = answer.answer.join("");
      }

      console.log(this.corrected);
    },
    onBubbleChange(selected, name) {
      this.corrected[name] = selected;

      this.corrected = Object.assign({}, this.corrected);
    },

    onChange($event) {
      this.picked = $event.detail.value;
    },
    confirm() {
      this.$emit("change", this.corrected);

      this.dismissModal();
    },
    dismissModal() {
      window._modal.dismiss();
    },
  },
});
</script>
