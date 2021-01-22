<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Quizzes</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="() => router.push('/quizzes/edit')"> New </ion-button>
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
        <QuizItem
          v-for="quiz in quizzes"
          :key="quiz.id"
          :quiz="quiz"
        />
      </ion-list>
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

import {
  ellipsisHorizontal,
  ellipsisVertical,
  addOutline,
} from "ionicons/icons";
import { useRouter } from "vue-router";

import QuizItem from "./QuizItem.vue";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    QuizItem,
  },
  setup() {
    const router = useRouter();

    return {
      ellipsisHorizontal,
      ellipsisVertical,
      addOutline,
      router,
    };
  },
  data: () => {
    return {
      quizzes: [
        {
          name: "Quiz 1",
          recordCount: 40,
          subject: '2323',
          date: '2020-09-09'
        },
        {
          name: "Quiz 2",
          recordCount: 40,
        },
      ],
    };
  },
  methods: {
    gotoEdit() {
      console.log('+++');
      // this.router.push('/quizzes/edit')
    },
    refresh() {
      return true;
    },
  },
};
</script>