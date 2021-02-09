<template>
  <ion-header>
    <div class="header"></div>
  </ion-header>
  <div class="content">
    <ion-list>
      <ion-item v-for="classroom in classrooms" :key="classroom.id">
        <ion-label>{{ classroom.name }}</ion-label>
        <ion-checkbox
          slot="end"
          @update:modelValue="classroom.isChecked = $event"
          :modelValue="classroom.isChecked"
        >
        </ion-checkbox>
      </ion-item>
    </ion-list>

    <ion-button @click="attachClassrooms" expand="block">保存</ion-button>
  </div>
</template>

<script lang="ts">
import Api from "@/api";
import { defineComponent} from "vue";

export default defineComponent({
  data() {
    const classrooms: any[] = [];
    return {
      classrooms,
    };
  },
  created() {
    this.getClassrooms();
  },
  methods: {
    async attachClassrooms() {
      const classrooms = this.classrooms.filter((i: any) => i.isChecked);
      const classroomIds = classrooms.map((i: any) => i.id);

      await Api.quiz.attachClassrooms(+this.$route.params.id, classroomIds);

      this.$emit("attached", classrooms);
    },
    async getClassrooms() {
      const resp = await Api.classroom.list();
      this.classrooms = resp.data.data;
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

ion-button {
  margin-top: 32px;
  --border-radius: 100px;
}
</style>