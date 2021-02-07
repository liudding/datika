<template>
  <ion-list>
    <RecordItem v-for="record in records" :key="record.id" :record="record" />
  </ion-list>
</template>

<script lang="ts">
import { scanOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

import RecordItem from "./RecordItem.vue";
import Api from "@/api";

export default defineComponent({
  name: "Records",
  props: ["quiz"],
  components: {
    RecordItem,
  },
  setup() {
    const router = useRouter();

    return { scanOutline, router };
  },
  data: () => {
    return {
      records: [],
      showCreatePopup: false,
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    async getRecords() {
      const query: any = { size: 20 };
      if (this.quiz.studentCount <= 100) {
        query.size = 100
      }

      const resp = await Api.quiz.records(+this.quiz.id, query);
      this.records = resp.data.data;
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