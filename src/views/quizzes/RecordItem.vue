<template>
  <ion-item
    v-if="record"
    :routerLink="'/quizzes/' + record.quizId + '/records/' + record.id"
    :detail="false"
    lines="none"
  >
    <div class="" style="padding: 8px 0;">
      <div style="font-size: 17px;">{{ record.student.name }}</div>
      <div class="d-flex" style="font-size: 14px; margin-top: 4px; color: gray;">
        <div>{{ record.classroom.name }}</div>
        <div style="margin-left: 8px">{{ record.student.number }}</div>
      </div>
    </div>

    <div slot="end">{{ record.score }}</div>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "recordListItem",
  components: {},
  props: {
    record: Object,
  },
  methods: {},
  data() {
    return { };
  },
});
</script>

<style scoped>
ion-item {
  --min-height: 50px;

  border-radius: 8px;
  margin-bottom: 8px;
}
</style>