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
        placeholder="姓名"
      ></ion-input>
    </ion-item>

    <ion-item lines="none">
      <ion-input
        :value="number"
        @ionChange="number = $event.target.value"
        required
        type="number"
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
          <b @click="onClickUrl" class="website-url">{{ webUrl }}</b>
        </p>
      </div>
    </div>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";
import Api from "@/api";
import Alert from "@/mixins/Alert";
import Loading from "@/mixins/Loading";
import Toast from "@/mixins/Toast";
import { Plugins } from "@capacitor/core";

const { Clipboard } = Plugins;

export default defineComponent({
  props: ["student"],
  emits: ["created", "deleted"],
  mixins: [Alert, Loading, Toast],
  computed: {
    title() {
      return this.student ? "编辑学生" : "添加学生";
    },
  },
  data() {
    return {
      name: this.student ? this.student.name : "",
      number: this.student ? this.student.number : "",
      webUrl: process.env.VUE_APP_WEBSITE_ADDRESS,
    };
  },
  methods: {
    async submit() {
      const classId = this.$route.params.id;

      if (!this.name || !this.number) {
        return;
      }

      if (this.name.length < 2) {
        this.toast("名称至少需要 2 个字符");
        return;
      }

      if (this.number.length < 2) {
        this.toast("学号至少需要 2 位数字");
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

        this.toast({
          title: "保存成功",
          color: "success",
          duration: 1000,
        });

        this.$emit("created", resp.data, !this.student);

        this.resetData();
      } catch (e) {
        console.log(e);
        this.toast({
          title: e.response.data && e.response.data.friendlyMessage || "保存失败",
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },

    onClickUrl() {
      Clipboard.write({
        string: this.webUrl,
      });

      this.toast({
        title: "已复制",
        duration: 2000,
      });
    },

    onClickDelete() {
      this.alert({
        title: "确定删除该学生吗",
        message: "不会删除该学生的测验记录",
        confirmText: "删除",
        cancel: true,
      }).then(() => {
        this.delete(this.student);
      });
    },

    async delete(student) {
      const loading = await this.loading();

      try {
        await Api.student.destroy(student.id);

        this.toast({
          title: "删除成功",
          color: "success",
          duration: 1000,
        });
      } catch (e) {
        this.toast({
          title: e.response.data && e.response.data.friendlyMessage || "删除失败",
          color: "danger",
        });
      }

      this.$emit("deleted", student);

      loading.dismiss();
    },

    resetData() {
      this.name = "";
      this.number = "";
    },

    dismissModal() {
      window._modal.dismiss();
    },
  },
});
</script>

<style scoped>
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

ion-content ion-button {
  margin-top: 32px;
  --border-radius: 100px;
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