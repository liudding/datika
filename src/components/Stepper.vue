<template>
  <div class="stepper-container">
    <button
      class="stepper-button decrease"
      :disabled="num <= min"
      @click.stop="onDecrease"
    >
      <ion-icon :icon="removeOutline"></ion-icon>
    </button>
    <input
      type="number"
      v-model="num"
      :min="min"
      :max="max"
      @blur.stop="onInputChange"
    />
    <button
      class="stepper-button increase"
      :disabled="num >= max"
      @click="onIncrease"
    >
      <ion-icon :icon="addOutline"></ion-icon>
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { addOutline, removeOutline } from "ionicons/icons";

export default defineComponent({
  name: "Stepper",
  props: {
    value: {
      type: Number,
      value: 0,
    },
    min: {
      type: Number,
      value: -Infinity,
    },
    max: {
      type: Number,
      value: Infinity,
    },

    inputable: {
      type: Boolean,
      value: true,
    },

    name: String
  },
  emits: ["change"],
  data() {
    return { addOutline, removeOutline, num: 0 };
  },
  watch: {
    value: function (val) {
      this.num = val;
    },
  },
  created() {
    this.num = this.value;
  },
  methods: {
    onDecrease() {
      if (this.num - 1 < this.min) return;

      this.num--;

      this.emit();
    },

    onIncrease() {
      if (this.num >= this.max) return;

      this.num++;
      this.emit();
    },

    onInputChange() {
      if (this.num >= this.max) this.num = this.max;
      if (this.num < this.min) this.num = this.min

      this.emit();
    },

    emit() {
      this.$emit("change", this.num, this.name);
    },
  },
});
</script>

<style lang="scss" scoped>
.stepper-container {
  display: flex;
  align-items: center;
}

input {
  width: 30px;
  border: none;
  border-radius: 0;
  text-align: center;
  border-top: solid 1px #ededed;
  border-bottom: solid 1px #ededed;
  box-sizing: border-box !important;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: bold;

  // Firefox-specific hack
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: 0;
    border-color: var(--ion-color-primary);
  }
}

.stepper-button {
  width: 20px;
  height: 20px;
  background-color: #ededed;
  font-size: 15px;
  padding: 0;
  color: black;
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