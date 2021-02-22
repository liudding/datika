<template>
  <div class="container">
    <div class="label">
      {{ question.label }}.
      <div style="font-size: 12px; color: gray">
        {{ question.score }}<span style="font-size: 10px">分</span>
      </div>
    </div>
    <div class="bar-chart">
      <div
        v-for="choice in question.choices"
        :key="question.questionId + choice.choice"
        class="bar-chart__item"
        @click="onClickChoice(choice)"
      >
        <div class="bar-chart__bar">
          <div
            class="bar-chart__bar-inner"
            :style="{
              height:
                (choice.students.length / question.recordCount) * 100 + '%',
            }"
          ></div>
        </div>
        <div>
          <div
            class="choice"
            :class="{
              correct: choice.isCorrect,
            }"
          >
            {{ choice.choice }}
          </div>
          <div style="font-size: 12px; color: gray; text-align: center">
            {{ choice.students.length }}<span style="font-size: 10px">人</span>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-left: 16px;">
      <div style="font-size: 14px">得分率 {{ question.correctRate }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  emits: ["choice"],
  methods: {
    onClickChoice(choice) {
      // 展示选择了此选项的学生名单
      console.log("choice: ", choice);
      this.$emit("choice", choice, this.question);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  .label {
    margin-right: 16px;
  }
}

.bar-chart {
  display: flex;
  height: 120px;

  &__item {
    display: flex;
    flex-direction: column;
    margin-right: 8px;
  }

  &__bar {
    flex: 1;
    background: rgb(236, 236, 236);
    position: relative;
    border-radius: 4px;
    width: 20px;

    &-inner {
      background: var(--ion-color-primary);
      position: absolute;
      bottom: 0;
      width: 100%;
      border-radius: 4px;
    }
  }

  .choice {
    font-size: 14px;
    text-align: center;

    &.correct {
      color: var(--ion-color-primary);
      font-weight: bold;
    }
  }
}
</style>