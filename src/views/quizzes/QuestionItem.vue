<template>
  <ion-item lines="none">
    <div style="width: 100%">
      <div class="d-flex align-items-center bubbles-wrapper">
        <div @click="onClickLabel" class="question-label">{{ question.label }}.</div>

        <div class="bubbles">
          <div
            v-for="bubble in question.bubbles"
            :key="bubble"
            @click="onClickBubble(bubble)"
            class="bubble"
            :class="{ selected: isInAnswer(bubble) }"
          >
            {{ bubble }}
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="question-type">
          {{ questionType(question.type) }}
        </div>

        <div>
          <span class="mr-1">分值</span>
          <van-stepper
            :value="question.score"
            :name="question.id"
            button-size="20"
            @change="onScoreChange"
          ></van-stepper>
        </div>
      </div>
    </div>

    <van-popup v-model="showPopup" position="top" :style="{ height: '30%' }" >内容</van-popup>

  </ion-item>
</template>

<script>
import { IonItem } from "@ionic/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "QuestionItem",
  props: {
    question: Object,
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => isOpenRef.value = state;
    const data = { content: 'New Content' };
    return { isOpenRef, setOpen, data }
  },
  // emits: ["update:question"],
  data() {
    return {
      showPopup: false,
      isInAnswer(opt) {
        return (this.question.answer || "").indexOf(opt) >= 0;
      },
      questionType(val) {
        return {
          'single_choice': '单选题',
          'multi_choice': '多选题',
          'boolean': '判断题'
        }[val] || '单选题';
      }
    };
  },
  components: { IonItem },
  methods: {
    onClickBubble(bubble) {
      let answer = this.question.answer || "";

      if (this.isInAnswer(bubble)) {
        answer = answer.replace(bubble, "");
      } else {
        answer += bubble;
      }

      this.$emit("change", {
        id: this.question.id,
        label: this.question.label,
        answer: answer,
        bubbles: this.question.bubbles,
        type: this.detectQuestionType(answer, this.question.bubbles)
      }, 'answer');
    },

    onClickLabel() {
      this.showPopup = true;
      console.log("onClickLabel")
    },

    onScoreChange(value, detail) {
      this.$emit("change", {
        id: this.question.id,
        label: this.question.label,
        answer: this.question.answer,
        bubbles: this.question.bubbles,
        score: +value
      }, 'score');
    },

    detectQuestionType(answer, bubbles) {
      if (bubbles.length === 2) return 'boolean'
      return answer.length === 1 ? 'single_choice' : 'multi_choice'
    },

    showLabelPopup() {
      this.showPopup = true;
    },
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

.bubbles-wrapper {
  padding: 4px 0;
}

.bubbles {
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