<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>{{ quiz.name }}</ion-title>
        <ion-buttons slot="primary">
          <ion-button @click="gotoQuestions" color="primary"> 题目 </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-item lines="none">
        <ion-label @click="showAttachClassrooms"
          >班级：{{ quiz.classroomCount }}</ion-label
        >
        <ion-label>总人数：{{ quiz.studentCount }}</ion-label>
        <ion-label>已录入：{{ quiz.recordCount }}</ion-label>
      </ion-item>
      <ion-item lines="none">
        <ion-label> <ion-note>平均分</ion-note></ion-label>
        <ion-label> <ion-note>最高分</ion-note></ion-label>
        <ion-label> <ion-note>最低分</ion-note></ion-label>
      </ion-item>
      <Records v-if="quiz.studentCount" :quiz="quiz"></Records>
      <Emptyset v-else title="暂无成绩"></Emptyset>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed" v-if="showFab">
        <ion-fab-button @click="gotoScan">
          <ion-icon :icon="scanOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>

    <ion-popover
      :is-open="isOpenRef"
      css-class="my-custom-class"
      :event="refEvent"
      :translucent="true"
      @onDidDismiss="setOpen(false)"
    >
      <ion-list>
        <ion-item button>编辑题目</ion-item>
        <ion-item button>设置测验</ion-item>
      </ion-list>
    </ion-popover>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { add, create } from "ionicons/icons";
import { scanOutline, documentTextOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import Api from "@/api";
import Records from "./Records.vue";
import Emptyset from "@/components/Emptyset.vue";
import AttachClassrooms from "./AttachClassrooms.vue";
import Modal from "@/mixins/Modal";
import Loading from "@/mixins/Loading";

export default defineComponent({
  components: {
    Records,
    Emptyset,
  },
  mixins: [Modal, Loading],
  data() {
    const attachModal: any = null;
    return {
      scanOutline,
      showFab: true,
      quiz: {
        id: 0,
        name: "",
        recordCount: 0,
        classroomCount: 0,
        classrooms: [],
      },

      students: [],
      records: [],

      attachModal,
    };
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    const classroomPickerRef = ref(false);
    const showClassroomPickerPopup = (status = true) => {
      classroomPickerRef.value = status;
    };

    const isOpenRef = ref(false);
    const refEvent = ref();
    const setOpen = (state: boolean, event: Event) => {
      refEvent.value = event;
      isOpenRef.value = state;
    };

    return {
      router,
      store,
      isOpenRef,
      setOpen,
      refEvent,
      classroomPickerRef,
      showClassroomPickerPopup,
      add,
      create,
      documentTextOutline,
    };
  },

  created() {
    this.getDetail();
  },
  methods: {
    showAttachClassrooms() {
      const onAttached = (resolve: any) => {
        return (classrooms: any) => {
          this.attachModal.dismiss();

          this.quiz.classrooms = classrooms;
          this.quiz.classroomCount = classrooms.length;

          resolve(classrooms);
        };
      };

      return new Promise((resolve, reject) => {
        this.modal(AttachClassrooms, {
          onAttached: onAttached(resolve),
          selected: this.quiz.classrooms.map((i: any) => i.id),
        }).then((modal: any) => {
          this.attachModal = modal;
        });
      });
    },

    async getDetail() {
      const loading = await this.loading();

      const resp = await Api.quiz.show(+this.$route.params.id, {
        with: ["classrooms"],
      });
      this.quiz = resp.data;

      loading.dismiss();
    },

    gotoScan() {
      if (this.quiz.classrooms.length > 0) {
        this.router.push({
          name: "Scan",
          params: {
            id: this.quiz.id,
          },
        });
        return;
      }

      // 选择班级
      this.showAttachClassrooms().then((classrooms: any) => {
        if (classrooms.length) {
          this.gotoScan();
        }
      });
    },
    gotoQuestions() {
      this.router.push({
        name: "QuizQuestions",
        params: {
          id: this.quiz.id,
        },
        query: {
          name: this.quiz.name,
          recordCount: this.quiz.recordCount,
        },
      });
    },
  },
  ionViewDidLeave() {
    this.showFab = false;
  },
  ionViewWillEnter() {
    this.showFab = true;
  },
});
</script>

<style scoped>
ion-content {
  --padding-top: 8px;
}
ion-item {
  /* --inner-padding-end: 0; */
  --background: transparent;
}

.brief-infos {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.brief-item {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  text-align: center;
  padding: 4px;
  background: red;
}
</style>