<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- <ion-img src="" class="background"></ion-img> -->

      <div class="main">
        <div class="main-content">
          <div class="head">
            <img src="/img/icons/android-chrome-512x512.png" class="logo" />
          </div>
          <div class="body">
            <h3 class="app-name">{{appName}}</h3>
            <!-- <div class="slogan">slogan</div> -->
          </div>

          <div class="bottom flex">
            <!-- <ion-button v-if="isApp" expand="block">微信登录</ion-button>
            <ion-button v-if="isInWechat" expand="block">微信登录</ion-button> -->
       
            <ion-button
              routerLink="/login/password"
              expand="block"
              style="margin-top: 16px"
              >登 录
            </ion-button>

            <ion-button color="primary" fill="none" size="small" routerLink="/register" class="mt-1 register"
              >注 册</ion-button
            >
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isApp, isInWechat } from "@/utils/env";

export default defineComponent({
  data() {
    return {
      appName: process.env.VUE_APP_NAME
    };
  },
  setup() {
    return {
      isApp: isApp(),
      isInWechat: isInWechat(),
    };
  },
  components: {},
  methods: {},
});
</script>

<style scoped>
ion-content {
  --padding-start: 16px;
  --padding-end: 16px;
  --background: white;
}

.main {
  position: fixed;
  top: 0;
  bottom: 0px;
  left: 0;
  right: 0;
  padding: 0 32px;
}

.main .main-content {
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.main .head {
  margin-top: 90px;
}

.main .body {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main .bottom {
  width: 100%;
  position: absolute;
  bottom: calc(60px + env(safe-area-inset-top));
  left: 0;

}

.flex {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 80px;
  height: 80px;
  /* background-color: rgb(255, 183, 183); */
  border-radius: 8px;
  border: none;
}
.app-name {
}

.slogan {
  color: gray;
}

ion-button {
  width: 100%;
  --border-radius: 100px;
}

.outline {
  border: 1px solid var(--ion-color-primary);
  border-radius: 100px;
  --background: transparent;
  color: black;
}


.mt-1 {
  margin-top: 20px;
}

.background {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background-color:red; */
}

.register {
  color: var(--ion-color-primary);
}
</style>