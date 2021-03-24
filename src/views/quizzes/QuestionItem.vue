<template>
  <div class="question">
    <div style="width: 100%">
      <div class="d-flex align-items-center choices-wrapper">
        <div class="question-label">{{ question.label }}.</div>

        <div class="choices">
          <Bubbles
            :choices="question.choices"
            :correct="question.answer"
            :selected="question.answer"
            @change="onAnswerChange"
          ></Bubbles>
        </div>
      </div>

      <div class="bottom">
        <div class="question-type">
          {{ questionType(question.type) }}
        </div>

        <div class="d-flex align-items-center">
          <span class="mr-1" style="margin-right: 4px; color: gray">分值</span>
          <stepper
            :value="question.score"
            :name="question.label"
            :min="0"
            @change="onScoreChange"
          ></stepper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bubbles from "./Bubbles.vue";
import { questionType } from "@/utils/map";
import Stepper from "@/components/Stepper.vue";

export default defineComponent({
  name: "QuestionItem",
  props: {
    question: Object,
  },
  components: { Bubbles, Stepper },
  emits: ["change"],
  data() {
    return {
      questionType,
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
    },
  },
});
</script>

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

.question {
  padding: 8px 16px;
}


.choices-wrapper {
  padding: 4px 0;
}

.question-label {
  width: 36px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}

.choices {
  display: flex;
  /* margin-left: 8px; */
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
  color: #888;
}
</style>