<template>
  <div class="rules">
    <div
      class="rule miss"
      :class="{
        selected: missIsChecked,
      }"
    >
      <ion-checkbox
        :modelValue="missIsChecked"
        @ionChange="onCheckbox1Changed"
      ></ion-checkbox>
      漏选得
      <input type="number" v-model="missScore" @blur="onInput1Change" />分
    </div>

    <div
      class="rule per"
      :class="{
        selected: perchoiceIsChecked,
      }"
    >
      <ion-checkbox
        :modelValue="perchoiceIsChecked"
        @ionChange="onCheckbox2Changed"
      ></ion-checkbox>
      选对一项得<input
        type="number"
        v-model="perChoiceScore"
        @blur="onInput2Change"
      />分
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionItem",
  props: {
    question: Object,
  },
  emits: ["change"],
  data() {
    return {
      missIsChecked: true,
      perchoiceIsChecked: false,

      perChoiceScore: 0,
      missScore: 0,
    };
  },
  methods: {
    onCheckbox1Changed($event: any) {
      this.missIsChecked = $event.detail.checked;
      this.perchoiceIsChecked = !$event.detail.checked;
    },
    onCheckbox2Changed($event: any) {
      this.missIsChecked = !$event.detail.checked;
      this.perchoiceIsChecked = $event.detail.checked;
    },

    onInput1Change() {
      if (this.missScore > this.question?.score) {
        this.missScore = this.question?.score;
      }
    },
    onInput2Change() {
      //
    },
  },
});
</script>

<style lang="scss" scoped>
.rule {
  height: 40px;
  background-color: rgb(238, 238, 238);
  margin-bottom: 4px;

  display: flex;
  align-items: center;

  padding: 4px 16px;

  ion-checkbox {
    margin-right: 8px;
  }

  color: rgb(175, 175, 175);

  &.selected {
    color: black;
  }
}
.miss {
}

input {
  width: 40px;
  margin: 0 4px;
}
</style>