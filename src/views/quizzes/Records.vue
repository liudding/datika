<template>
  <ion-list>
    <RecordItem v-for="record in records" :key="record.id" :record="record" />
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecordItem from "./RecordItem.vue";

export default defineComponent({
  name: "Records",
  props: ["quiz"],
  components: {
    RecordItem,
  },
  setup() {
    //
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

      const resp = await this.$store.dispatch("quiz/studentRecords", this.quiz);
      this.records = resp.data;
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