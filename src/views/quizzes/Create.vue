<template>
  <ion-header>
    <div class="header"></div>
  </ion-header>
  <div class="content">
    <ion-item lines="none">
      <ion-input
        :value="name"
        @ionChange="name = $event.target.value"
        autofocus
        required
        placeholder="测验名称"
      ></ion-input>
    </ion-item>

    <ion-button @click="submit" expand="block" style="margin-top: 32px"
      >创建</ion-button
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Api from "@/api";

export default defineComponent({
  name: "CreateModal",
  props: ['modal'],
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async submit() {
      const questions = this.makeQuestions();
      try {
        const resp = await Api.quiz.create({
          name: this.name,
          questions,
        });

        this.$emit("created", resp.data);

        this.resetData();
      } catch (e) {
        console.log(e);
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
  background: white;
  height: 100%;
  padding: 32px 16px 0 16px;
}

ion-item {
  --background: #eee;
  border-radius: 8px;
}
</style>