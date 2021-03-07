<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>编辑{{ data.name }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="content">
    <ion-item lines="none">
      <ion-input
        :value="data.value"
        @ionChange="newVal = $event.target.value"
        required
        :placeholder="data.name"
      ></ion-input>
    </ion-item>

    <ion-button @click="submit" expand="block" style="margin-top: 32px"
      >保存</ion-button
    >
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";
import Api from "@/api";
import Console from "@/services/console";
import Toast from "@/mixins/Toast";
import Loading from "@/mixins/Loading";

export default defineComponent({
  props: ["data"],
  emits: ["saved"],
  mixins: [Toast, Loading],
  data() {
    return {
      newVal: "",
    };
  },
  methods: {
    async submit() {
      if (!this.newVal) return;

      if (this.newVal === "debug:console") {
        Console.load();
        return;
      }

      const loading = await this.loading();

      try {
        const resp = await Api.user.updateProfile({
          [this.data.key]: this.newVal,
        });

        this.toast({
          title: "保存成功",
          color: "success",
          duration: 1000,
        });

        this.$store.commit("SET_PROFILE", resp.data);

        this.$emit("saved");

        this.resetData();
      } catch (e) {
        this.toast({
          title: "保存失败",
          message: e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },

    resetData() {
      this.newVal = "";
    },
  },
});
</script>

<style scoped>
.content {
  height: 100%;
  padding: 32px 16px 0 16px;
  --padding-top: 32px;
  --padding-start: 16px;
  --padding-end: 16px;
}

ion-item {
  --inner-padding-end: 0;
  border-radius: 100px;
  border-top-left-radius: 100px;
  margin-bottom: 8px;
}

ion-button {
  margin-top: 32px;
  --border-radius: 100px;
}
</style>