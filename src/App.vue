<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  created() {
    window.addEventListener("offline", () => {
      console.log("offline")
      this.$router.push({
        name: 'Offline'
      })
    });
  },
});
</script>