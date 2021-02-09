<template>
  <ion-header>
    <div class="header"></div>
  </ion-header>
  <div class="content">
    <div class="record-panel">
      <div>
        <b>{{ result.name }} </b
        ><span style="margin-left: 8px">{{ result.number }}</span>
      </div>
      <div style="margin-top: 8px">
        <span style="font-size: 36px">{{ result.score }}</span>
        <span style="font-size: 10px; margin-left: 3px; color: dark">分</span>
      </div>

      <div style="color: gray; margin-top: 16px">
        <!-- <small>正确：</small>
            <small>错误：</small> -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Records",
  props: {
    result: Object,
  },
  data() {
    return {};
  },
  components: {},
});
</script>

<style>
.scan-result-modal .modal-wrapper {
  position: absolute;
  bottom: 0;
  height: 20%;
  min-height: 150px;
  background: transparent;
}

.scan-result-modal .modal-shadow {
  position: absolute;
  bottom: 0;
  height: 20%;
   min-height: 150px;
}
</style>

<style scoped>
.container {
  margin-top: 16px;
  padding: 16px 8px;
}

.record-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
</style>