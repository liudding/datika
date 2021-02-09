<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button
            :text="getBackButtonText()"
            default-href="/"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ classroom.name }}（{{ studentCount }}人）</ion-title>
        <ion-buttons slot="end">
          <ion-button
            v-if="!classroom.archivedAt"
            @click="showCreatePopup(true)"
          >
            <ion-icon :icon="addOutline"></ion-icon>
          </ion-button>
          <ion-button @click="setPopoverOpen(true, $event)">
            <ion-icon slot="end" :icon="settingsOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="classroom">
      <ion-item v-if="classroom.archivedAt" class="archived" lines="none"
        >该班级已经归档</ion-item
      >
      <ion-list>
        <ion-item v-for="student in students" :key="student.id" detail>
          <div>{{ student.name }}</div>
          <div slot="end">{{ student.number }}</div>
        </ion-item>
      </ion-list>

      <van-popup v-model:show="showCreate" position="bottom" round closeable>
        <CreateStudent @created="onStudentCreated"></CreateStudent>
      </van-popup>

      <ion-popover
        :is-open="popoverOpenRef"
        :event="popoverRefEvent"
        :translucent="true"
        @onDidDismiss="setPopoverOpen(false)"
      >
        <ion-list>
          <ion-item @click="editClassroom">编辑班级</ion-item>
          <ion-item v-if="!classroom.archivedAt" @click="archiveClassroom"
            >归档班级</ion-item
          >
          <ion-item v-else @click="unarchiveClassroom">解档班级</ion-item>
          <ion-item @click="deleteClassroom">删除班级</ion-item>
        </ion-list>
      </ion-popover>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { settingsOutline, addOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import CreateStudent from "./CreateStudent.vue";
import Api from "@/api";
import { useState } from "@/store/classroom";
import Alert from "@/mixins/Alert";

export default defineComponent({
  name: "Classroom",
  mixins: [Alert],
  data() {
    const students: any[] = [];
    const classroom: any = null;

    return {
      settingsOutline,
      addOutline,
      classroom,
      students,
      studentCount: 0,
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === "ios" ? "班级" : "";
      },
    };
  },
  setup() {
    const popoverOpenRef = ref(false);
    const popoverRefEvent = ref();
    const setPopoverOpen = (state: boolean, event?: Event) => {
      popoverRefEvent.value = event;
      popoverOpenRef.value = state;
    };

    const showCreate = ref(false);
    const showCreatePopup = (status = true) => {
      showCreate.value = status;
    };

    const router = useRouter();

    const state = useState();

    return {
      popoverOpenRef,
      setPopoverOpen,
      popoverRefEvent,
      showCreate,
      showCreatePopup,
      router,
      state,
    };
  },

  components: {
    CreateStudent,
  },
  created() {
    const classId = this.$route.params.id;
    Api.classroom.students(+classId, { size: 50 }).then((res) => {
      this.students = res.data.data;
      this.studentCount = res.data.total;
    });

    this.classroom = (this.state as any).find(+classId);
  },
  methods: {
    onStudentCreated(student: any) {
      this.students.push(student);
      this.studentCount++;
      console.log(student);

      this.showCreatePopup(false);
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