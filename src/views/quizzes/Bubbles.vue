<template>
  <div
    class="choices"
    :class="{
      'mode-question': mode === 'question',
      'mode-answer': mode === 'answer',
    }"
  >
    <div
      v-for="bubble in choices"
      :key="bubble"
      @click="onClickBubble(bubble)"
      class="bubble"
      :class="{
        selected: isSelected(bubble),
        correct: isCorrect(bubble),
        incorrect: !isCorrect(bubble),
      }"
    >
      <ion-icon
        v-if="isSelected(bubble)"
        :icon="isCorrect(bubble) ? checkmark : closeOutline"
        class="answer-result"
      ></ion-icon>
      {{ bubble }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { closeOutline, checkmark } from "ionicons/icons";

export default defineComponent({
  props: {
    choices: String,
    answer: String,
    correct: String,
    selected: String,
    mode: {
      type: String,
      default: "question", // answer
    },
    name: String,
  },
  emits: ["change"],
  setup() {
    return { closeOutline, checkmark };
  },
  data() {
    return {
      showPopup: false,
      isCorrect(opt) {
        return (this.correct || "").indexOf(opt) >= 0;
      },
      isSelected(opt) {
        return (this.answer || "").indexOf(opt) >= 0;
      },
    };
  },
  methods: {
    onClickBubble(bubble) {
      let selected = this.selected || "";

      if (selected.indexOf(bubble) >= 0) {
        selected = selected.replace(bubble, "");
      } else {
        selected += bubble;
      }

      this.$emit("change", selected, this.name);
    },
  },
});
</script>

<style scoped>
.choices-wrapper {
  padding: 4px 0;
}

.choices {
  display: flex;
  margin-left: 8px;
}

.bubble {
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 100px;
  border: 1px solid black;
  margin-right: 8px;
  position: relative;

  font-size: 17px;
  line-height: 28px;

  cursor: pointer;
}

.mode-question .correct {
  background: var(--ion-color-primary);
  border: 1px solid var(--ion-color-primary);
  color: white;
}

.mode-answer .bubble {
  border: 1px dashed gray;
  color: gray;
}

.mode-answer .selected {
  background: rgba(0, 0, 0, 0.4);
  border: none;
}

.mode-answer .correct {
  border: 2px solid rgb(140, 151, 253);

  line-height: 26px;
}

.bubble.selected.incorrect {
  /* background:rgb(248, 30, 2); */
}

.answer-result {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  font-size: 30px;
}

.bubble.correct .answer-result {
  color: var(--ion-color-success);
  border-radius: 100px;
  box-shadow: 0px 0px 6px rgba(28, 250, 95, 0.2);
  border: 2px solid var(--ion-color-success);
}

.bubble.incorrect .answer-result {
  color: rgba(255, 0, 0, 0.719);
}
</style>