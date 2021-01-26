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
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { personCircle, addOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import CreateStudent from "./CreateStudent.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      personCircle,
      addOutline,
      classroom: {
        name: "sd",
      },
      students: [
        {
          name: "zhangsan",
          number: "2323423",
        },
      ],
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
    return { showCreate, showCreatePopup };
  },
  components: {
    IonBackButton,
    IonHeader,
    IonToolbar,
    CreateStudent,
  },
  methods: {
    onStudentCreated() {
      //
    },
  },
});
</script>

<style scoped>
</style>