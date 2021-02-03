<template>
  <div>
    <ion-grid>
      <ion-row>
        <ion-col
          v-for="plan in plans"
          :key="plan.id"
          @click="pickPlan(plan)"
          class="plan"
          :class="{
            selected: plan.selected,
          }"
          style="padding: 8px;"
        >
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>{{plan.name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-button @click="subscribe" expand="block">购买</ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol, IonGrid, IonRow
} from "@ionic/vue";
import Api from "@/api";

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow },
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
      const plan = this.plans.find((i) => i.selected);

      const resp = await Api.subscription.subscribe(plan.id);

      this.$emit("subscribed", resp.data);
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
}

.selected ion-card {
  --background: rgb(245, 200, 1);
  --color: white;
}
</style>