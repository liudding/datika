<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>{{ $route.query.name }}</ion-title>
        <ion-buttons slot="end"
          ><ion-button @click="download">下载答题卡</ion-button></ion-buttons
        >
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
          <div @click="onEditQuestionCount">
            <h3>
              {{ questions.length }} 题
              <span>
                <ion-icon :icon="createOutline"></ion-icon>
              </span>
            </h3>
          </div>
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
      </ion-item>

      <BubbleSheet
        v-if="showDownload"
        :questions="questions"
        @backdrop="showDownload = false"
        @downloaded="showDownload = false"
      ></BubbleSheet>

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
import { defineComponent, ref } from "vue";
import QuestionItem from "./QuestionItem.vue";
import BubbleSheet from "./BubbleSheet.vue";
import Api from "@/api";
import _ from "lodash";
import Alert from "@/mixins/Alert.ts";
import Modal from "@/mixins/Modal.ts";
import QuestionDefines from "./QuestionDefines.vue";

export default defineComponent({
  mixins: [Alert, Modal],
  data() {
    const questions: any[] = [];

    const debouncedUpdates: any = {};

    const definesModal: any = null;
    return {
      quiz: {
        questions: [],
      },
      questions,
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
    BubbleSheet,
  },
  created() {
    this.getQuestions();
  },
  unmounted() {
    for (const key in this.debouncedUpdates) {
      const func = this.debouncedUpdates[key];
      func.cancel();
    }
  },
  methods: {
    onQuestionChange(question: any) {
      const recordCount = this.$route.query.recordCount || 0;
      if (recordCount > 0) {
        this.showAlert();
        return;
      }
      const index = this.questions.findIndex((i: any) => i.id === question.id);
      this.questions.splice(index, 1, question);

      let func;
      if (_.has(this.debouncedUpdates, question.id)) {
        func = this.debouncedUpdates[question.id] as Function;
      } else {
        func = _.debounce((question: any) => {
          this.updateQuestion(question.id, question);
        }, 500);

        this.debouncedUpdates[question.id] = func;
      }

      func.call(this, question);
    },
    async showAlert() {
      this.alert({
        title: "已经存在作答",
        message: "修改题目，将影响已存在的作答结果。",
        confirmText: "重新计分",
        cancel: true,
      }).then(() => {
        alert(11);
      });
    },

    /**
     * 改变了题目数量
     */
    async onQuestionsChange(questions: any) {
      const toCreate = questions.filter((item: any) => {
        return !this.questions.find((q: any) => q.label === item.label);
      });

      const toDelete = this.questions
        .filter((item: any) => {
          return !questions.find((q: any) => q.label === item.label);
        })
        .map((item: any) => item.id);

      if (toDelete.length > 0) {
        await Api.question.batchDestroy(+this.$route.params.id, toDelete);
        this.questions = this.questions.filter(
          (q: any) => toDelete.indexOf(q.id) < 0
        );
      }

      if (toCreate.length > 0) {
        const resp = await Api.question.batchCreate(+this.$route.params.id, {
          questions: toCreate,
        });

        this.questions = this.questions
          .concat(resp.data)
          .sort((a: any, b: any) => {
            return +a.label > +b.label ? 1 : -1;
          });
      }

      this.definesModal.dismiss();
    },
    async onEditQuestionCount() {
      this.definesModal = await this.modal(QuestionDefines, {
        questions: this.questions,
        onChange: this.onQuestionsChange,
      });
    },

    download() {
      // 检查所有题目是否都设置了正确答案

      const noAnswer = this.questions.findIndex(
        (item) => !item.answer || item.answer.length === 0
      );

      if (noAnswer) {
        // alert
      }

      this.showDownload = true;
    },

    async getQuestions() {
      const quiz = this.$route.params.id;
      const resp = await Api.quiz.questions(+quiz);

      this.questions = resp.data || [];
    },

    async updateQuestion(id: number, data: any) {
      await Api.question.update(id, data);
    },
  },
});
</script>

<style scoped>
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