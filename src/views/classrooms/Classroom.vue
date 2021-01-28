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
        <ion-title>{{ classroom.name }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="showCreatePopup(true)">
            <ion-icon :icon="addOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="classroom">
      <div class="d-flex">共 {{studentCount}} 学生</div>
      
      <ion-list>
        <ion-item v-for="student in students" :key="student.id" detail>
          <div>{{ student.name }}</div>
          <div slot="end">{{ student.number }}</div>
        </ion-item>
      </ion-list>

      <van-popup v-model:show="showCreate" position="bottom" round closeable>
        <CreateStudent @created="onStudentCreated"></CreateStudent>
      </van-popup>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonBackButton, IonHeader, IonToolbar } from "@ionic/vue";
import { personCircle, addOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import CreateStudent from "./CreateStudent.vue";
import Api from "@/api";

export default defineComponent({
  name: "Classroom",
  data() {
    const students: any[] = [];
    return {
      personCircle,
      addOutline,
      classroom: {},
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
    const showCreate = ref(false);
    const showCreatePopup = (status = true) => {
      showCreate.value = status;
    };

    const router = useRouter();

    return { showCreate, showCreatePopup, router };
  },
  components: {
    IonBackButton,
    IonHeader,
    IonToolbar,
    CreateStudent,
  },
  created() {
    const classId = this.$route.params.id;
    Api.classroom.students(+classId, {size: 50}).then((res) => {
      this.students = res.data.data;
      this.studentCount = res.data.total
    });
  },
  methods: {
    onStudentCreated(student: any) {
      this.students.push(student)
      this.studentCount ++
      console.log(student)

      this.showCreatePopup(false)
    },
  },
});
</script>

<style scoped>
</style>