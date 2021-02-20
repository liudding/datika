<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>{{ quiz.name }}</ion-title>
        <ion-buttons slot="end">
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="question in questionStats" :key="question.questionId" lines="none">
          <QuestionStats :question="question"></QuestionStats>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { questionType } from "@/utils/map";
import Loading from "@/mixins/Loading";

import Api from "@/api";
import _ from "lodash";
import QuestionStats from './QuestionStats'

export default defineComponent({
  props: ["recordId", "quizId"],
  components: {QuestionStats },
  mixins: [Loading],
  setup() {
    const router = useRouter();
    const store = useStore();

    return { router, store };
  },

  data() {
    return {
      records: [],
      quiz: {
        name: "",
        questions: [],
      },

      questionStats: []
    };
  },
  computed: {},
  async created() {
    const quizResp = await Api.quiz.show(+this.$route.params.id, {
      with: ["questions"],
    });
    this.quiz = quizResp.data;

    await this.getRecords();

    this.questionStats = this.analyze();
  },
  methods: {
    async getRecords() {
      const loading = await this.loading();

      const resp = await this.store.dispatch("quiz/studentRecords", this.quiz);
      this.records = resp.data;

      loading.dismiss();
    },
    analyze() {
      const questions = this.quiz.questions;

      const answers = _(this.records).filter(i => !!i.id).map((item) => {
        const answers = _.cloneDeep(item.answers);

        for (const a of answers) {
          a.studentId = item.studentId;
        }
        return answers;
      }).flatten().value();

      const allStats = [];

      for (const question of questions) {
        const questionAnswers = _.filter(answers, { "question_id": question.id });

        const stats = {
          quesitonId: question.id,
          label: question.label,
          recordCount: questionAnswers.length,
          choices: [],
        };

        const correct = _.filter(questionAnswers, { answer: question.answer });
        stats.correct = _.map(correct, "studentId");
        stats.correctRate = stats.correct.length / questionAnswers.length;

        const score = _.sumBy(questionAnswers, "score");
        stats.scoreRate =
          questionAnswers.length > 0
            ? (score / question.score) * questionAnswers.length
            : 0;

        // choices stats;
        for (const choice of question.choices) {
          const selected = _.filter(questionAnswers, (item) => {
            return item.answer.indexOf(choice) >= 0;
          });

          stats.choices.push({
            choice: choice,
            students: _.map(selected, "student_id"),
          });
        }

        allStats.push(stats);
      }

      return allStats;
    },
  },
});
</script>

<style scoped>
ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
}
ion-list {
  margin-top: 8px;
  /* border-radius: 16px; */
  background: transparent;
}

ion-item {
  margin-bottom: 4px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  border-radius: 8px; 
}
.brief {
  margin-top: 8px;
  --background: transparent;
}
</style>