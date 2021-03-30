<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>{{ $route.query.name }}</ion-title>
        <ion-buttons slot="end"
          ><ion-button @click="download">下载答题卡</ion-button></ion-buttons
        >
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-item lines="none">
        <div class="infos">
          <div class="total-score">
            <div class="d-flex align-items-center">
              <div style="font-size: 24px">{{ stats.score }}</div>
              <small style="margin-left: 4px">分</small>
            </div>
          </div>

          <div @click="onEditQuestionCount" class="question-count">
            <h3>
              {{ questions.length }} 题
              <span v-if="quiz.recordCount === 0">
                <ion-icon :icon="createOutline" class="edit-icon"></ion-icon>
              </span>
            </h3>
          </div>

          <div class="questions-stats">
            <div class="stats">
              <div class="stats-item">
                单选题:<span class="stats-number">{{ stats.singleCount }}</span>
              </div>
              <div class="stats-item">
                多选题:<span class="stats-number">{{ stats.multiCount }}</span>
              </div>
              <div class="stats-item">
                判断题:<span class="stats-number">{{
                  stats.booleanCount
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </ion-item>

      <div v-if="quiz.recordCount" style="font-size: 12px; margin-top: 16px">
        <ion-note style="font-size: 12px"
          >当前测验已经录入成绩，仅支持修改题目正确答案和分值。修改之后，会进行重新计分。</ion-note
        >
      </div>

      <BubbleSheet
        v-if="showDownload"
        :questions="questions"
        @backdrop="showDownload = false"
        @downloaded="showDownload = false"
      ></BubbleSheet>

      <ion-list>
        <template v-for="question in questions" :key="question.label">
          <QuestionItem
            :question="question"
            :quiz="quiz"
            @change="onQuestionChange"
          >
          </QuestionItem>
        </template>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { add, createOutline } from "ionicons/icons";
import { defineComponent } from "vue";
import QuestionItem from "./QuestionItem.vue";
import BubbleSheet from "./BubbleSheet.vue";
import Api from "@/api";
import debounce from "lodash/debounce";
import has from "lodash/has";
import Alert from "@/mixins/Alert";
import Modal from "@/mixins/Modal";
import Toast from "@/mixins/Toast";
import Loading from "@/mixins/Loading";
import QuestionDefines from "./QuestionDefines.vue";
import { mapState } from "vuex";

export default defineComponent({
  mixins: [Alert, Modal, Toast, Loading],
  data() {
    const debouncedUpdates: any = {};

    const definesModal: any = null;
    return {
      quiz: {
        questions: [],
        recordCount: 0,
      },
      showQuestionCountInput: false,
      showDownload: false,
      debouncedUpdates,
      definesModal,
    };
  },
  computed: {
    stats() {
      let singleCount = 0;
      let multiCount = 0;
      let booleanCount = 0;
      let score = 0;
      let noAnswerCount = 0;

      this.questions.forEach((item: any) => {
        if (item.type === 1) {
          singleCount++;
        } else if (item.type === 2) {
          multiCount++;
        } else if (item.type === 3) {
          booleanCount++;
        }

        if (!item.answer) {
          noAnswerCount++;
        }

        score += item.score || 0;
      });

      return {
        singleCount: singleCount,
        multiCount: multiCount,
        booleanCount: booleanCount,
        score: score,
        noAnswerCount,
      };
    },
    ...mapState({
      questions: (state: any) => state.quiz.quiz.questions || [],
    }),
  },
  setup() {
    const router = useRouter();

    return { router, add, createOutline, store: useStore() };
  },
  components: {
    QuestionItem,
    BubbleSheet,
  },
  created() {
    this.getDetail();

    this.getQuestions();
  },
  unmounted() {
    for (const key in this.debouncedUpdates) {
      const func = this.debouncedUpdates[key];
      func.cancel();
    }
  },
  methods: {
    async getDetail() {
      const resp = await this.store.dispatch(
        "quiz/quiz",
        +this.$route.params.id
      );

      this.quiz = resp.data;
    },
    onQuestionChange(question: any) {
      const recordCount = this.$route.query.recordCount || 0;
      if (recordCount > 0) {
        this.alert({
          title: "已经录入成绩",
          message: "修改题目，将影响已存在的作答结果。",
          confirmText: "重新计分",
          cancel: true,
        }).then(() => {
          this.updateQuestion(question);
        });
        return;
      }

      this.updateQuestion(question);
    },

    /**
     * 改变了题目数量
     */
    async onQuestionsChange(questions: any) {
      for (const question of questions) {
        const index = this.questions.findIndex(
          (q: any) => q.label === question.label
        );

        if (index < 0) continue;

        const oldQuestion = this.questions[index] || null;

        if (
          oldQuestion.choices.length === question.choices.length ||
          (oldQuestion.choice.length > 2 && question.choice.length > 2)
        ) {
          question.answer = oldQuestion.answer;
        }
      }

      const loading = await this.loading();

      try {
        const resp = await Api.question.set(+this.$route.params.id, questions);
        questions = resp.data;

        this.store.commit("quiz/UPDATE_QUIZ_QUESTIONS", questions);

        this.definesModal.dismiss();
      } catch (e) {
        this.toast({
          title:
            (e.response.data && e.response.data.friendlyMessage) || "更新失败",
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },
    async onEditQuestionCount() {
      if (this.quiz.recordCount > 0) return;

      this.definesModal = await this.modal(QuestionDefines, {
        questions: this.questions,
        onChange: this.onQuestionsChange,
      });
    },

    download() {
      // 检查所有题目是否都设置了正确答案

      const noAnswer = this.questions.findIndex(
        (item: any) => !item.answer || item.answer.length === 0
      );

      if (noAnswer) {
        // alert
      }

      this.showDownload = true;
    },

    async getQuestions() {
      const quiz = this.$route.params.id;

      const resp = await this.store.dispatch("quiz/quiz", quiz);

      this.quiz = resp.data;
    },

    async updateQuestion(question: any) {
      const oldQuestion = this.questions.find((i: any) => i.id === question.id);

      this.store.commit("quiz/UPDATE_QUESTION", question);

      let func;
      if (has(this.debouncedUpdates, question.id)) {
        func = this.debouncedUpdates[question.id];
      } else {
        func = debounce((question: any) => {
          Api.question
            .update(question.id, question)
            .then(() => {
              //
            })
            .catch((e) => {
              this.store.commit("quiz/UPDATE_QUESTION", oldQuestion);

              this.toast({
                title:
                  (e.response.data && e.response.data.friendlyMessage) ||
                  "更新失败",
                color: "danger",
              });
            });
        }, 500);

        this.debouncedUpdates[question.id] = func;
      }

      func.call(this, question);
    },
  },
});
</script>

<style lang="scss" scoped>
ion-content {
  --padding-top: 8px;
  --padding-bottom: 16px;
  --padding-start: 8px;
  --padding-end: 8px;
}

ion-list {
  margin-top: 16px;
  border-radius: 8px;
}

ion-item {
  /* --inner-padding-end: 0; */
  /* --background: transparent; */
  --padding-top: 8px;
  --padding-bottom: 8px;
  --border-radius: 8px;
}

.infos {
  width: 100%;
  display: flex;
  align-items: center;

  .total-score,
  // .question-count,
  .questions-stats {
    width: 33%;
    margin-left: 28px;
  }

  .question-count {
    width: 70px;
    position: relative;

    .edit-icon {
      position: absolute;
      right: 0;

      color: var(--ion-color-primary);
      font-size: 14px;
    }
  }
}

.questions-stats {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.stats {
  display: flex;
  flex-direction: column;

  font-size: 12px;
}

.stats-item {
  color: gray;
  margin-bottom: 4px;
  font-size: 12px;

  .stats-number {
    font-weight: bold;
    margin-left: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }
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