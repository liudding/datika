<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="() => router.push('/scan')"> Scan </ion-button>
        </ion-buttons>
        <ion-title>Classrooms</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="() => router.push('/classrooms/edit')"> New </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inbox</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <Classroom
          v-for="message in messages"
          :key="message.id"
          :message="message"
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

import Classroom from "@/components/Classroom.vue";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    Classroom,
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
      classrooms: [
        {
          name: "class 1",
          studentCount: 40,
        },
        {
          name: "class 2",
          studentCount: 40,
        },
      ],

      messages: [
        {
          fromName: "Matt Chorsey",
          subject: "New event: Trip to Vegas",
          date: "9:32 AM",
          id: 0,
        },
        {
          fromName: "Lauren Ruthford",
          subject: "Long time no chat",
          date: "6:12 AM",
          id: 1,
        },
      ],
    };
  },
  methods: {
    gotoEdit() {
      console.log('+++');
      // this.router.push('/classrooms/edit')
    },
    refresh() {
      return true;
    },
  },
};
</script>