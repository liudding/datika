<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>关联班级</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal">取消</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="content">
    <ion-list v-if="classrooms.length">
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

    <div
      v-if="showLoading"
      class="d-flex flex-column align-items-center"
      style="height: 100px"
    >
      <ion-spinner name="circles"></ion-spinner>
    </div>

    <ion-button
      v-if="classrooms.length"
      @click="attachClassrooms"
      expand="block"
      >确定</ion-button
    >

    <Emptyset v-else title="尚无班级" message="请先去添加班级"></Emptyset>
  </ion-content>
</template>

<script lang="ts">
import Api from "@/api";
import { defineComponent } from "vue";
import Loading from "@/mixins/Loading";
import Emptyset from "@/components/Emptyset.vue";

export default defineComponent({
  props: ["selected"],
  emits: ["attached"],
  mixins: [Loading],
  components: { Emptyset },
  data() {
    const classrooms: any[] = [];
    return {
      classrooms,
      isSelected: (classroom: any) => {
        return this.selected.indexOf(classroom.id) > -1;
      },
      showLoading: true,
    };
  },
  created() {
    this.getClassrooms();
  },
  methods: {
    async attachClassrooms() {
      const classrooms = this.classrooms.filter((i: any) => i.isChecked);

      const classroomIds = classrooms.map((i: any) => i.id);

      if (classroomIds.length === 0) {
        alert("请选择关联的班级");
        return;
      }

      const changed = this.classrooms.find((i: any) => i.isChecked !== i.isOld);

      if (!changed) {
        this.$emit("attached", classrooms);
        return;
      }

      const loading = await this.loading();

      await Api.quiz.attachClassrooms(+this.$route.params.id, classroomIds);

      loading.dismiss();

      this.$emit("attached", classrooms);
    },
    async getClassrooms() {
      this.showLoading = true;

      const resp = await Api.classroom.list();
      this.classrooms = resp.data.data;
      this.classrooms = this.classrooms.map((classroom: any) => {
        classroom.isChecked = this.isSelected(classroom);
        classroom.isOld = this.isSelected(classroom);
        return classroom;
      });

      this.showLoading = false;
    },

    dismissModal() {
      window._modal.dismiss();
    },
  },
});
</script>

<style scoped>
.content {
  height: 100%;
  padding: 32px 16px 0 16px;
  height: 100%;
  padding: 32px 16px 0 16px;
  --padding-top: 32px;
  --padding-start: 16px;
  --padding-end: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

ion-list {
  padding: 0px;
  background: transparent;
}

ion-item {
  --border-radius: 8px;
  margin-bottom: 8px;
}

ion-content ion-button {
  margin-top: 32px;
  --border-radius: 100px;
}
</style>