<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>{{ quiz.name }}</ion-title>
        <ion-buttons slot="end"> </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-toolbar class="toolbar">
        <div>平均分: {{ average }}</div>
        <ion-buttons slot="primary">
          <ion-button @click="onClickSort"> 排序 </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-list>
        <ion-item
          v-for="question in questionStats"
          :key="question.questionId"
          lines="none"
        >
          <QuestionStats
            :question="question"
            @choice="onClickChoice"
          ></QuestionStats>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Loading from "@/mixins/Loading";
import ActionSheet from "@/mixins/ActionSheet";
import Modal from "@/mixins/Modal";

import Api from "@/api";
import _ from "lodash";
import QuestionStats from "./QuestionStats";
import Records from "./Records";

export default defineComponent({
  props: ["recordId", "quizId"],
  components: { QuestionStats },
  mixins: [Loading, ActionSheet, Modal],
  setup() {
    const store = useStore();

    return { store };
  },

  data() {
    return {
      records: [],
      quiz: {
        name: "",
        questions: [],
      },

      questionStats: [],
    };
  },
  computed: {
    average() {
      if (this.records.length === 0) return 0;
      return (_.sumBy(this.records, "score") / this.records.length).toFixed(1);
    },
    max() {
      return _.maxBy(this.records, "score");
    },
  },
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

      const answers = _(this.records)
        .filter((i) => !!i.id)
        .map((item) => {
          const answers = _.cloneDeep(item.answers);

          for (const a of answers) {
            a.studentId = item.studentId;
          }
          return answers;
        })
        .flatten()
        .value();

      const allStats = [];

      for (const question of questions) {
        const questionAnswers = _.filter(answers, { "question_id": question.id });

        const stats = {
          quesitonId: question.id,
          label: +question.label,
          score: question.score,
          recordCount: questionAnswers.length,
          choices: [],
        };

        const correct = _.filter(questionAnswers, { answer: question.answer });
        stats.correct = _.map(correct, "studentId");
        stats.correctRate =
          (stats.correct.length / questionAnswers.length) * 100;

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

          const isCorrect =
            question.answer && question.answer.indexOf(choice) >= 0;

          stats.choices.push({
            choice: choice,
            isCorrect,
            students: _.map(selected, "studentId"),
          });
        }

        allStats.push(stats);
      }

      return allStats;
    },
    onClickSort() {
      this.showActionSheet({
        title: "排序",
        cancel: true,
        buttons: [
          {
            text: "从高到低",
            handler: () => {
              //
              this.questionStats = _.orderBy(
                this.questionStats,
                ["correctRate", "label"],
                ["desc", "asc"]
              );
            },
          },
          {
            text: "从低到高",
            handler: () => {
              this.questionStats = _.orderBy(
                this.questionStats,
                ["correctRate", "label"],
                ["asc", "asc"]
              );
            },
          },
          {
            text: "题号排序",
            handler: () => {
              //
              this.questionStats = _.sortBy(this.questionStats, "label");
            },
          },
        ],
      });
    },
    onClickChoice(choice, question) {
      const records = _.filter(
        this.records,
        _.conforms({
          studentId: (item) => {
            return choice.students.indexOf(item) >= 0;
          },
        })
      );
      console.log(records);
      this.modal(Records, {
        records,
        title: question.label + " 题：" + choice.choice,
      });
    },
  },
});
</script>

<style scoped>
ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 8px;
}

.toolbar {
  border-radius: 8px;
}
ion-list {
  margin-top: 8px;
  background: transparent;
}

ion-item {
  margin-bottom: 4px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  border-radius: 8px;
}
</style>