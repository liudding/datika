<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Classrooms</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="showCreatePopup(true)">
            <ion-icon :icon="addOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inbox</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ClassroomItem
          v-for="classroom in classrooms"
          :key="classroom.id"
          :classroom="classroom"
        />
      </ion-list>

      <van-popup v-model:show="showCreate" position="bottom" round closeable>
        <CreateClassroom @created="onClassroomCreated"></CreateClassroom>
      </van-popup>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import {
  ellipsisHorizontal,
  ellipsisVertical,
  addOutline,
} from "ionicons/icons";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";

import ClassroomItem from "./ClassroomItem.vue";
import CreateClassroom from "./CreateClassroom.vue";

export default defineComponent({
  name: "Classrooms",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    ClassroomItem,
    CreateClassroom,
  },
  setup() {
    const router = useRouter();

    const showCreate = ref(false);
    const showCreatePopup = (show = true) => {
      showCreate.value = show;
    };

    return {
      ellipsisHorizontal,
      ellipsisVertical,
      addOutline,
      router,
      showCreate,
      showCreatePopup,
    };
  },
  data: () => {
    return {
      classrooms: [
        {
          id: 1,
          name: "class 1",
          studentCount: 40,
        },
        {
          name: "class 2",
          studentCount: 40,
        },
      ],
    };
  },
  methods: {
    gotoEdit() {
      console.log("+++");
      // this.router.push('/classrooms/edit')
    },
    onClassroomCreated() {
      //
    },
    refresh() {
      return true;
    },
  },
});
</script>