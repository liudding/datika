<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>归档旧测验</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal">取消</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-radio-group :value="months" @ionChange="onChange">
        <ion-item v-for="num in numbers" :key="num">
          <ion-label>{{ num }} 个月前</ion-label>
          <ion-radio slot="end" :value="num"></ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    months: {
      type: Number,
      default: 6,
    },
  },
  emits: ["change"],
  data() {
    return {
      numbers: [1, 2, 3, 6, 8, 9, 12],
    };
  },
  methods: {
    onChange($event: CustomEvent) {
      this.$emit("change", $event.detail.value);
    },
    dismissModal() {
      window._modal.dismiss();
    },
  },
});
</script>

<style scoped>
</style>