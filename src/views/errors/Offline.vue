<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="d-flex flex-column">
        <img src="/img/icons/android-chrome-512x512.png" class="logo" />
        <ion-label style="text-align: center">没有网络</ion-label>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  created() {
    window.addEventListener("online", () => {
      this.$router.replace({
        path: "/",
      });
    });
  },
  components: {},
  methods: {},
});
</script>

<style scoped>
ion-content {
  --padding-start: 16px;
  --padding-end: 16px;
}
</style>