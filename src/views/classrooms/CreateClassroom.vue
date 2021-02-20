<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="content">
    <ion-item lines="none">
      <ion-input
        :value="name"
        @ionChange="name = $event.target.value"
        autofocus
        required
        placeholder="班级名称"
      ></ion-input>
    </ion-item>

    <ion-button @click="submit" expand="block">保存</ion-button>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";
import Api from "@/api";

export default defineComponent({
  name: "CreateModal",
  props: ["classroom"],
  data() {
    return {
      name: this.classroom ? this.classroom.name : "",
    };
  },
  computed: {
    title() {
      return this.classroom ? "编辑班级" : "添加班级";
    },
  },
  components: {},
  emits: ["saved"],
  methods: {
    async submit() {
      if (!this.name) return;

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

        this.$emit("saved", resp.data, !this.classroom);

        this.resetData();
      } catch (e) {
        console.log(e);
      } finally {
        loading.dismiss();
      }
    },
    resetData() {
      this.name = "";
      this.number = "";
    },
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
  border-radius: 10px;
}

ion-button {
  margin-top: 32px;
  --border-radius: 100px;
}
</style>