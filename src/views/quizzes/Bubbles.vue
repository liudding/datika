<template>
    <div class="choices">
      <div
        v-for="bubble in choices"
        :key="bubble"
        @click="onClickBubble(bubble)"
        class="bubble"
        :class="{ selected: isInAnswer(bubble) }"
      >
        {{ bubble }}
      </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    choices: String,
    answer: String,
    name: String
  },
  data() {
    return {
      showPopup: false,
      isInAnswer(opt) {
        return (this.answer || "").indexOf(opt) >= 0;
      },
    };
  },
  methods: {
    onClickBubble(bubble) {
      let answer = this.answer || "";

      if (this.isInAnswer(bubble)) {
        answer = answer.replace(bubble, "");
      } else {
        answer += bubble;
      }

      this.$emit("change", answer, this.name);
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
</style>