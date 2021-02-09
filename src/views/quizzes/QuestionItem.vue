<template>
  <ion-item lines="none">
    <div style="width: 100%">
      <div class="d-flex align-items-center choices-wrapper">
        <div class="question-label">
          {{ question.label }}.
        </div>

        <div class="choices">
          <Bubbles
            :choices="question.choices"
            :correct="question.answer"
            @change="onAnswerChange"
          ></Bubbles>
        </div>
      </div>

      <div class="bottom">
        <div class="question-type">
          {{ questionType(question.type) }}
        </div>

        <div>
          <span class="mr-1">分值</span>
          <van-stepper
            :default-value="question.score"
            :name="question.id"
            button-size="20"
            disable-input
            @change="onScoreChange"
          ></van-stepper>
        </div>
      </div>
    </div>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bubbles from "./Bubbles.vue";
import { questionType } from "@/utils/map";

export default defineComponent({
  name: "QuestionItem",
  props: {
    question: Object,
  },
  components: { Bubbles },
  setup() {
    return { questionType};
  },
  data() {
    return {
    };
  },
  methods: {
    onAnswerChange(answer: string) {
      if (!this.question) return;

      this.$emit(
        "change",
        {
          id: this.question.id,
          label: this.question.label,
          answer: answer,
          choices: this.question.choices,
          type: this.detectQuestionType(answer, this.question.choices),
          score: this.question.score,
        },
        "answer"
      );
    },

    onScoreChange(value: number) {
      if (!this.question) return;

      this.$emit(
        "change",
        {
          id: this.question.id,
          label: this.question.label,
          answer: this.question.answer,
          choices: this.question.choices,
          type: this.question.type,
          score: +value,
        },
        "score"
      );
    },

    detectQuestionType(answer: string, choices: string) {
      if (choices.length === 2) return 3;
      return answer.length > 1 ? 2 : 1;
    }
  },
});
</script>

<style>
.my-custom-class {
  /* height: 300px;
  position: absolute;
  bottom: 0;
  left: 0; */
  background: transparent;
}
ion-page {
  height: 300px;
  --background: transparent;
}

.my-custom-class .modal-wrapper {
  height: 300px;
  --background: transparent;
  background: transparent;
}
.sc-ion-modal-md {
}
</style>

<style scoped>
.content {
  background: white;
  padding: 32px 16px 0 16px;
  height: 70vh;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  box-shadow: 0 -8px 5px rgba(0, 0, 0, 0.1);
}

ion-item {
  --padding-top: 8px;
  --padding-bottom: 8px;
  --border-radius: 8px;

  margin-bottom: 4px;
}

.choices-wrapper {
  padding: 4px 0;
}

.choices {
  display: flex;
  margin-left: 8px;
}

.bubble {
  padding: 4px;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 100px;
  border: 1px solid black;
  margin-right: 8px;
}

.bubble.selected {
  background: green;
  border: 1px solid rgb(143, 233, 143);
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
}

.question-type {
  color: rgb(235, 82, 108);
}

.question-label {
  border-bottom: 1px solid rgb(126, 126, 126);
}
</style>