<template>
  <div class="emptyset-container">
    <div class="emptyset-title">
      暂无数据
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    message: Object,
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