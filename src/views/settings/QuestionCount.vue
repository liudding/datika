<template>
  <ion-header>
    <div class="header"></div>
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
  },
});
</script>

<style scoped>
.header {
  height: 40px;
  width: 100%;
  background: white;

  border-top-left-radius: 16px;

  border-top-right-radius: 16px;
}

@media (prefers-color-scheme: dark) {
  .header {
    background: #252525;
  }

  ion-content {
    --background: #252525;
  }
}
</style>