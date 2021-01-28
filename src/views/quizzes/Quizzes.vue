<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-title>Quizzes</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="showCreatePopup">
            <ion-icon :icon="addOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Quizzes</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <QuizItem v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
      </ion-list>

      <van-popup v-model:show="showCreate" position="bottom" round closeable>
        <Create @created="onQuizCreated"></Create>
      </van-popup>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { addOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";

import QuizItem from "./QuizItem.vue";
import Create from "./Create.vue";
import Api from '@/api'

export default defineComponent({
  name: "Quizzes",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    QuizItem,
    Create,
  },
  setup() {
    const router = useRouter();
    const showCreate = ref(false);
    const showCreatePopup = (status=true) => {
      showCreate.value = status;
    };
    return { addOutline, router, showCreate, showCreatePopup };
  },
  data: () => {
    const quizzes: object[] = [];
    return {
      quizzes
    };
  },
  async created() {
    const resp = await Api.quiz.list();
    this.quizzes = resp.data.data;

  },
  methods: {
    gotoEdit() {
      //
    },

    onQuizCreated(quiz: any) {

      this.quizzes.push(quiz)
      this.showCreatePopup(false)

      this.router.push(`/quizzes/${quiz.id}/questions`)
    },
  
    refresh() {
      return true;
    },
  },
});
</script>

<style scoped>
ion-list {
  padding: 8px;
  background: rgb(246, 246, 246);
}

ion-header {
  background: white;
}

ion-content {
  --background: rgb(246, 246, 246);
}

@media (prefers-color-scheme: dark) {
  ion-header {
    background: #000;
  }

  ion-list {
    padding: 8px;
    background: #111;
  }

  ion-content {
    --background: #111;
  }
}
</style>