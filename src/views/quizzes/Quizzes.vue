<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-title>Quizzes</ion-title>
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
import { actionSheetController } from "@ionic/vue";

import QuizItem from "./QuizItem.vue";
import Create from "./Create.vue";
import Api from "@/api";

export default defineComponent({
  name: "Quizzes",
  components: {
    QuizItem,
    Create,
  },
  provide() {
    return {
      quizzes: this.quizzes,
    };
  },
  setup() {
    const router = useRouter();
    const showCreate = ref(false);
    const showCreatePopup = (status = true) => {
      showCreate.value = status;
    };
    return { addOutline, router, showCreate, showCreatePopup };
  },
  data: () => {
    const quizzes: object[] = [];
    return {
      quizzes,
    };
  },
  async created() {
    this.getQuizzes();
  },
  methods: {
    gotoEdit() {
      //
    },

    async getQuizzes() {
      const resp = await Api.quiz.list();
      this.quizzes = resp.data.data;
    },

    onQuizCreated(quiz: any) {
      this.quizzes.unshift(quiz);
      this.showCreatePopup(false);

      this.router.push({
        path: `/quizzes/${quiz.id}/questions`,
        params: { quiz },
      });
    },

    async onShowMore(quiz: any) {
      const actionSheet = await actionSheetController.create({
        header: quiz.name,
        cssClass: "my-custom-class",
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
              this.archive(quiz.id);
            },
          },

          {
            text: "删除",
            role: "destructive",
            handler: () => {
              console.log("Delete clicked");
            },
          },
          {
            text: "取消",
            role: "cancel"
          },
        ],
      });
      return actionSheet.present();
    },

    async refresh($event: any) {
      await this.getQuizzes();

      $event.target.complete();
    },

    async copy(id: number) {
      const quiz = await Api.quiz.copy(id);
      this.quizzes.unshift(quiz);
    },
    async archive(id: number) {
      await Api.quiz.archive(id);

      const index = this.quizzes.findIndex((q: any) => q.id === id);
      this.quizzes.splice(index, 1);
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