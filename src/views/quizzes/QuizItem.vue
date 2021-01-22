<template>
  <ion-item
    v-if="quiz"
    :routerLink="'/quizzes/' + quiz.id"
    :detail="false"
    class="list-item"
  >
    <div slot="start" :class="!quiz.read ? 'dot dot-unread' : 'dot'">

    </div>

    <ion-label class="ion-text-wrap">
      <h2>
        {{ quiz.name }}
        <span class="date">
          <ion-note>{{ quiz.date }}</ion-note>
          
        </span>
      </h2>
      <h3>{{ quiz.recordCount }}</h3>
      <p>
       
      </p>
    </ion-label>

    <div slot="end">
      10/80
      <ion-icon
            :icon="chevronForward"
            size="small"
            v-if="isIos()"
          ></ion-icon>
    </div>
  </ion-item>
</template>

<script lang="ts">
import { IonIcon, IonItem, IonLabel, IonNote } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuizListItem",
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
  },
  props: {
    quiz: Object,
  },
  methods: {
    isIos: () => {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === "ios";
    },
  },
  data() {
    return { chevronForward };
  },
});
</script>

<style scoped>
.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item h2 {
  font-weight: 600;
  margin: 0;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .date {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  align-self: start;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-unread {
  background: var(--ion-color-primary);
}
</style>