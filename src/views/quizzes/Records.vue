<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-title>Records</ion-title>
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <ion-item lines="none">
        <ion-label>人数：{{ records.length }}</ion-label>
        <ion-label> <ion-note>平均分</ion-note></ion-label>

        <ion-label> <ion-note>最高分</ion-note></ion-label>
        <ion-label> <ion-note>最低分</ion-note></ion-label>
      </ion-item>
      <ion-list>
        <RecordItem
          v-for="record in records"
          :key="record.id"
          :record="record"
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
  IonNote,
} from "@ionic/vue";

import { scanOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

import RecordItem from "./RecordItem.vue";

export default defineComponent({
  name: "Records",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonNote,
    IonContent,
    IonPage,
    RecordItem,
  },
  setup() {
    const router = useRouter();

    return { scanOutline, router };
  },
  data: () => {
    return {
      records: [
        {
          id: 1,
          name: "Student 1",
          studentId: 1,
          score: 56,
          date: "2020-09-09",
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Quiz 2",
          score: 50,
        },
        {
          name: "Quiz 2",
          score: 50,
        },
      ],
      showCreatePopup: false,
    };
  },
  methods: {
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