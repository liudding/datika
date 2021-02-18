<template>
  <ion-header>
    <div class="header"></div>
  </ion-header>
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
import { defineComponent } from "vue";
import Api from "@/api";

export default defineComponent({
  name: "CreateModal",
  props: ["classroom"],
  data() {
    return {
      name: this.classroom ? this.classroom.name : "",
    };
  },
  components: {},
  emits: ["saved"],
  methods: {
    async submit() {
      if (!this.name) return;

      try {
        let resp = null;
        if (this.classroom) {
          resp = await Api.classroom.update(this.classroom.id, {
            name: this.name,
          });
        } else {
          resp = await Api.classroom.create({
            name: this.name,
          });
        }

        this.$emit("saved", resp.data, !this.classroom);

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
  --padding-top: 32px;
  --padding-start: 16px;
  --padding-end: 16px;
}

ion-item {
  --background: #eee;
  border-radius: 10px;
}

ion-button {
  margin-top: 32px;
  --border-radius: 100px;
}

@media (prefers-color-scheme: dark) {
  ion-item {
    --background: rgb(83, 83, 83);
    border-radius: 8px;
  }

  .modal-custom-class .header {
    background: rgb(34, 34, 34);
  }

  ion-content {
    --background: rgb(34, 34, 34);
  }
}
</style>