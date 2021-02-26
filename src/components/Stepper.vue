<template>
  <div class="stepper-container">
    <button class="stepper-button decrease" @click.stop="onDecrease"><ion-icon :icon="removeOutline"></ion-icon></button>
    <input type="text" :value="value" :min="min" :max="max" readonly />
    <button class="stepper-button increase" @click="onIncrease"><ion-icon :icon="addOutline"></ion-icon></button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { addOutline, removeOutline} from "ionicons/icons";

export default defineComponent({
  name: "Stepper",
  props: {
    value: {
      type: Number,
      value: 0,
    },
    min: Number,
    max: Number,
  },
  emits: ["change"],
  methods: {
    onDecrease() {
      if (this.value - 1 < this.min) return;

      this.$emit("change", this.value - 1);
    },

    onIncrease() {
      this.$emit("change", this.value + 1);
    },
  },
  data() {
    return {addOutline, removeOutline};
  },
});
</script>

<style scoped>
.stepper-container {
  display: flex;
}

input {
  width: 30px;
  border: none;
  text-align: center;
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;
}

.stepper-button {
  width: 20px;
  height: 20px;
  background-color: #ddd;

  /* text-align: center; */
  /* line-height: 20px; */
  font-size: 15px;
  padding: 0;
}

.stepper-button.increase {
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}

.stepper-button.decrease {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

button:active {
  opacity: 0.5;
  border: none;
}

button:focus {
  border: none;
  outline: none;
}
</style>