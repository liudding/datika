<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button>编辑</ion-button>
          <ion-button @click="onClickDelete">删除</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-item class="brief" lines="none">
        成绩：{{ record.score }} 分</ion-item
      >

      <ion-list>
        <ion-item
          v-for="answer in answers"
          :key="answer.questionId"
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
            :correct="answer.question.answer"
            @change="onBubbleChange"
            mode="answer"
          />
          <div style="margin-left: 16px" slot="end">
            <span style="font-size: 17px">{{ answer.score || 0 }}</span
            ><span style="font-size: 14px; color: gray">
              /{{ answer.question.score }} 分</span
            >
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { questionType } from "@/utils/map";
import Alert from "@/mixins/Alert";

import Bubbles from "./Bubbles.vue";
import Api from "@/api";

export default defineComponent({
  props: ["recordId", "quizId"],
  components: {
    Bubbles,
  },
  mixins: [Alert],
  setup() {
    const router = useRouter();

    return { router };
  },

  data() {
    return {
      record: {
        answers: [],
      },
      quiz: {
        questions: [],
      },
      questionType,
      title: "",
    };
  },
  computed: {
    answers() {
      const questions: any[] = this.quiz.questions.concat([]);

      const answers = questions.map((item) => {
        let answer: any = this.record.answers.find(
          (a: any) => a.label == item.label
        );
        answer = answer || {};

        answer.question = item;

        return answer;
      });

      return answers;
    },
  },
  async created() {
    this.title = this.$route.query.studentName as string;

    const resp = await Api.quiz.record(+this.$route.params.recordId);
    this.record = resp.data;

    const quizResp = await Api.quiz.show(+this.$route.params.quizId, {
      with: ["questions"],
    });
    this.quiz = quizResp.data;
  },
  methods: {
    onBubbleChange(selected: string, name: string) {
      //
    },
    async delete() {
      await Api.record.destroy(+this.$route.params.recordId);

      this.router.back();
    },
    async onClickDelete() {
      this.alert({
        header: "确定删除吗",
        message: "删除之后，不能恢复",
        cancel: true,
        confirmText: "删除",
      }).then(() => {
        this.delete();
      });
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
  padding: 8px;
  border-radius: 16px;
}

ion-item {
  margin-bottom: 1px;
  --padding-top: 4px;
  --padding-bottom: 4px;
}
.brief {
  margin-top: 8px;
  --background: transparent;
}
</style>