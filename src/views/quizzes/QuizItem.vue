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

      <div class="d-flex justify-content-between" style="margin-top: 8px">
        <div>
          <span class="date">
            <ion-note>{{ quiz.createdAt }}</ion-note>
          </span>
          <span class="" style="margin-left: 16px">
            <ion-note>题数：{{ quiz.questionCount }}</ion-note>
          </span>
        </div>

        <div>
          <div @click.stop="showMore" style="padding: 1px 4px 0 10px;">
            <ion-icon :icon="ellipsisHorizontal"></ion-icon>
          </div>
        </div>
      </div>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { ellipsisHorizontal } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuizListItem",

  props: {
    quiz: Object,
  },

  data() {
    return { ellipsisHorizontal };
  },
  methods: {
    showMore() {
      // copy archive
      this.$emit("more", this.quiz);
    },
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