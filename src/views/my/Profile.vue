<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>账户信息</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item-group>
        <ion-item-divider></ion-item-divider>

        <ion-item button lines="none" @click="onClickName">
          昵称
          <div slot="end">{{ user.name }}</div>
        </ion-item>
        <ion-item-divider></ion-item-divider>

        <ion-item button lines="none">
          手机
          <div slot="end">{{ user.mobile }}</div>
        </ion-item>
      </ion-item-group>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonItemDivider, IonItemGroup } from "@ionic/vue";
import { mapState } from "vuex";
import Modal from "@/mixins/Modal";
import UpdateProfileItem from "./UpdateProfileItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "My",
  components: {
    IonItemDivider,
    IonItemGroup,
  },
  mixins: [Modal],
  computed: {
    ...mapState({
      user: (state: any) => state.user,
    }),
  },
  data() {
    const updateModal: any = null;

    return {
      updateModal,
    };
  },
  methods: {
    async onClickName() {
      this.updateModal = await this.modal(UpdateProfileItem, {
        onSaved: this.onSaved,
        data: {
          name: '昵称',
          key: 'name',
          value: this.user.name
        }
      });
    },
    onSaved() {
      this.updateModal.dismiss();
    },
  },
});
</script>

<style scoped>
ion-item-divider {
  --background: transparent;
  --inner-padding-bottom: 0;
  --inner-padding-top: 0;
  --padding-top: 0;
  --padding-bottom: 0;
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