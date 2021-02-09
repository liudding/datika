<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons v-if="archived">
          <ion-back-button text="班级" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ archived ? "已归档班级" : "班级" }}</ion-title>
        <ion-buttons slot="end" v-if="!archived">
          <ion-button @click="showCreate">
            <ion-icon :icon="addOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-list>
        <ClassroomItem
          v-for="classroom in classrooms"
          :key="classroom.id"
          :classroom="classroom"
        />
      </ion-list>

      <ion-item
        v-if="!archived"
        routerLink="/classrooms/type/archived"
        lines="none"
        class="archived-entry"
        >已归档班级</ion-item
      >
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
import { defineComponent } from "vue";

import ClassroomItem from "./ClassroomItem.vue";
import CreateClassroom from "./CreateClassroom.vue";
import Api from "@/api";
import { useState } from "@/store/classroom";
import Modal from "@/mixins/Modal";

export default defineComponent({
  name: "Classrooms",
  components: {
    ClassroomItem,
  },
  props: {
    archived: Boolean,
  },
  mixins: [Modal],
  setup() {
    const router = useRouter();

    const state = useState() as any;

    return {
      ellipsisHorizontal,
      ellipsisVertical,
      addOutline,
      router,
      state: state,
      classrooms: state.classrooms,
    };
  },
  data: () => {
    const createModal: any = null;
    return {
      createModal,
    };
  },
  created() {
    this.getClassrooms();
  },
  methods: {
    gotoEdit() {
      //
    },
    async showCreate() {
      this.createModal = await this.modal(CreateClassroom, {
        onCreated: this.onClassroomCreated,
      });
    },
    onClassroomCreated(classroom: any) {
      const state = this.state as any;
      state.unshift(classroom);

      this.createModal.dismiss();
    },
    async getClassrooms() {
      try {
        const resp = await Api.classroom.list({
          archived: !!this.archived,
        });

        const state = this.state as any;
        state.set(resp.data.data);
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

<style scoped>
.archived-entry {
  margin: 16px;
  --background: transparent;
  font-size: 12px;
  text-align: center;
}

ion-list {
  padding: 8px;
  background: transparent;
}
</style>