<template>
  <ion-item
    v-if="record"
    :routerLink="'/records/' + record.id"
    :detail="false"
    lines="none"
  >
    <div class="d-flex align-items-center">
      <h4>{{ record.student.name }}</h4>
      <span style="margin-left: 8px">{{ record.student.number }}</span>
    </div>

    <div slot="end">{{ record.score }}</div>
  </ion-item>
</template>

<script lang="ts">
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "recordListItem",
  components: {},
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