<template>
  <ion-item
    v-if="record"
    :routerLink="'/records/' + record.id"
    :detail="false"
    lines="none"
  >
    <h4>{{ record.name }}</h4>
    <div slot="end">{{record.score}}</div>
  </ion-item>
</template>

<script lang="ts">
import { IonIcon, IonItem, IonLabel, IonNote } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "recordListItem",
  components: {
    IonItem,
  },
  props: {
    record: Object,
  },
  methods: {},
  data() {
    return { chevronForward };
  },
});
</script>

<style scoped>
ion-item {
  --min-height: 50px;

  border-radius: 8px;
  margin-bottom: 8px;
}
</style>