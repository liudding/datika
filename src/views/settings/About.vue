<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>关于</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="main">
        <img
          @click="onClickLogo"
          src="/img/icons/android-chrome-512x512.png"
          class="logo"
        />
        <div>{{ appName }}</div>

        <div class="version">{{version}}</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Console from "@/services/console";

export default defineComponent({
  components: {},
  data() {
    return {
      appName: process.env.VUE_APP_NAME,

      version: '1.0.0',

      clickCount: 0,
    };
  },
  methods: {
    onClickLogo() {
      this.clickCount++;

      if (this.clickCount === 12) {
        Console.load();
      }
    },
  },
});
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;
}

.logo {
  width: 80px;
  height: 80px;
  /* background-color: rgb(255, 183, 183); */
  border-radius: 8px;
  border: none;
}

.version {
  margin-top: 4px;
  color: gray;
  font-size: 14px;
}
</style>