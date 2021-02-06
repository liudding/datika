<template>
  <!-- <ion-item lines="none">
    <ion-label>人数：{{ records.length }}</ion-label>
    <ion-label> <ion-note>平均分</ion-note></ion-label>

    <ion-label> <ion-note>最高分</ion-note></ion-label>
    <ion-label> <ion-note>最低分</ion-note></ion-label>
  </ion-item> -->
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