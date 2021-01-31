<template>
  <div>
    <ion-grid>
      <ion-row>
        <div
          v-for="plan in plans"
          :key="plan.id"
          @click="pickPlan(plan)"
          lines="none"
          class="plan"
          :class="{
            selected: plan.selected
          }"
        >
          <ion-label>{{ plan.name }}</ion-label>
          <div slot="end">{{ plan.price }}¥</div>
        </div>
      </ion-row>
    </ion-grid>

    <ion-button @click="subscribe" expand="block">购买</ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Api from "@/api";

export default defineComponent({
  name: "Subscription",
  components: {},
  data() {
    const plans: any[] = [];
    return {
      subscription: {},
      plans,
      showPlans: true,
    };
  },
  async mounted() {
    this.getPlans();
  },
  methods: {
    pickPlan(picked: any) {
      for (const plan of this.plans) {
        if (plan.id === picked.id) {
          plan.selected = true;
        } else {
          plan.selected = false;
        }
      }
    },
    async getPlans() {
      const resp = await Api.subscription.plans();

      this.plans = resp.data;
    },

    async subscribe() {
      const plan = this.plans.find(i => i.selected)

      const resp = await Api.subscription.subscribe(plan.id);

      this.$emit('subscribed', resp.data)
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

.plan {
  border-radius: 8px;
  border: 2px solid gray;
}

.selected {
  background: rgb(231, 229, 112);
   border: 2px solid rgb(255, 251, 0);
}
</style>