<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>设置</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item-divider></ion-item-divider>
      <ion-item-group>
        <ion-item
          >扫描提示音
          <div slot="end">
            <ion-toggle @ionChange="onBeepChange" :checked="settings.scan_beep">
            </ion-toggle>
          </div>
        </ion-item>
        <ion-item lines="none"
          >扫描播报语音
          <div slot="end">
            <ion-toggle
              @ionChange="onSpeechChange"
              :checked="settings.scan_speech"
            >
            </ion-toggle>
          </div>
        </ion-item>
      </ion-item-group>

      <ion-item-divider></ion-item-divider>
      <!-- <ion-item-group>
        <ion-item @click="showQuestionCount" lines="none"
          >默认题目数量
          <div slot="end">{{ settings.default_question_count || 10 }}</div>
        </ion-item>
        <ion-item-divider></ion-item-divider>
        <ion-item @click="showAutoArchive" lines="none"
          >自动归档测验
          <div slot="end">{{settings.auto_archive_quizzes || 12}} 个月前的</div>
        </ion-item>
      </ion-item-group> -->

      <ion-item-group>
        <ion-item-divider></ion-item-divider>
        <ion-item @click="logout" lines="none">
          <ion-label color="danger" style="text-align: center"
            >退出登录</ion-label
          >
        </ion-item>
      </ion-item-group>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore, mapState } from "vuex";
import QuestionCount from "./QuestionCount.vue";
import AutoArchive from "./AutoArchive.vue";
import Modal from "@/mixins/Modal";
import ActionSheet from "@/mixins/ActionSheet";

export default defineComponent({
  name: "Settings",
  mixins: [Modal, ActionSheet],
  setup() {
    return {
      store: useStore(),
    };
  },
  computed: {
    ...mapState({
      settings: (state: any) => state.user.settings,
    }),
  },
  data() {
    return {};
  },
  created() {
    this.store.dispatch("getSettings");
  },
  methods: {
    async showQuestionCount() {
      await this.modal(QuestionCount, {
        count: this.settings.default_question_count,
        onChange: this.onQuestionCountChange,
      });
    },
    showAutoArchive() {
      this.modal(AutoArchive, {
        months: this.settings.auto_archive_quizzes,
        onChange: this.onAutoArchiveChange,
      });
    },

    onQuestionCountChange(count: number) {
      this.updateSettings("default_question_count", count);
    },
    onAutoArchiveChange(months: number) {
      this.updateSettings("auto_archive_quizzes", months);
    },

    onBeepChange($event: any) {
      this.updateSettings("scan_beep", $event.detail.checked);
    },

    onSpeechChange($event: any) {
      this.updateSettings("scan_speech", $event.detail.checked);
    },

    async updateSettings(key: string, value: any) {
      const settings = Object.assign({}, this.settings);
      settings[key] = value;

      this.store.dispatch("updateSettings", settings);
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
      await this.store.dispatch("logout");

      // this.$router.replace({
      //   name: "Login",
      // });

      location.reload();
    },
  },
});
</script>

<style scoped>
ion-item-divider {
  --background: transparent;
  /* --inner-padding-bottom: 0;
  --inner-padding-top: 0;
  --padding-top: 0;
  --padding-bottom: 0;
  min-height: 8px; */
}
</style>