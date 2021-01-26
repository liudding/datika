<template>
  <div class="content">
    <ion-item lines="none">
      <ion-input
        :value="name"
        @ionChange="name = $event.target.value"
        autofocus
        required
        placeholder="测验名称"
      ></ion-input>
    </ion-item>

    <ion-button @click="submit" expand="block" style="margin-top: 32px">创建</ion-button
    >
  </div>
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
    };
  },
  components: { IonItem, IonInput },
  methods: {
    submit() {
      this.$emit('created', {});
    },
  },
});
</script>

<style scoped>
.content {
  margin-top: 32px;
  background: white;
  padding: 32px 16px 0 16px;
  height: 70vh;

  /* border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  box-shadow: 0 -8px 5px rgba(0, 0, 0, 0.1); */
}

ion-item {
  --background: #eee;
}
</style>