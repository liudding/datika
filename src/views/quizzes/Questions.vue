<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <!-- <ion-back-button></ion-back-button> -->
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Quiz</ion-title>
        <ion-buttons slot="primary">
          <ion-button @click="setOpen(true, $event)" color="danger">
            <ion-icon slot="end" :icon="createOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
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
          <ion-label>
            <h1>
              {{ questions.length }} 题
              <span>
                <ion-icon :icon="createOutline"></ion-icon>
              </span>
            </h1>
          </ion-label>
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

        <ion-icon :icon="scanOutline" color="primary"></ion-icon>
      </ion-item>

      <ion-list>
        <QuestionItem
          v-for="question in questions"
          :key="question.id"
          :question="question"
          @change="onQuestionChange"
        >
        </QuestionItem>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed" v-if="showFab">
        <ion-fab-button @click="() => router.push('/scan')">
          <ion-icon :icon="scanOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>

    <ion-popover
      :is-open="isOpenRef"
      css-class="my-custom-class"
      :event="refEvent"
      :translucent="true"
      @onDidDismiss="setOpen(false)"
    >
      <ion-list>
        <ion-item button>编辑题目</ion-item>
        <ion-item button>设置测验</ion-item>
      </ion-list>
    </ion-popover>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  IonPopover,
  IonFab,
  IonFabButton,
} from "@ionic/vue";
import { add, createOutline } from "ionicons/icons";
import { scanOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import QuestionItem from "./QuestionItem.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      scanOutline,
      questions: [
        {
          id: 1,
          label: "1",
          bubbles: "ABCDE",
          type: "single_choice",
          score: 1,
        },
        {
          id: 2,
          label: "2",
          bubbles: "ABCDE",
        },
        {
          id: 3,
          label: "3",
          bubbles: "ABCDE",
        },
        {
          id: 4,
          label: "4",
          bubbles: "ABCDE",
        },
        {
          id: 5,
          label: "5",
          bubbles: "ABCDE",
        },
        {
          id: 6,
          label: "6",
          bubbles: "ABCDE",
        },
      ],
    };
  },
  computed: {
    stats() {
      let singleCount = 0;
      let multiCount = 0;
      let booleanCount = 0;
      let score = 0;

      this.questions.forEach((item) => {
        if (item.type === "single_choice") {
          singleCount++;
        } else if (item.type === "multi_choice") {
          multiCount++;
        } else if (item.type === "boolean") {
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
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
    IonPopover,
    IonFab,
    IonFabButton,
    QuestionItem,
  },
  methods: {
    onQuestionChange(question: any, type: string) {
      const index = this.questions.findIndex((i) => i.id === question.id);
      this.questions.splice(index, 1, question);

      console.log(type, question);
    },

    getDefaultQuestion() {
      return {
        id: "",
        label: "",
        type: "single_choice",
        bubbles: "ABCDE",
        score: 1,
      };
    },
  },
});
</script>

<style scoped>
ion-content {
  --background: #eee;
  --padding-top: 8px;
  --padding-start: 8px;
  --padding-end: 8px;
}

ion-list {
  margin-top: 16px;
  background: #eee;
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
</style>