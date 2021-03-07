<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab2" href="/quizzes">
          <ion-icon :icon="documentText" />
          <ion-label>测验</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/classrooms">
          <ion-icon :icon="grid" />
          <ion-label>班级</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/my">
          <ion-icon :icon="person" />
          <ion-label>我的</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

    <InstallPrompt v-if="showInstallPrompt"></InstallPrompt>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs } from "@ionic/vue";
import { person, documentText, grid } from "ionicons/icons";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import InstallPrompt from "@/components/install-prompt/index.vue";
import { isIos, isBrowser, isSafari } from "@/utils/env";

export default defineComponent({
  components: { IonTabs, IonTabBar, IonTabButton, InstallPrompt },
  setup() {
    return {
      person,
      grid,
      documentText,
      store: useStore(),
    };
  },
  data() {
    return {
      showInstallPrompt: false,
    };
  },
  created() {
    this.store.dispatch("classroom/list");

    this.showInstallPrompt = isIos() && isBrowser() && isSafari();
  },
});
</script>