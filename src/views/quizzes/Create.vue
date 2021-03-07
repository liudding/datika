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
        required
        placeholder="测验名称"
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
import Loading from "@/mixins/Loading";
import Toast from "@/mixins/Toast";

export default defineComponent({
  name: "CreateModal",
  props: ["quiz"],
  emits: ["saved"],
  mixins: [Loading, Toast],
  data() {
    return {
      name: this.quiz ? this.quiz.name : "",
    };
  },
  computed: {
    title() {
      return this.quiz ? "编辑测验" : "添加测验";
    },
  },
  methods: {
    async submit() {
      if (!this.name) return;
      if (this.name.length < 2) {
        this.toast("名称至少需要 2 个字符");
        return;
      }

      if (this.quiz) {
        await this.update();
      } else {
        await this.create();
      }
    },

    async create() {
      const loading = await this.loading();

      try {
        const questions = this.makeQuestions();

        const resp = await Api.quiz.create({
          name: this.name,
          questions,
        });

        this.toast({
          title: "创建成功",
          color: "success",
          duration: 1000,
        });

        this.$emit("saved", resp.data, true);

        this.resetData();
      } catch (e) {
        this.toast({
          title: "创建失败",
          message: e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },

    async update() {
      const loading = await this.loading();
      try {
        const resp = await Api.quiz.update(this.quiz.id, {
          name: this.name,
        });

        this.toast({
          title: "更新成功",
          color: "success",
          duration: 1000,
        });

        this.$emit("saved", resp.data, false);

        this.resetData();
      } catch (e) {
        this.toast({
          title: "更新失败",
          message: e.response.data && e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },

    makeQuestions() {
      // 从个人设置中获取 默认问题数量

      const count = 10;

      const questions = [];
      for (let i = 0; i < count; i++) {
        questions.push({
          label: i + 1 + "",
          choices: "ABCD",
        });
      }

      return questions;
    },

    resetData() {
      this.name = "";
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