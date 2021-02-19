<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title
          >{{ classroom.name }}（{{ classroom.studentCount }}人）</ion-title
        >
        <ion-buttons slot="end">
          <ion-button v-if="!classroom.archivedAt" @click="showCreate">
            <ion-icon :icon="addOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="classroom">
      <ion-item v-if="classroom.archivedAt" class="archived" lines="none"
        >该班级已经归档</ion-item
      >
      <ion-list v-if="students.length">
        <ion-item
          v-for="student in students"
          :key="student.id"
          detail
          @click="onClickStudent(student)"
        >
          <div>{{ student.name }}</div>
          <div slot="end">{{ student.number }}</div>
        </ion-item>
      </ion-list>
      <Emptyset v-else title="尚无学生"></Emptyset>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { settingsOutline, addOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import CreateStudent from "./CreateStudent.vue";
import Api from "@/api";
import Alert from "@/mixins/Alert";
import Modal from "@/mixins/Modal";
import Emptyset from "@/components/Emptyset.vue";

export default defineComponent({
  name: "Classroom",
  mixins: [Alert, Modal],
  data() {
    const students: any[] = [];
    const classroom: any = null;

    const createModal: any = null;

    return {
      settingsOutline,
      addOutline,
      classroom,
      students,
      createModal,
      title: "",
    };
  },
  setup() {
    const popoverOpenRef = ref(false);
    const popoverRefEvent = ref();
    const setPopoverOpen = (state: boolean, event?: Event) => {
      popoverRefEvent.value = event;
      popoverOpenRef.value = state;
    };

    const router = useRouter();

    return {
      popoverOpenRef,
      setPopoverOpen,
      popoverRefEvent,
      router,
    };
  },

  components: { Emptyset },
  async beforeCreate() {
    const classId = this.$route.params.id;
    Api.classroom.students(+classId, { size: 50 }).then((res) => {
      this.students = res.data.data;
    });
    
  },
  async created() {
    this.classroom = {
      name: this.$route.query.name,
      archivedAt: null,
    };

    this.classroom = await this.$store.dispatch("classroom/find", +this.$route.params.id);
  },
  methods: {
    async showCreate() {
      this.createModal = await this.modal(CreateStudent, {
        onCreated: this.onStudentSaved,
      });
    },
    async onClickStudent(student: any) {
      this.createModal = await this.modal(CreateStudent, {
        onCreated: this.onStudentSaved,
        onDeleted: this.onStudentDeleted,
        student: student,
      });
    },
    onStudentSaved(student: any, isNew: boolean) {
      if (isNew) {
        this.students.push(student);
      } else {
        const index = this.students.findIndex((i: any) => i.id === student.id);

        this.students.splice(index, 1, student);
      }

      this.createModal.dismiss();
    },
    onStudentDeleted(student: any) {
      const index = this.students.findIndex((i: any) => i.id === student.id);

      this.students.splice(index, 1);

      this.createModal.dismiss();
    },

    async doArchive() {
      const classId = this.$route.params.id;
      await Api.classroom.archive(+classId);

      this.classroom.archivedAt = Date.now() / 1000;
    },

    async doDelete() {
      const classId = this.$route.params.id;
      await Api.classroom.destroy(+classId);

      this.router.back();
    },

    editClassroom() {
      this.setPopoverOpen(false);
    },
    async unarchiveClassroom() {
      const classId = this.$route.params.id;
      await Api.classroom.unarchive(+classId);

      this.classroom.archivedAt = null;
    },
    async archiveClassroom() {
      this.setPopoverOpen(false);

      this.alert({
        header: "确定归档吗",
        message: "归档之后，不会再展示此班级。",
        cancel: true,
        confirmText: "归档",
      }).then(() => {
        this.doArchive();
      });
    },

    async deleteClassroom() {
      this.setPopoverOpen(false);

      this.alert({
        header: "确定删除吗",
        message: "删除之后，该班级的所有相关数据将一并删除。",
        cancel: true,
        confirmText: "删除",
      }).then(() => {
        this.doDelete();
      });
    },
  },
});
</script>

<style scoped>
.archived {
  margin: 16px;

  border-radius: 8px;
}
</style>