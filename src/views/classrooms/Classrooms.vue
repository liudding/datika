<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>班级</ion-title>
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
          <ion-title size="large">班级</ion-title>
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
  ellipsisHorizontal,
  ellipsisVertical,
  addOutline,
} from "ionicons/icons";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";

import ClassroomItem from "./ClassroomItem.vue";
import CreateClassroom from "./CreateClassroom.vue";
import Api from "@/api";

export default defineComponent({
  name: "Classrooms",
  components: {
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
    const classrooms: any[] = [];
    return {
      classrooms,
    };
  },
  created() {
    this.getClassrooms();  
  },
  methods: {
    gotoEdit() {
      //
    },
    onClassroomCreated(classroom: any) {
      this.classrooms.push(classroom);
      this.showCreatePopup(false);
    },
    async getClassrooms() {
      try {
        const resp = await Api.classroom.list();
        this.classrooms = resp.data.data;
      } catch (e) {
        console.error(e);
      }
    },
    async refresh($event: any) {
      await this.getClassrooms();
      
      $event.target.complete();
    },
  },
});
</script>