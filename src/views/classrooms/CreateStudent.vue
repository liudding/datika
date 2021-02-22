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
        placeholder="姓名"
      ></ion-input>
    </ion-item>

    <ion-item lines="none">
      <ion-input
        :value="number"
        @ionChange="number = $event.target.value"
        required
        placeholder="学号，至少两位数字"
      ></ion-input>
    </ion-item>

    <ion-button @click="submit" expand="block">保存</ion-button>

    <div
      style="width: 100%; margin-top: 32px"
      class="d-flex align-items-center justify-content-around"
      v-if="student"
    >
      <ion-label
        @click="onClickDelete"
        color="danger"
        style="text-align: center"
        >删除</ion-label
      >
    </div>

    <div class="message-wrapper">
      <div class="message-box">
        <p>
          如需批量上传学生名单，请在电脑端浏览器打开
          <b class="website-url">{{webUrl}}</b>
        </p>
      </div>
    </div>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";
import Api from "@/api";
import Alert from "@/mixins/Alert";

export default defineComponent({
  props: ["student"],
  emits: ["created", "deleted"],
  mixins: [Alert],
  computed: {
    title() {
      return this.student ? "编辑学生" : "添加学生";
    },
  },
  data() {
    return {
      name: this.student ? this.student.name : "",
      number: this.student ? this.student.number : "",
      webUrl: process.env.VUE_APP_WEBSITE_ADDRESS
    };
  },
  methods: {
    async submit() {
      const classId = this.$route.params.id;

      if (!this.name || !this.number) {
        return;
      }

      if (this.number.length < 2) {
        return;
      }

      const loading = await this.loading();

      try {
        let resp = null;
        if (this.student) {
          resp = await Api.student.update(this.student.id, {
            name: this.name,
            number: this.number,
          });
        } else {
          resp = await Api.classroom.createStudent(+classId, {
            name: this.name,
            number: this.number,
          });
        }

        this.$emit("created", resp.data, !this.student);

        this.resetData();
      } catch (e) {
        console.log(e);
      } finally {
        loading.dismiss();
      }
    },

    onClickDelete() {
      this.alert({
        title: "确定删除该学生吗",
        confirmText: "删除",
        cancel: true,
      }).then(() => {
        this.delete(this.student);
      });
    },

    async delete(student) {
      const loading = await this.loading();

      await Api.student.destroy(student.id);

      this.$emit("deleted", student);

      loading.dismiss();
    },

    resetData() {
      this.name = "";
      this.number = "";
    },
  },
});
</script>

<style scoped>
ion-item {
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
  margin-top: 64px;
  width: 80%;
  border-radius: 8px;
  border: 0.5px solid rgb(192, 192, 192);
  padding: 4px 16px;
  font-size: 12px;
  color: gray;
}

.website-url {
  color: var(--ion-color-primary);
}
</style>