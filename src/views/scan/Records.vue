<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>成绩</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal">取消</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item-divider></ion-item-divider>
      <ion-item v-for="record in records" :key="record.id">
        <b>{{ record.studentName }}</b>
        <span style="margin-left: 8px; color: gray">{{
          record.studentNumber
        }}</span>

        <div slot="end">
          <div v-if="record.score > 0 || record.score === 0">
            {{ record.score
            }}<span style="color: gray; font-size: 12px">分</span>
          </div>
          <ion-note v-else color="danger" style="font-size: 12px"
            >未录入</ion-note
          >
        </div>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Records",
  props: ["quiz", "records"],
  data() {
    return {};
  },
  methods: {
    dismissModal() {
      window._modal.dismiss();
    },
  },
});
</script>
