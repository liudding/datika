<template>
  <ion-header>
    <div class="header"></div>
  </ion-header>
  <ion-content>
    <ion-list>
    <ion-radio-group :value="days" @ionChange="onChange">
      <ion-item v-for="num in numbers" :key="num">
        <ion-label>{{num}} 天</ion-label>
        <ion-radio slot="end" :value="num"></ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { 
  IonRadio, 
  IonRadioGroup
} from '@ionic/vue';
export default defineComponent({
  props: {
    days: {
      type: Number,
      default: 30
    }
  },
  components: { 
    IonRadio, 
    IonRadioGroup
  },
  emits: ['change'],
  data() {
    return {
      numbers: [7, 14, 30, 60, 90, 120],
    };
  },
  methods: {

    onChange($event: CustomEvent) {
      this.$emit('change', $event.detail.value);
    }
  }
});
</script>

<style scoped>
.header {
  background: #252525;
  height: 40px;
  width: 100%;

  border-top-left-radius: 16px;

  border-top-right-radius: 16px;
}
ion-content {
  --background: #252525;
}
</style>