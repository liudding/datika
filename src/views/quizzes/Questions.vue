<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Quiz</ion-title>
        <ion-buttons slot="end"><ion-button @click="download">下载答题卡</ion-button></ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-item lines="none" class="infos">
        <div style="width: 70px">
          <div class="d-flex align-items-center">
            <div style="font-size: 24px">{{ stats.score }}</div>
            <small style="margin-left: 4px">分</small>
          </div>
        </div>
        <div class="questions-stats">
          <ion-label
            v-if="!showQuestionCountInput"
            @click="
              () => {
                showQuestionCountInput = true;
              }
            "
          >
            <h1>
              {{ questions.length }} 题
              <span>
                <ion-icon :icon="createOutline"></ion-icon>
              </span>
            </h1>
          </ion-label>
          <ion-label v-if="showQuestionCountInput">
            <div>
              <div class="question-count-input-wrapper">
                <ion-input
                  :value="questions.length"
                  @ionBlur="onQuestionCountChange($event)"
                  type="number"
                  max="120"
                  min="3"
                  step="1"
                  enterkeyhint="enter"
                  class="question-count-input"
                  autofocus
                />
              </div>
              <span> 题</span>
            </div>
          </ion-label>
          <div class="stats">
            <ion-note
              >单选题:<span class="stats-number">{{
                stats.singleCount
              }}</span></ion-note
            >
            <ion-note
              >多选题:<span class="stats-number">{{
                stats.multiCount
              }}</span></ion-note
            >
            <ion-note
              >判断题:<span class="stats-number">{{
                stats.booleanCount
              }}</span></ion-note
            >
          </div>
        </div>

        <ion-icon :icon="scanOutline" color="primary"></ion-icon>
      </ion-item>

      <ion-list>
        <QuestionItem
          v-for="question in questions"
          :key="question.label"
          :question="question"
          @change="onQuestionChange"
        >
        </QuestionItem>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { add, createOutline } from "ionicons/icons";
import { scanOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import QuestionItem from "./QuestionItem.vue";
import Api from "@/api";

export default defineComponent({
  name: "Home",
  data() {
    const questions: any[] = [];
    return {
      scanOutline,
      quiz: {
        questions: [],
      },
      questions,
      showQuestionCountInput: false,
    };
  },
  computed: {
    stats() {
      let singleCount = 0;
      let multiCount = 0;
      let booleanCount = 0;
      let score = 0;

      this.questions.forEach((item: any) => {
        if (item.type === 1) {
          singleCount++;
        } else if (item.type === 2) {
          multiCount++;
        } else if (item.type === 3) {
          booleanCount++;
        }

        score += item.score || 0;
      });

      return {
        singleCount: singleCount,
        multiCount: multiCount,
        booleanCount: booleanCount,
        score: score,
      };
    },
  },
  setup() {
    const router = useRouter();

    const isOpenRef = ref(false);
    const refEvent = ref();
    const setOpen = (state: boolean, event: Event) => {
      refEvent.value = event;
      isOpenRef.value = state;
    };
    return { router, isOpenRef, setOpen, refEvent, add, createOutline };
  },
  components: {
    QuestionItem,
  },
  created() {
    this.getQuestions();
  },
  methods: {
    onQuestionChange(question: any, type: string) {
      const index = this.questions.findIndex(
        (i: any) => i.label === question.label
      );
      this.questions.splice(index, 1, question);

      this.updateQuestion(question.id, question);

      console.log(type, question);
    },
    /**
     * 改变了题目数量
     */
    onQuestionCountChange($event: any) {
      const count = +$event.target.value;

      if (count > this.questions.length) {
        this.createQuestions(count - this.questions.length);
      } else if (count < this.questions.length) {
        this.trimQuestions(this.questions.length - count);
      }

      this.showQuestionCountInput = false;
    },

    download() {
      // 检查所有题目是否都设置了正确答案

      const noAnswer = this.questions.findIndex(item => !item.answer || item.answer.length === 0)

      if (noAnswer) {
        // alert
      }

      

    },

    async getQuestions() {
      const quiz = this.$route.params.id;
      const resp = await Api.quiz.questions(+quiz);

      // this.quiz = resp.data;

      this.questions = resp.data || [];
    },

    async updateQuestion(id: number, data: any) {
      await Api.question.update(id, data);
    },

    async createQuestions(count: number) {
      const questions = [];

      const lastQuestion = this.questions[this.questions.length - 1];

      const index = lastQuestion ? +lastQuestion.label : 1;

      for (let i = 0; i < count; i++) {
        questions.push({
          label: index + i + "",
          choices: "ABCD",
        });
      }

      const quiz = this.$route.params.id;
      const resp = await Api.question.batchCreate(+quiz, {
        questions: questions,
      });

      this.questions = this.questions.concat(resp.data);
    },

    async trimQuestions(count: number) {
      const quiz = this.$route.params.id;

      const ids = this.questions.slice(-count).map((i) => i.id);

      await Api.question.batchDestroy(+quiz, ids);

      this.questions = this.questions.slice(0, -count);
    },
  },
});
</script>

<style scoped>
ion-content {
  /* --background: #eee; */
  --padding-top: 8px;
  --padding-start: 8px;
  --padding-end: 8px;
}

ion-list {
  margin-top: 16px;
  /* background: #eee; */
}

ion-item {
  /* --inner-padding-end: 0; */
  /* --background: transparent; */
  --padding-top: 8px;
  --padding-bottom: 8px;
  --border-radius: 8px;
}

.infos {
  display: flex;
}

.questions-stats {
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.stats {
  display: flex;
  flex-direction: row;

  font-size: 12px;
}

.stats-number {
  width: 20px;
  margin-right: 8px;
}

.question-count-input-wrapper {
  background: rgb(246, 246, 246);
  padding-left: 8px;
  display: inline-block;
  border-radius: 8px;
}

.question-count-input {
  width: 40px;
  --background: rgb(246, 246, 246);
  display: inline-block;
  border-radius: 8px;
}
</style>