<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>默认题目数量</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal">取消</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-radio-group :value="count" @ionChange="onChange">
        <ion-item v-for="num in numbers" :key="num">
          <ion-label>{{ num }} 个</ion-label>
          <ion-radio slot="end" :value="num"></ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonRadio, IonRadioGroup } from "@ionic/vue";
export default defineComponent({
  props: {
    count: {
      type: Number,
      default: 10,
    },
  },
  components: {
    IonRadio,
    IonRadioGroup,
  },
  emits: ["change", "aaa"],
  data() {
    return {
      numbers: [10, 15, 20],
      picked: 10,
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
