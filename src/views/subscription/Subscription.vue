<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>{{ subscription ?  '开通会员': '我的订阅' }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div v-if="showPlans">
        <Plans @subscribed="subscribed"></Plans>
      </div>
      <div v-else>
        <ion-label>{{ subscription && subscription.plan.name }}</ion-label>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Plans from "./Plans.vue";
import Api from "@/api";

export default defineComponent({
  name: "Subscription",
  components: { Plans },
  data() {
    const subscription: any = null;
    return {
      subscription,
      plans: [],
      showPlans: false,
    };
  },
  async created() {
    this.getSubscription();
  },
  methods: {
    async getSubscription() {
      const resp = await Api.subscription.subscriptions();

      this.subscription = resp.data[0];

      if (this.subscription) {
        this.showPlans = false;
      } else {
        this.showPlans = true;
      }
       this.showPlans = true;
    },
    subscribed(subscription: any) {
      this.subscription = subscription;
    },
  },
});
</script>

<style scoped>
ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
}
ion-item {
  --padding-top: 16px;
  --border-radius: 16px;
}
</style>