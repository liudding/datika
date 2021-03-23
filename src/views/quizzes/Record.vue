<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="editMode = !editMode">{{
            editMode ? "取消" : "编辑"
          }}</ion-button>
          <ion-button v-if="editMode" @click="onClickSave">保存</ion-button>
          <ion-button v-else @click="onClickDelete">删除</ion-button>
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
            :selected="editMode ? answer.answer : ''"
            :isSingle="answer.question.type === 1"
            :name="answer.question.label"
            :showResult="!editMode"
            @change="onBubbleChange"
            :mode="editMode ? 'question' : 'answer'"
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
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { questionType } from "@/utils/map";
import Alert from "@/mixins/Alert";
import Loading from "@/mixins/Loading";
import Toast from "@/mixins/Toast";

import Bubbles from "./Bubbles.vue";
import Api from "@/api";
import { cloneDeep } from "lodash";

export default defineComponent({
  props: ["recordId", "quizId"],
  components: {
    Bubbles,
  },
  mixins: [Alert, Loading, Toast],
  setup() {
    const router = useRouter();
    const store = useStore();

    return { router, route: useRoute(), store };
  },

  data() {
    const record: any = { studentId: "", answers: [] };
    return {
      record,
      quiz: {
        questions: [],
      },
      questionType,
      title: "",

      editMode: false,
    };
  },
  computed: {
    answers() {
      const questions: any[] = this.quiz.questions.concat([]);

      const answers = questions.map((item) => {
        let answer: any = this.record.answers.find(
          (a: any) => a.label == item.label
        );
        answer = Object.assign({}, answer || {});

        answer.question = item;

        return answer;
      });

      return answers;
    },
  },
  async created() {
    this.title = this.$route.query.studentName as string;

    const resp = await this.store.dispatch(
      "quiz/studentRecords",
      +this.$route.params.quizId
    );

    // this.record = resp.data.find(
    //   (item: any) => item.id === +this.$route.params.recordId
    // );

    const quizResp = await this.store.dispatch(
      "quiz/quiz",
      +this.$route.params.quizId
    );

    this.quiz = quizResp.data;

    const recordResp = await Api.record.show(+this.route.params.recordId);

    this.record = recordResp.data;
  },
  methods: {
    onBubbleChange(selected: string, name: string) {
      if (!this.editMode) return;

      let answer: any = this.record.answers.find((i: any) => i.label === name);

      if (!answer) {
        const questionIndex = this.quiz.questions.findIndex(
          (i: any) => i.label === name
        );
        const question: any = this.quiz.questions[questionIndex];

        answer = {
          label: question.label,
          question_id: question.id,
          answer: "",
          score: 0,
        };

        this.record.answers[questionIndex] = answer;
      }

      const oldAnswer = answer.answer;

      if (oldAnswer === selected) {
        return;
      }

      if (answer) {
        answer.answer = selected;
      }
    },
    async delete() {
      const loading = await this.loading();

      try {
        await Api.record.destroy(+this.$route.params.recordId);

        this.store.commit("quiz/REMOVE_RECORD", this.record);

        this.router.back();
      } catch (e) {
        this.alert({
          title: "删除失败",
          message: e.response.data && e.response.data.friendlyMessage,
        });
      } finally {
        loading.dismiss();
      }
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

    async onClickSave() {
      const loading = await this.loading();
      try {
        const answers = this.record.answers.map((i: any) => i.answer || "");

        this.submit({
          answers,
        });

        this.editMode = false;

        this.toast({ title: "保存成功", duration: 1000 });
      } catch (e) {
        this.alert({
          title: "保存失败",
          message: e.response.data && e.response.data.friendlyMessage,
        });
      } finally {
        loading.dismiss();
      }
    },
    async submit(data: any) {
      const params = {
        student: this.record.studentId,
        answers: data.answers,
      };

      const resp = await Api.quiz.submit(+this.$route.params.quizId, params);

      this.record = Object.assign({}, resp.data);

      this.store.commit("quiz/ADD_RECORDS", cloneDeep(resp.data));

      return true;
    },
  },
});
</script>

<style scoped>
ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-bottom: 32px;
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