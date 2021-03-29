<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>关于</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="main">
        <div class="logo-wrapper">
          <img @click="onClickLogo" :src="Logo" class="logo" />
        </div>

        <div>{{ appName }}</div>

        <div class="version">{{ nativeVersion }} ({{ version }})</div>

        <div
          v-if="newVersionInfo && newVersionInfo.installedPath"
          class="new-version"
        >
          <div class="version-num" @click="applyNewVersion">
            {{ newVersionInfo.version }}<span class="tag">新版本</span>
          </div>
          <small>重新启动后，将应用新版本</small>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Console from "@/services/console";
import Storage from "@/utils/storage";
import Logo from "@/assets/images/logo.png";
import UpdateManager from "@/services/updater";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

export default defineComponent({
  components: {},
  data() {
    return {
      appName: process.env.VUE_APP_NAME,
      Logo,

      version: "",

      nativeVersion: "",

      newVersionInfo: null,

      clickCount: 0,
    };
  },
  async created() {
    const appInfo = await Device.getInfo();

    this.nativeVersion = appInfo.appVersion;

    const webVersion = await Storage.get("web_version");

    this.version = webVersion || process.env.VUE_APP_VERSION;

    this.newVersionInfo = await UpdateManager.getNewVersion();
  },
  methods: {
    onClickLogo() {
      this.clickCount++;

      if (this.clickCount === 12) {
        Console.load();
      }
    },

    async applyNewVersion() {
      // const applied = await UpdateManager.apply();
      // applied && console.log('NEW VERSION APPLIED');
    },
  },
});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px;
}

.logo-wrapper {
  margin-top: 32px;
  // background: #3880FF;
  border-radius: 100%;
  margin-bottom: 16px;
}

.logo {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: none;
}

.version {
  margin-top: 4px;
  color: gray;
  font-size: 14px;
  text-align: center;
}

.new-version {
  margin-top: 16px;
  text-align: center;

  .version-num {
    font-size: 14px;
  }

  .tag {
    margin-left: 4px;
    border-radius: 4px;
    border: 1px solid green;
    color: green;
    font-size: 10px;
    padding: 2px;
  }

  small {
    color: gray;
  }
}
</style>