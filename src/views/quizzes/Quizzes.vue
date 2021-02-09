<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-title>测验</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="showCreatePopup(true)">
            <ion-icon :icon="addOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-list>
        <QuizItem
          v-for="quiz in quizzes"
          :key="quiz.id"
          :quiz="quiz"
          @more="onShowMore"
        />
      </ion-list>

      <Emptyset v-if="quizzes.length === 0"> </Emptyset>

      <van-popup v-model:show="showCreate" position="bottom" round closeable>
        <Create @created="onQuizCreated"></Create>
      </van-popup>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { addOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";

import QuizItem from "./QuizItem.vue";
import Create from "./Create.vue";
import Emptyset from "@/components/Emptyset.vue";
import Api from "@/api";
import { useState } from "@/store/quiz";
import Alert from "@/mixins/Alert";
import ActionSheet from "@/mixins/ActionSheet";

export default defineComponent({
  name: "Quizzes",
  components: {
    QuizItem,
    Create,
    Emptyset,
  },
  mixins: [Alert, ActionSheet],
  setup() {
    const router = useRouter();
    const showCreate = ref(false);
    const showCreatePopup = (status = true) => {
      showCreate.value = status;
    };

    const state = useState() as any;

    return {
      addOutline,
      router,
      showCreate,
      showCreatePopup,
      state,
      quizzes: state.quizzes,
    };
  },
  data: () => {
    // const quizzes: object[] = [];
    return {
      // quizzes,
    };
  },
  async created() {
    this.getQuizzes();
    console.log(this.alert as any);
  },
  methods: {
    gotoEdit() {
      //
    },

    async getQuizzes() {
      const resp = await Api.quiz.list();
      (this.state as any).set(resp.data.data);
    },

    onQuizCreated(quiz: any) {
      (this.state as any).unshift(quiz);
      this.showCreatePopup(false);

      this.router.push({
        path: `/quizzes/${quiz.id}/questions`,
        params: { quiz },
      });
    },

    async onShowMore(quiz: any) {
      this.showActionSheet({
        buttons: [
          {
            text: "编辑",
            handler: () => {
              //
            },
          },
          {
            text: "复制",
            handler: () => {
              this.copy(quiz.id);
            },
          },
          {
            text: "归档",
            handler: () => {
              this.archiveQuiz(quiz);
            },
          },

          {
            text: "删除",
            role: "destructive",
            handler: () => {
              this.deleteQuiz(quiz);
            },
          },
          {
            text: "取消",
            role: "cancel",
          },
        ],
      });
    },
    async unarchiveQuiz(quiz: any) {
      await Api.quiz.unarchive(quiz + quiz.id);

      quiz.archivedAt = null;
    },

    async archiveQuiz(quiz: any) {
      this.alert({
        header: "确定归档吗",
        message: "归档之后，不会再展示此测验。",
        cancel: true,
        confirmText: "归档",
      }).then(() => {
        this.archive(quiz.id);
      });
    },

    async deleteQuiz(quiz: any) {
      this.alert({
        header: "确定删除吗",
        message: "该测验的所有相关数据将一并删除。",
        cancel: true,
        confirmText: "删除",
      }).then(() => {
        this.delete(quiz.id);
      });
    },

    async refresh($event: any) {
      await this.getQuizzes();

      $event.target.complete();
    },

    async copy(id: number) {
      const resp = await Api.quiz.copy(id);
      (this.state as any).unshift(resp.data);
    },
    async archive(id: number) {
      await Api.quiz.archive(id);

      (this.state as any).remove(id);
    },
    async delete(id: number) {
      await Api.quiz.destroy(id);

      (this.state as any).remove(id);
    },
  },
});
</script>

<style scoped>
ion-list {
  padding: 8px;
  background: transparent;
}
</style>