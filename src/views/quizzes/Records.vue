<template>
  <ion-list>
    <RecordItem v-for="record in records" :key="record.id" :record="record" :quizId="quiz.id" />
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import RecordItem from "./RecordItem.vue";
import Loading from "@/mixins/Loading";

export default defineComponent({
  name: "Records",
  props: ["quiz"],
  mixins: [Loading],
  components: {
    RecordItem,
  },
  setup() {
    return { store: useStore(), }
  },
  data() {
    const studentRecords: any[] = [];
    return {
      students: [],
      records: [],
      studentRecords,
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    async getRecords() {
      const query: any = { size: 20 };
      if (this.quiz.studentCount <= 100) {
        query.size = 100;
      }

      const loading = await this.loading();

      const resp = await this.store.dispatch("quiz/studentRecords", this.quiz);
      this.records = resp.data;

      loading.dismiss();
    },
  },
});
</script>

<style scoped>
ion-list {
  padding: 8px;
  background: transparent;
}
</style>