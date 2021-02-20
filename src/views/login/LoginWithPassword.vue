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
          <ion-button @click="getVerificationCode">获取验证码</ion-button>
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
import Api from '@/api'

export default defineComponent({
  data() {
    return {
      personOutline,
      lockClosedOutline,
      segment: 'code',

      username: "ding",
      password: "123456",
      mobile: "",
      code: ""
    };
  },
  setup() {
    const store = useStore();
    return { store };
  },
  components: {},
  methods: {
    login() {
      //
      console.log(this.username);

      this.store
        .dispatch("login", {
          username: this.username,
          password: this.password,
          mobile: this.mobile,
          code: this.code
        })
        .then((res: any) => {
          return this.store.dispatch("profile");
        })
        .then((res: any) => {
          this.$router.replace({ path: "/" });
        })
        .catch(() => {
          //
        });
    },
    async getVerificationCode() {
      await Api.auth.getVerificationCode(this.username)
    },
    segmentChanged($event: CustomEvent) {
      this.segment = $event.detail.value
    }
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