<template>
  <div class="container">
    <ion-list>
      <ion-item v-for="record in records" :key="record.id">
        <b>{{ record.student.name }}</b>
        <span style="margin-left: 8px;color:gray;">{{ record.student.number }}</span>

        <div slot="end">{{ record.score }}<span style="color:gray; font-size: 12px;">分</span></div>
      </ion-item>
    </ion-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Records",
  props: {
    records: Array,
  },
  data() {
    return {};
  },
  components: {},
});
</script>

<style scoped>
.container {
  margin-top: 16px;
  padding: 16px 8px;
}
</style>