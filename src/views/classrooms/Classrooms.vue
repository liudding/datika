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

      <ion-list v-if="classrooms && classrooms.length">
        <ClassroomItem
          v-for="classroom in classrooms"
          :key="classroom.id"
          :classroom="classroom"
          @more="onShowMore"
        />
      </ion-list>

      <Emptyset v-else title="暂无班级"></Emptyset>

      <ion-item
        v-if="!archived"
        routerLink="/classrooms/type/archived"
        lines="none"
        class="archived-entry"
        >
        <ion-label >查看已归档班级</ion-label>
        </ion-item
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
import Alert from "@/mixins/Alert";
import ActionSheet from "@/mixins/ActionSheet";
import Emptyset from '@/components/Emptyset.vue'

export default defineComponent({
  name: "Classrooms",
  components: {
    ClassroomItem,
    Emptyset
  },
  props: {
    archived: Boolean,
  },
  mixins: [Modal, Alert, ActionSheet],
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
        onCreated: this.onClassroomSaved,
      });
    },
    async showEdit(classroom: any) {
      this.createModal = await this.modal(CreateClassroom, {
        onSaved: this.onClassroomSaved,
        classroom: classroom,
      });
    },

    onClassroomSaved(classroom: any, isNew: boolean) {
      const state = this.state as any;

      if (isNew) {
        state.unshift(classroom);
      } else {
        //
      }

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

    async onShowMore(classroom: any) {
      this.showActionSheet({
        buttons: [
          {
            text: "编辑",
            handler: () => {
              this.showEdit(classroom);
            },
          },
          {
            text: "归档",
            handler: () => {
              this.archiveClassroom(classroom);
            },
          },

          {
            text: "删除",
            role: "destructive",
            handler: () => {
              this.deleteClassroom(classroom);
            },
          },
          {
            text: "取消",
            role: "cancel",
          },
        ],
      });
    },

    async doArchive(classroom: any) {
      await Api.classroom.archive(classroom.id);

      classroom.archivedAt = Date.now() / 1000;
    },
    async doUnarchive(classroom: any) {
      await Api.classroom.unarchive(classroom + classroom.id);

      classroom.archivedAt = null;
    },

    async doDelete(classroom: any) {
      await Api.classroom.destroy(classroom.id);
    },

    async archiveClassroom(classroom: any) {
      this.alert({
        header: "确定归档吗",
        message: "归档之后，不会再展示此测验。",
        cancel: true,
        confirmText: "归档",
      }).then(() => {
        this.doArchive(classroom);
      });
    },

    async deleteClassroom(classroom: any) {
      this.alert({
        header: "确定删除吗",
        message: "该测验的所有相关数据将一并删除。",
        cancel: true,
        confirmText: "删除",
      }).then(() => {
        this.doDelete(classroom);
      });
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