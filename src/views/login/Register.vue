<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>注册</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div style="margin-top: 16px">
        <ion-item lines="none">
          <ion-icon :icon="phonePortraitOutline" color="primary"></ion-icon>
          <ion-input
            :value="mobile"
            @ionChange="mobile = $event.target.value"
            autofocus
            required
            placeholder="手机号"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-icon :icon="personOutline" color="primary"></ion-icon>
          <ion-input
            :value="name"
            @ionChange="name = $event.target.value"
            autofocus
            required
            placeholder="昵称"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-icon :icon="lockClosedOutline" color="primary"></ion-icon>
          <ion-input
            :value="password"
            @ionChange="password = $event.target.value"
            type="password"
            required
            placeholder="密码"
          ></ion-input>
        </ion-item>

        <ion-button @click="register" expand="block" style="margin-top: 32px"
          >注册</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  personOutline,
  lockClosedOutline,
  phonePortraitOutline,
} from "ionicons/icons";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Loading from "@/mixins/Loading";
import Alert from "@/mixins/Alert";
import Toast from "@/mixins/Toast";
import Api from "@/api";
import Validator from "@/utils/validator";

export default defineComponent({
  data() {
    return {
      personOutline,
      lockClosedOutline,
      phonePortraitOutline,

      password: "",
      mobile: "",
      name: "",
    };
  },
  setup() {
    const store = useStore();
    return { store, router: useRouter() };
  },
  components: {},
  mixins: [Loading, Alert, Toast],
  methods: {
    async register() {
      if (!this.mobile || !this.password || !this.name) return;

      if (!Validator.isMobile(this.mobile)) {
        this.toast("手机号格式不正确");
        return;
      }

      if (!Validator.isValidPassword(this.password)) {
        this.toast("密码至少 6 位");
        return;
      }

      const loading = await this.loading();

      try {
        await this.store.dispatch("register", {
          password: this.password,
          mobile: this.mobile,
          name: this.name,
        });

        this.login();
      } catch (e) {
        this.alert({
          title: (e.response && e.response.data.friendlyMessage) || "注册失败",
        });
      } finally {
        loading.dismiss();
      }
    },

    async login() {
      const loading = await this.loading();

      try {
        await this.store.dispatch("login", {
          username: this.mobile,
          password: this.password,
          mobile: this.mobile,
        });

        await this.store.dispatch("profile");

        this.$router.replace({ path: "/" });
      } catch (e) {
        this.router.back();

        this.alert({
          title: "登录失败",
        });
      } finally {
        loading.dismiss();
      }
    },
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --min-height: 54px;

  border-radius: 100px;
  margin-bottom: 8px;
}

ion-content {
  --padding-start: 16px;
  --padding-end: 16px;
}

ion-button {
  --border-radius: 100px;
}

ion-item ion-icon {
  margin-right: 16px;
}
</style>