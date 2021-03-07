<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-buttons v-if="archived">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ archived ? "已归档测验" : "测验" }}</ion-title>
        <ion-buttons slot="end" v-if="!archived">
          <ion-button @click="showCreate">
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

      <Emptyset v-if="quizzes.length === 0" title="暂无测验"> </Emptyset>

      <ion-item
        v-if="!archived"
        routerLink="/quizzes/type/archived"
        lines="none"
        class="archived-entry"
      >
        <ion-label>查看已归档测验</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { addOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { defineComponent } from "vue";

import QuizItem from "./QuizItem.vue";
import Create from "./Create.vue";
import Emptyset from "@/components/Emptyset.vue";
import Api from "@/api";
import Alert from "@/mixins/Alert";
import ActionSheet from "@/mixins/ActionSheet";
import Modal from "@/mixins/Modal";
import Loading from "@/mixins/Loading";
import Toast from "@/mixins/Toast";
import { mapState } from "vuex";

export default defineComponent({
  name: "Quizzes",
  components: {
    QuizItem,
    Emptyset,
  },
  props: ["archived"],
  mixins: [Alert, ActionSheet, Modal, Loading, Toast],
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      addOutline,
      router,
      store,
    };
  },
  computed: {
    ...mapState({
      list: (state: any) => state.quiz.list,
      archivedQuizzes: (state: any) => state.quiz.archived,
    }),
    quizzes(): any {
      return this.archived ? this.archivedQuizzes : this.list;
    },
  },
  data: () => {
    const createModal: any = null; // HTMLIonModalElement|null = null;

    return {
      createModal: createModal,
    };
  },
  async created() {
    this.getQuizzes();
  },
  methods: {
    gotoEdit() {
      //
    },

    async showCreate() {
      this.createModal = await this.modal(Create, {
        onSaved: this.onQuizSaved,
      });
    },

    async showEdit(quiz: any) {
      this.createModal = await this.modal(Create, {
        onSaved: this.onQuizSaved,
        quiz: quiz,
      });
    },

    async getQuizzes() {
      const loading = await this.loading();

      try {
        if (this.archived) {
          await this.store.dispatch("quiz/archived");
        } else {
          await this.store.dispatch("quiz/list");
        }
      } catch (e) {
        console.error(e);
      } finally {
        loading.dismiss();
      }
    },

    onQuizSaved(quiz: any, isNew: boolean) {
      if (isNew) {
        this.store.dispatch("quiz/unshift", quiz);
      } else {
        this.store.dispatch("quiz/replace", quiz, quiz);
      }

      this.createModal.dismiss();

      if (isNew) {
        this.router.push({
          name: "Quiz",
          params: {
            id: quiz.id,
          },
          query: {
            name: quiz.name,
            recordCount: quiz.recordCount,
          },
        });
      }
    },

    async onShowMore(quiz: any) {
      this.showActionSheet({
        cancel: true,
        buttons: [
          {
            text: "编辑",
            handler: () => {
              this.showEdit(quiz);
            },
          },
          {
            text: "复制",
            handler: () => {
              this.copy(quiz);
            },
          },
          {
            text: quiz.archivedAt ? "解除归档" : "归档",
            handler: () => {
              if (quiz.archivedAt) {
                this.unarchiveQuiz(quiz);
              } else {
                this.archiveQuiz(quiz);
              }
            },
          },
          {
            text: "删除",
            role: "destructive",
            handler: () => {
              this.deleteQuiz(quiz);
            },
          },
        ],
      });
    },
    async unarchiveQuiz(quiz: any) {
      const loading = await this.loading();

      try {
        await Api.quiz.unarchive(quiz.id);

        this.store.commit("quiz/UNARCHIVE_QUIZ", quiz);

        this.toast({
          title: "解档成功",
          color: "success",
          duration: 3000,
        });
      } catch (e) {
        this.toast({
          title: "解档失败",
          message: e.response.data && e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },

    async archiveQuiz(quiz: any) {
      this.alert({
        header: "确定归档吗",
        message: "归档之后，不会再展示此测验。",
        cancel: true,
        confirmText: "归档",
      }).then(() => {
        this.archive(quiz);
      });
    },

    async deleteQuiz(quiz: any) {
      this.alert({
        header: "确定删除吗",
        message: "该测验的所有相关数据将一并删除。",
        cancel: true,
        confirmText: "删除",
      }).then(() => {
        this.delete(quiz);
      });
    },

    async refresh($event: any) {
      this.store.commit("quiz/CLEAR");

      await this.getQuizzes();

      $event.target.complete();
    },

    async copy(quiz: any) {
      const loading = await this.loading();

      try {
        const resp = await Api.quiz.copy(quiz.id);

        this.store.commit("quiz/UNSHIFT_QUIZ", resp.data);

        this.toast({
          title: "创建成功",
          color: "success",
          duration: 1000,
        });
      } catch (e) {
        this.toast({
          title: "创建失败",
          message: e.response.data && e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },
    async archive(quiz: any) {
      const loading = await this.loading();

      try {
        await Api.quiz.archive(quiz.id);

        this.store.commit("quiz/ARCHIVE_QUIZ", quiz);

        this.toast({
          title: "归档成功",
          color: "success",
          duration: 1000,
        });
      } catch (e) {
        this.toast({
          title: "归档失败",
          message: e.response.data && e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },
    async delete(quiz: any) {
      const loading = await this.loading();

      try {
        await Api.quiz.destroy(quiz.id);

        this.toast({
          title: "删除成功",
          color: "success",
          duration: 1000,
        });

        this.store.commit("quiz/REMOVE_QUIZ", quiz);
      } catch (e) {
        this.toast({
          title: "删除失败",
          message: e.response.data && e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },
  },
});
</script>

<style scoped>
ion-list {
  padding: 8px;
  background: transparent;
}
.archived-entry {
  margin: 16px;
  --background: transparent;
  font-size: 12px;
  text-align: center;
}
</style>