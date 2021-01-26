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


.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item h2 {
  font-weight: 600;
  margin-bottom: 16px;
}

.progress {
  /* position: absolute;
  right: 0;
  top: 50%; */
}
.list-item .date {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  align-self: start;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-unread {
  background: var(--ion-color-primary);
}

@media (prefers-color-scheme: dark) {
}
</style>