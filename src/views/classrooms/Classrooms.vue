<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons v-if="archived">
          <ion-back-button text="" default-href="/"></ion-back-button>
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
        <ion-label>查看已归档班级</ion-label>
      </ion-item>
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
import Modal from "@/mixins/Modal";
import Alert from "@/mixins/Alert";
import ActionSheet from "@/mixins/ActionSheet";
import Loading from "@/mixins/Loading";
import Toast from "@/mixins/Toast";
import Emptyset from "@/components/Emptyset.vue";
import { useStore, mapState } from "vuex";

export default defineComponent({
  name: "Classrooms",
  components: {
    ClassroomItem,
    Emptyset,
  },
  props: {
    archived: Boolean,
  },
  mixins: [Modal, Alert, ActionSheet, Loading, Toast],
  setup() {
    const router = useRouter();

    const store = useStore();

    return {
      ellipsisHorizontal,
      ellipsisVertical,
      addOutline,
      router,
      store,
    };
  },
  computed: {
    ...mapState({
      list: (state: any) => state.classroom.list,
      archivedClassrooms: (state: any) => state.classroom.archived,
    }),
    classrooms(): any {
      return this.archived ? this.archivedClassrooms : this.list;
    },
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
        onSaved: this.onClassroomSaved,
      });
    },
    async showEdit(classroom: any) {
      this.createModal = await this.modal(CreateClassroom, {
        onSaved: this.onClassroomSaved,
        classroom: classroom,
      });
    },

    onClassroomSaved(classroom: any, isNew: boolean) {
      if (isNew) {
        this.store.dispatch("classroom/unshift", classroom);
      } else {
        this.store.dispatch("classroom/replace", classroom, classroom);
      }

      this.createModal.dismiss();

      if (isNew) {
        this.router.push({
          path: `/classrooms/${classroom.id}`,
        });
      }
    },
    async getClassrooms() {
      const loading = await this.loading({});
      try {
        if (this.archived) {
          await this.store.dispatch("classroom/archived");
        } else {
          await this.store.dispatch("classroom/list");
        }
      } catch (e) {
        console.error(e);
      } finally {
        loading.dismiss();
      }
    },
    async refresh($event: any) {
      this.store.commit("classroom/CLEAR");

      await this.getClassrooms();

      $event.target.complete();
    },

    async onShowMore(classroom: any) {
      this.showActionSheet({
        title: classroom.name,
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
      const loading = await this.loading();

      try {
        await Api.classroom.archive(classroom.id);

        classroom.archivedAt = Date.now() / 1000;

        await this.store.dispatch("classroom/archive", classroom);

        this.toast({
          title: "归档成功",
          color: "success",
          duration: 1000,
        });
      } catch (e) {
        this.toast({
          title: "归档失败",
          message: e.response.data && e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },
    async doUnarchive(classroom: any) {
      const loading = await this.loading();

      try {
        await Api.classroom.unarchive(classroom + classroom.id);

        this.toast({
          title: "解档成功",
          color: "success",
          duration: 1000,
        });
      } catch (e) {
        this.toast({
          title: "解档失败",
          message: e.response.data && e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
    },

    async doDelete(classroom: any) {
      const loading = await this.loading();

      try {
        await Api.classroom.destroy(classroom.id);
        this.store.commit("classroom/REMOVE_CLASSROOM", classroom);

        this.toast({
          title: "删除成功",
          color: "success",
          duration: 1000,
        });
      } catch (e) {
        this.toast({
          title: "删除失败",
          message: e.response.data && e.response.data.friendlyMessage,
          color: "danger",
        });
      } finally {
        loading.dismiss();
      }
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
        message: "该班级的所有学生将一并删除。所参与的测验会被保留",
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