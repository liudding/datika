<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-item lines="none"></ion-item>
      <div class="profile">
        <ion-item lines="none" detail routerLink="/my/profile">
          <div class="name">{{ user.name }}</div>
        </ion-item>
      </div>

      <ion-item-group>
        <!-- <ion-item-divider></ion-item-divider> -->

        <ion-item routerLink="/subscriptions" lines="none" detail
          >订阅</ion-item
        >
        <ion-item-divider></ion-item-divider>

        <ion-item routerLink="/settings" detail>设置</ion-item>
        <ion-item @click="gotoFeedback" detail>帮助与反馈</ion-item>
        <ion-item routerLink="/about" detail lines="none">关于</ion-item>
      </ion-item-group>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { mapState } from "vuex";
import ActionSheet from "@/mixins/ActionSheet";
import { useStore } from "vuex";
import { defineComponent } from "vue";
import { Plugins } from "@capacitor/core";
import ua from "@/utils/uaDetect";

const { Browser } = Plugins;

export default defineComponent({
  name: "My",
  components: {},
  mixins: [ActionSheet],
  computed: {
    ...mapState({
      user: (state: any) => state.user,
    }),
  },
  setup() {
    return {
      store: useStore(),
    };
  },
  data() {
    return {};
  },
  methods: {
    async gotoFeedback() {
      const params: any = {
        clientInfo: "",
        clientVersion: "",
        os: ua.os,
        osVersion: ua.osVersion,
        customInfo: navigator.userAgent,
      };

      let query = "";
      for (const key in params) {
        query += "&" + key + "=" + encodeURIComponent(params[key]);
      }

      const url =
        process.env.VUE_APP_BASE_URL +
        "/feedback?token=" +
        this.user.token +
        query;

      await Browser.open({ url });
    },
  },
});
</script>

<style scoped>
ion-item-divider {
  --background: transparent;
  /* --inner-padding-bottom: 0;
  --inner-padding-top: 0;
  --padding-top: 0;
  --padding-bottom: 0; */
}

.profile ion-item {
  --padding-top: 32px;
  --padding-bottom: 16px;
  margin-bottom: 8px;
}
.profile .name {
  margin-left: 8px;
  font-weight: 700;
}
</style>