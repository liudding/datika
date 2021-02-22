<template>
  <ion-header>
    <div class="header"></div>
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

export default defineComponent({
  props: ["data"],
  emits: ["saved"],
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

      const resp = await Api.user.updateProfile({
        [this.data.key]: this.newVal,
      });

      this.$store.commit("SET_PROFILE", resp.data);

      this.$emit("saved");

      this.resetData();
    },

    resetData() {
      this.newVal = "";
    },
  },
});
</script>

<style scoped>
.content {
  --background: white;
  height: 100%;
  padding: 32px 16px 0 16px;
  --padding-top: 32px;
  --padding-start: 16px;
  --padding-end: 16px;
}

ion-item {
  --background: #eee;
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {
  ion-item {
    --background: rgb(83, 83, 83);
    border-radius: 8px;
  }

  .modal-custom-class .header {
    background: rgb(34, 34, 34);
  }

  ion-content {
    --background: rgb(34, 34, 34);
  }
}
</style>