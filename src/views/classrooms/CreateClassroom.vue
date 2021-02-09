<template>
  <ion-header>
    <div class="header"></div>
  </ion-header>
  <div class="content">
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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Api from "@/api";

export default defineComponent({
  name: "CreateModal",
  props: {},
  data() {
    return {
      name: "",
    };
  },
  components: {},
  emits: ['created'],
  methods: {
    async submit() {
      try {
        const resp = await Api.classroom.create({
          name: this.name,
        });
        this.$emit("created", resp.data);

        this.resetData();
      } catch (e) {
        console.log(e);
      }
    },
    resetData() {
      this.name = "";
      this.number = "";
    },
  },
});
</script>

<style scoped>
.content {
  background: white;
  height: 100%;
  padding: 32px 16px 0 16px;
}

ion-item {
  --background: #eee;
  border-radius: 100px;
}

ion-button {
  margin-top: 32px;
  --border-radius: 100px;
}

</style>