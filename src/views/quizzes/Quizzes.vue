<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-title>Quizzes</ion-title>
        <ion-buttons slot="end">
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

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Quizzes</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <QuizItem v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
      </ion-list>
    </ion-content>

    <popup :show="showCreatePopup">
      <Create></Create>
    </popup>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  modalController,
} from "@ionic/vue";

import { addOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";

import QuizItem from "./QuizItem.vue";
import Create from "./Create.vue";
import Popup from "@/components/Popup.vue";

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
    Popup,
  },
  setup() {
    const router = useRouter();
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return { addOutline, router, show, showPopup };
  },
  data: () => {
    return {
      quizzes: [
        {
          name: "Quiz 1",
          recordCount: 40,
          totalCount: 100,
          questionCount: 50,
          subject: "2323",
          date: "2020-09-09",
        },
        {
          name: "Quiz 2",
          questionCount: 50,
          recordCount: 40,
        },
        {
          name: "Quiz 2",
          questionCount: 50,
          recordCount: 40,
        },
         {
          name: "Quiz 2",
          questionCount: 50,
          recordCount: 40,
        },
         {
          name: "Quiz 2",
          questionCount: 50,
          recordCount: 40,
        },
        {
          name: "Quiz 2",
          questionCount: 50,
          recordCount: 40,
        },
        {
          name: "Quiz 2",
          questionCount: 50,
          recordCount: 40,
        },
        {
          name: "Quiz 2",
          questionCount: 50,
          recordCount: 40,
        },
      ],
      showCreatePopup: false,
    };
  },
  methods: {
    gotoEdit() {
      console.log("+++");
      // this.router.push('/quizzes/edit')
    },
    showCreate() {
      this.showCreatePopup = true;
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