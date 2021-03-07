<template>
  <div>
    <ion-grid>
      <ion-row>
        <ion-col
          v-for="plan in plans"
          :key="plan.id"
          size="4"
          @click="pickPlan(plan)"
        >
          <div
            class="plan"
            :class="{
              selected: plan.selected,
            }"
          >
            <div class="plan-name">
              <div>{{ plan.name }}</div>
            </div>

            <div class="plan-price"><span>¥</span>16</div>

            <div class="description">折合</div>

            <div></div>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-button @click="subscribe" expand="block">立即开通</ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonCol, IonGrid, IonRow } from "@ionic/vue";
import Api from "@/api";

export default defineComponent({
  components: { IonCol, IonGrid, IonRow },
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

<style lang="scss" scoped>
ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
}

ion-button {
  margin-top: 16px;
}

.plan {
  background-color: rgba(255, 255, 255, 0.4);
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.selected {
    background-image: linear-gradient(
      90deg,
      rgb(250, 232, 204),
      rgb(224, 188, 129)
    );
  }

  .description {
    font-size: 12px;
    color: gray;
  }
}

.plan-name {
  font-size: 20px;
  font-weight: bold;
}

.plan-price {
  font-weight: bold;
  color: rgb(98, 65, 24);
  font-size: 30px;
}

.plan-price span {
  font-size: 17px;
}

.selected ion-plan {
  --background: rgb(245, 200, 1);
  --color: white;
}
</style>