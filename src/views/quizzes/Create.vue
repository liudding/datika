<template>
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
import { IonItem, IonInput } from "@ionic/vue";
import { defineComponent } from "vue";
import Api from "@/api";

export default defineComponent({
  name: "CreateModal",
  props: {},
  data() {
    return {
      name: "",
    };
  },
  components: { IonItem, IonInput },
  methods: {
    async submit() {
      const questions = this.makeQuestions();
      try {
        const resp = await Api.quiz.create({
          name: this.name,
          questions
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
  margin-top: 32px;
  background: white;
  padding: 32px 16px 0 16px;
  height: 70vh;

  /* border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  box-shadow: 0 -8px 5px rgba(0, 0, 0, 0.1); */
}

ion-item {
  --background: #eee;
}
</style>