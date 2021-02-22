<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item v-for="record in records" :key="record.id">
        {{ record.studentName }} <span style="color: gray;">（{{ record.studentNumber }}）</span>
        <div slot="end">{{ record.score }} <span style="color: gray; font-size: 12px;">分</span></div>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["records", "title"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
});
</script>

<style scoped>
ion-content {
  --padding-top: 16px;
}
</style>