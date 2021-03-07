<template>
  <ion-app>
    <div v-if="showOffline" class="network-status">
      <div>请检查网络连接</div>
    </div>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import { Plugins } from "@capacitor/core";
const { Network } = Plugins;

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  data() {
    return {
      showOffline: false,
    };
  },
  created() {
    Network.addListener("networkStatusChange", (status) => {
      this.showOffline = !status.connected;
    });
  },
});
</script>

<style scoped>
.network-status {
  position: fixed;
  z-index: 1000;
  top: 0;
  height: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--ion-color-warning);
}

.network-status div {
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
}
</style>