<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal">取消 </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content class="content">
    <ion-item lines="none">
      <ion-input
        :value="name"
        @ionChange="name = $event.target.value"
        required
        placeholder="班级名称"
      ></ion-input>
    </ion-item>

    <ion-button @click="submit" expand="block">保存</ion-button>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";
import { addCircle } from "ionicons/icons";
import Api from "@/api";
import Loading from "@/mixins/Loading";
import Toast from "@/mixins/Toast";

export default defineComponent({
  name: "CreateModal",
  props: ["classroom"],
  emits: ["saved"],
  mixins: [Loading, Toast],
  data() {
    return {
      name: this.classroom ? this.classroom.name : "",
      addCircle,
    };
  },
  computed: {
    title() {
      return this.classroom ? "编辑班级" : "添加班级";
    },
  },
  methods: {
    async submit() {
      if (!this.name) return;

      if (this.name.length < 2) {
        this.toast("名称至少需要 2 个字符");
        return;
      }

      const loading = await this.loading();
      try {
        let resp = null;
        if (this.classroom) {
          resp = await Api.classroom.update(this.classroom.id, {
            name: this.name,
          });
        } else {
          resp = await Api.classroom.create({
            name: this.name,
          });
        }

        this.toast({
          title: "保存成功",
          color: "success",
          duration: 1000,
        });

        this.$emit("saved", resp.data, !this.classroom);

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
      this.name = "";
      this.number = "";
    },

    dismissModal() {
      window._modal.dismiss();
    }
  },
});
</script>

<style scoped>
.content {
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

ion-content ion-button {
  margin-top: 32px;
  --border-radius: 100px;
}
</style>