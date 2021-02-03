<template>
  <ion-item
    v-if="quiz"
    :routerLink="'/quizzes/' + quiz.id"
    :detail="false"
    lines="none"
    class="list-item"
  >
    <ion-label class="ion-text-wrap">
      <div style="display: flex; justify-content: space-between">
        <h1>{{ quiz.name }}</h1>
        <div class="progress">
          {{ quiz.recordCount }}/{{ quiz.studentCount }}
        </div>
      </div>

      <div>
        <span class="">
          <ion-note>题数：{{ quiz.questionCount }}</ion-note>
        </span>
        <span class="date">
          <ion-note>{{ quiz.createdAt }}</ion-note>
        </span>
      </div>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuizListItem",

  props: {
    quiz: Object,
  },
  methods: {},
  data() {
    return { chevronForward };
  },
});
</script>

<style scoped>
ion-item {
  --min-height: 80px;

  border-radius: 8px;
  margin-bottom: 8px;
}

ion-note.md {
  margin-right: 14px;
}

</style>