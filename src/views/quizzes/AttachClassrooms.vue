<template>
  <ion-header>
    <div class="header"></div>
  </ion-header>
  <div class="content">
    <ion-list>
      <ion-item
        v-for="classroom in classrooms"
        :key="classroom.id"
        lines="none"
      >
        <ion-label
          >{{ classroom.name }}
          <span style="color: gray"
            >（{{ classroom.studentCount }}人）</span
          ></ion-label
        >
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
import { defineComponent } from "vue";

export default defineComponent({
  props: ["selected"],
  emits: ["attached"],
  data() {
    const classrooms: any[] = [];
    return {
      classrooms,
      isSelected: (classroom: any) => {
        return this.selected.indexOf(classroom.id) > -1;
      },
    };
  },
  created() {
    this.getClassrooms();
  },
  methods: {
    async attachClassrooms() {
      const classrooms = this.classrooms.filter((i: any) => i.isChecked);

      const classroomIds = classrooms
        .map((i: any) => i.id);

      if (classroomIds.length == 0) {
        this.$emit("attached", classrooms);
        return;
      }

      await Api.quiz.attachClassrooms(+this.$route.params.id, classroomIds);

      this.$emit("attached", classrooms);
    },
    async getClassrooms() {
      const resp = await Api.classroom.list();
      this.classrooms = resp.data.data;
      this.classrooms = this.classrooms.map((classroom: any) => {
        classroom.isChecked = this.isSelected(classroom);
        return classroom;
      });
    },
  },
});
</script>

<style scoped>
.content {
  background: #eee;
  height: 100%;
  padding: 32px 16px 0 16px;
}

ion-list {
  padding: 0px;
  background: transparent;
}

ion-item {
  --border-radius: 8px;
  margin-bottom: 8px;
}

ion-button {
  margin-top: 32px;
  --border-radius: 100px;
}
</style>