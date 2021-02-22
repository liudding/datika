<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>登录</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-segment
        @ionChange="segmentChanged($event)"
        :value="segment"
        style="margin-top: 8px"
      >
        <ion-segment-button value="code">
          <ion-label>验证码</ion-label>
        </ion-segment-button>
        <ion-segment-button value="password">
          <ion-label>密码</ion-label>
        </ion-segment-button>
      </ion-segment>

      <div v-show="segment === 'code'" style="margin-top: 16px">
        <ion-item lines="none">
          <ion-icon :icon="personOutline" color="primary"></ion-icon>
          <ion-input
            :value="mobile"
            @ionChange="mobile = $event.target.value"
            autofocus
            required
            placeholder="手机号"
          ></ion-input>
          <ion-button slot="end" @click="getVerificationCode">{{
            codeButtonText
          }}</ion-button>
        </ion-item>
        <ion-item lines="none">
          <ion-icon :icon="lockClosedOutline" color="primary"></ion-icon>
          <ion-input
            :value="code"
            @ionChange="code = $event.target.value"
            required
            placeholder="验证码"
          ></ion-input>
        </ion-item>

        <ion-button @click="login" expand="block" style="margin-top: 32px"
          >登录</ion-button
        >
      </div>
      <div v-show="segment === 'password'" style="margin-top: 16px">
        <ion-item lines="none">
          <ion-icon :icon="personOutline" color="primary"></ion-icon>
          <ion-input
            :value="username"
            @ionChange="username = $event.target.value"
            autofocus
            required
            placeholder="手机号/邮箱"
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

        <ion-button @click="login" expand="block" style="margin-top: 32px"
          >登录</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { personOutline, lockClosedOutline } from "ionicons/icons";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Loading from "@/mixins/Loading";
import Alert from "@/mixins/Alert";
import Api from "@/api";
import Validator from "@/utils/validator"

export default defineComponent({
  data() {
    return {
      personOutline,
      lockClosedOutline,
      segment: "code",

      username: "ding",
      password: "123456",
      mobile: "",
      code: "",

      isCounting: false,
      codeButtonText: "获取验证码",
    };
  },
  setup() {
    const store = useStore();
    return { store };
  },
  components: {},
  mixins: [Loading, Alert],
  methods: {
    async login() {
      //
      const loading = await this.loading();

      try {
        await this.store.dispatch("login", {
          username: this.username,
          password: this.password,
          mobile: this.mobile,
          code: this.code,
        });

        await this.store.dispatch("profile");

        this.$router.replace({ path: "/" });
      } catch (e) {
        this.alert({
          title: "登录失败",
        });
      } finally {
        loading.dismiss();
      }
    },
    async getVerificationCode() {
      if (this.isCounting) return;

      if (!Validator.isMobile(this.mobile)) return;

      const loading = await this.loading();
      try {
        await Api.auth.getVerificationCode(this.mobile);

        this.countdown();
      } catch (e) {
        // this.alert({
        //   title: "验证码发送失败",
        // });
      } finally {
        loading.dismiss();
      }
    },

    countdown() {
       this.isCounting = true;

      let seconds = 60;

      const timer = setInterval(() => {
        this.codeButtonText = "已发送  " + seconds--;

        if (seconds <= 0) {
          clearInterval(timer);
          this.codeButtonText = "获取验证码";
          this.isCounting = false;
        }
      }, 1000);
    },

    segmentChanged($event: CustomEvent) {
      this.segment = $event.detail.value;
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