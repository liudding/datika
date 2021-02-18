<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>设置</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item-group>
        <ion-item @click="showQuestionCount"
          >默认题目数量
          <div slot="end">10</div>
        </ion-item>
        <ion-item-divider></ion-item-divider>
        <ion-item @click="showAutoArchive"
          >自动归档测验
          <div slot="end">半年前的</div>
        </ion-item>
      </ion-item-group>

      <ion-item-group>
        <ion-item-divider></ion-item-divider>
        <ion-item @click="logout" lines="none">
          <ion-label color="danger">退出登录</ion-label>
        </ion-item>
      </ion-item-group>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonItemDivider, IonItemGroup } from "@ionic/vue";
import QuestionCount from "./QuestionCount.vue";
import AutoArchive from "./AutoArchive.vue";
import Modal from "@/mixins/Modal";
import ActionSheet from "@/mixins/ActionSheet";

export default defineComponent({
  name: "Settings",
  components: { IonItemDivider, IonItemGroup },
  mixins: [Modal, ActionSheet],
  setup() {
    return {};
  },
  data() {
    return {
      settings: {
        questionCount: 15,
        autoArchiveDays: 30,
      },
    };
  },
  methods: {
    async showQuestionCount() {
      await this.modal(QuestionCount, {
        count: this.settings.questionCount,
        onChange: this.onQuestionCountChange,
      });
    },
    showAutoArchive() {
      this.modal(AutoArchive, {
        days: this.settings.autoArchiveDays,
        onChange: this.onAutoArchiveChange,
      });
    },
    onQuestionCountChange(count: number) {
      this.settings.questionCount = count;
    },
    onAutoArchiveChange(days: number) {
      this.settings.autoArchiveDays = days;
    },

    logout() {
      this.showActionSheet({
        title: "退出后不会删除任何历史数据",
        cancel: true,
        buttons: [
          {
            text: "退出登录",
            role: "destructive",
            handler: this.doLogout,
          },
        ],
      });
    },

    async doLogout() {
      await this.$store.dispatch("logout");

      this.$router.replace({
        name: "Login"
      })
    }
  },
});
</script>

<style scoped>
ion-item-divider {
  --background: transparent;
  --inner-padding-bottom: 0;
  --inner-padding-top: 0;
  --padding-top: 0;
  --padding-bottom: 0;
  min-height: 8px;
}
</style>