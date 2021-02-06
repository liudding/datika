<template>
  <div class="emptyset-container">
    <div class="emptyset-title">
      {{title}}
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
      default: "暂无数据"
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
  color: dark;
}


</style>