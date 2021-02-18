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
      <div style="margin-top: 40px">
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

export default defineComponent({
  data() {
    return {
      personOutline,
      lockClosedOutline,

      username: "ding",
      password: "123456",
    };
  },
  setup() {
    return {};
  },
  components: {},
  methods: {
    login() {
      //
      console.log(this.username);

      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then((res: any) => {
          return this.$store.dispatch("profile");
        })
        .then((res: any) => {

          this.$router.replace({ path: '/'} )
        })
        .catch(() => {
          //
        });
    },
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --min-height: 54px;
  --background: #efefef;

  border-radius: 100px;
  margin-bottom: 8px;
}

ion-content {
  --padding-start: 16px;
  --padding-end: 16px;
}

ion-toolbar {
  --border-color: white;
}

ion-button {
  --border-radius: 100px;
}

ion-item ion-icon {
  margin-right: 16px;
}
</style>