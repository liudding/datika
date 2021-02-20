<template>
  <div class="container">
    <div class="label">{{ question.label }}.</div>
    <div class="bar-chart">
      <div
        v-for="choice in question.choices"
        :key="question.questionId + choice.choice"
        class="bar-chart__item"
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
          <div style="font-size: 14px">{{ choice.choice }}</div>
          <div style="font-size: 12px">{{ choice.students.length }}<span style="font-size:10px">人</span></div>
        </div>
      </div>
    </div>

    <div>{{ question.correctRate }}</div>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  .label {
    margin-right: 8px;
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
      background: green;
      position: absolute;
      bottom: 0;
      width: 100%;
       border-radius: 4px;
    }
  }
}
</style>