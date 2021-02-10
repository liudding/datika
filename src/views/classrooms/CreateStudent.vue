<template>
  <ion-header>
    <div class="header"></div>
  </ion-header>
  <ion-content class="content">
    <ion-item lines="none">
      <ion-input
        :value="name"
        @ionChange="name = $event.target.value"
        autofocus
        required
        placeholder="姓名"
      ></ion-input>
    </ion-item>

    <ion-item lines="none">
      <ion-input
        :value="number"
        @ionChange="number = $event.target.value"
        autofocus
        required
        placeholder="学号"
      ></ion-input>
    </ion-item>

    <ion-button @click="submit" expand="block">保存</ion-button>

    <div class="message-wrapper">
      <div class="message-box">
        <p>
          如需批量上传学生名单，请在电脑端浏览器打开
          <small>http://dtk.com</small>
        </p>
      </div>
    </div>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";
import Api from "@/api";

export default defineComponent({
  props: {},
  emits: ['created'],
  data() {
    return {
      name: "",
      number: "",
    };
  },
  methods: {
    async submit() {
      const classId = this.$route.params.id;

      if (!this.name || !this.number) {
        return;
      }

      try {
        const resp = await Api.classroom.createStudent(+classId, {
          name: this.name,
          number: this.number,
        });
        this.$emit("created", resp.data);

        this.resetData();
      } catch (e) {
        console.log(e);
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
  background: white;
  height: 100%;
  padding: 32px 16px 0 16px;
}

ion-item {
  --background: #eee;
  border-radius: 8px;
}

ion-content {
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

.message-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.message-box {
  margin-top: 32px;
  width: 70%;
  border-radius: 8px;
  border: 0.5px solid rgb(192, 192, 192);
  padding: 4px 16px;
  font-size: 12px;
  color: gray;
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