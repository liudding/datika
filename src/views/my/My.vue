<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-item lines="none"></ion-item>

      <div class="profile">
        <ion-item lines="none" detail  routerLink="/my/profile">
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>

          <div class="name">{{ user.name }}</div>
        </ion-item>
      </div>

      <ion-item-group>
        <!-- <ion-item-divider></ion-item-divider> -->

        <ion-item button routerLink="/subscriptions" lines="none">订阅</ion-item>
        <ion-item-divider></ion-item-divider>

        <ion-item button routerLink="/settings">设置</ion-item>
        <ion-item button routerLink="/help">帮助与反馈</ion-item>
        <ion-item button routerLink="/about">关于</ion-item>
      </ion-item-group>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonItemDivider,
  IonItemGroup,
  IonAvatar,
} from "@ionic/vue";
import { mapState } from "vuex";

export default {
  name: "My",
  components: {
    IonAvatar,
    IonItemDivider,
    IonItemGroup
  },
  computed: {
    ...mapState({
      user: (state: any) => state.user
    })
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
ion-item-divider {
  --background: transparent;
  --inner-padding-bottom: 0;
  --inner-padding-top: 0;
  --padding-top: 0;
  --padding-bottom: 0;
  min-height: 8px;
}

.profile ion-item {
  /* height: 80px; */
  --padding-top: 32px;
  --padding-bottom: 16px;
  margin-bottom: 8px;
}
.profile .name {
  margin-left: 8px;
  font-weight: 700;
}
</style>