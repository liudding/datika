<template>
  <ion-item v-if="record" @click="gotoRecord" :detail="record.id" lines="none">
    <div class="" style="padding: 8px 0">
      <div style="font-size: 17px">{{ record.studentName }}</div>
      <div class="d-flex" style="font-size: 14px; margin-top: 4px; color: gray">
        <div>{{ classroomName(record.classroomId) }}</div>
        <div style="margin-left: 8px">{{ record.studentNumber }}</div>
      </div>
    </div>

    <div slot="end">
      <div v-if="record.id">{{ record.score}}</div>
      <ion-note v-else>{{ record.score ? record.score : '未录入' }}</ion-note>
    </div>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { mapState } from "vuex";

export default defineComponent({
  name: "recordListItem",
  components: {},
  props: {
    record: Object,
    quizId: Number,
  },
  computed: {
    ...mapState({
      classrooms: (state: any) => state.classroom.list
    })
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      classroomName: (id: number) => {
        const classroom = (this.classrooms as any).find(
          (c: any) => c.id == id
        );
        return classroom ? classroom.name : "";
      },
    };
  },
  methods: {
    gotoRecord() {
      if (!this.record?.id) {
        return;
      }

      this.router.push({
        name: "QuizRecord",
        params: {
          quizId: this.record?.quizId || this.quizId,
          recordId: this.record?.id,
        },
        query: {
          studentName: this.record?.studentName,
          studentNumber: this.record?.studentNumber,
        },
      });
    },
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