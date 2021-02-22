<template>
  <div class="emptyset-container">
    <div class="emptyset-title">
      {{ title }}
    </div>
    <div class="emptyset-message">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      default: "暂无数据",
    },
    message: {
      type: String,
      default: "",
    },
  },
  methods: {},
  data() {
    return {};
  },
});
</script>

<style scoped>
.emptyset-container {
  width: 100%;
  min-width: 100px;
  padding-top: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.emptyset-title {
  font-size: 24px;
  color: gray;
}
.emptyset-message {
  margin-top: 8px;
  font-size: 12px;
  color: gray;
}
</style>