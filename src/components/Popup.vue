<template>
  <div class="popup-container">
    <div class="popup-backdrop"></div>
    <div class="popup-main"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Popup",
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
.popup-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10000000000;
}

.popup-container .popup-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100001;
}
</style>