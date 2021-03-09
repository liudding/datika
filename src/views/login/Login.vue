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
            <h3 class="app-name">{{ appName }}</h3>
            <!-- <div class="slogan">slogan</div> -->
          </div>

          <div class="bottom flex">
            <ion-button
              v-if="isApp"
              @click="onClickWechat"
              expand="block"
              class="wechat-btn"
              ><ion-icon
                :icon="logoWechat"
                style="margin-right: 8px"
              ></ion-icon>
              微信登录</ion-button
            >
            <!-- <ion-button v-if="isInWechat" expand="block">微信登录</ion-button> -->

            <ion-button
              routerLink="/login/password"
              expand="block"
              style="margin-top: 16px"
              ><ion-icon :icon="person" style="margin-right: 8px"></ion-icon> 账户登录
            </ion-button>

            <ion-button
              color="primary"
              fill="none"
              size="small"
              routerLink="/register"
              class="mt-1 register"
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
import { Wechat } from "@ionic-native/wechat";
import Alert from "@/mixins/Alert";
import { logoWechat, person } from "ionicons/icons";

import '@/services/codepush'

export default defineComponent({
  mixins: [Alert],
  data() {
    return {
      appName: process.env.VUE_APP_NAME,
    };
  },
  setup() {
    return {
      isApp: isApp(),
      isInWechat: isInWechat(),
      logoWechat, person
    };
  },
  components: {},
  async created() {
    //
  },
  methods: {
    async onClickWechat() {
      const wechatInstalled = await Wechat.isInstalled();

      if (!wechatInstalled) {
        this.alert("未安装微信");
        return;
      }

      const params = {
        userName: "gh_69cbd5a0dad0",
        path: "pages/index/index",
        miniprogramType: 0, // Wechat.Mini.RELEASE,
      };

      try {
         await Wechat.openMiniProgram(params);
      } catch (e) {
        console.error('openMiniProgram:', e);
      }
     
    },
  },
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

.wechat-btn {
  --background: rgb(32, 192, 100);
  --background-activated: rgb(43, 170, 98);
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