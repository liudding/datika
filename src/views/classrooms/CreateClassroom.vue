<template>
  <ion-content class="content">
    <ion-item lines="none">
      <ion-input
        :value="name"
        @ionChange="name = $event.target.value"
        autofocus
        required
        placeholder="班级名称"
      ></ion-input>
    </ion-item>

    <ion-button @click="submit" expand="block">保存</ion-button>
  </ion-content>
</template>

<script>
import { IonItem, IonInput } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateModal",
  props: {},
  data() {
    return {
      name: "",
      number: "",
    };
  },
  components: { IonItem, IonInput },
  methods: {
    submit() {
      this.$emit("created", {});
    },
  },
});
</script>

<style scoped>
.content {
  margin-top: 32px;
  height: 70vh;
}
ion-content {
  --padding-top: 44px;
  --padding-start: 16px;
  --padding-end: 16px;
}

ion-item {
  --inner-padding-end: 0;
  border-radius: 100px;
  border-top-left-radius: 100px;
  margin-bottom: 8px;
}

ion-button {
  margin-top: 32px;
}

@media (prefers-color-scheme: dark) {
  ion-content {
    --background: rgb(31, 31, 31);
  }
}
</style>