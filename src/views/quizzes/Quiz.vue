<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ quiz.name }}</ion-title>
        <ion-buttons slot="primary">
          <ion-button @click="gotoQuestions" color="primary">
            <ion-icon slot="end" :icon="documentTextOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-item lines="none">
        <div class="brief-infos">
          <div class="brief-item">班级{{ quiz.classroomCount }}</div>
          <div @click="gotoRecords" class="brief-item">
            学生
            <div>{{ quiz.studentCount }}</div>
          </div>
          <div class="brief-item">
            题目
            <div>{{ quiz.questionCount }}</div>
          </div>
        </div>
      </ion-item>

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

    <van-popup
      v-model:show="classroomPickerRef"
      position="bottom"
      round
      closeable
    >
     
        <ion-label>
          <ion-list>
            <ion-item v-for="classroom in classrooms" :key="classroom.id">
              <ion-label>{{ classroom.name }}</ion-label>
              <ion-checkbox
                slot="end"
                @update:modelValue="classroom.isChecked = $event"
                :modelValue="classroom.isChecked"
              >
              </ion-checkbox>
            </ion-item>
          </ion-list>
          <ion-button @click="attachClassrooms">确定</ion-button>
        </ion-label>
    </van-popup>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { IonFab, IonFabButton } from "@ionic/vue";
import { add, create } from "ionicons/icons";
import { scanOutline, documentTextOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import Api from "@/api";

export default defineComponent({
  name: "Home",
  props: ["id"],
  data() {
    return {
      scanOutline,
      showFab: true,
      quiz: {
        id: 0,
        name: "",
      },
      attachedClassrooms: [],

      classrooms: [],
    };
  },
  setup() {
    const router = useRouter();

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
  components: {
    IonFab,
    IonFabButton,
  },
  created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      const resp = await Api.quiz.show(this.id, { with: ["classrooms"] });
      this.quiz = resp.data;
      this.attachedClassrooms = resp.data.classrooms;
    },
    async getClassrooms() {
      const resp = await Api.classroom.list();
      this.classrooms = resp.data.data;
    },
    async showClassroomPicker() {
      await this.getClassrooms();
      this.showClassroomPickerPopup();
    },
    async attachClassrooms() {
      const classrooms = this.classrooms.filter((i: any )=> i.isChecked);
      const classroomIds = classrooms.map((i: any)=> i.id)

      await Api.quiz.attachClassrooms(this.id, classroomIds)

      this.attachedClassrooms = classrooms;

       this.showClassroomPickerPopup(false);
    },
    gotoScan() {
      if (this.attachedClassrooms.length > 0) {
        this.router.push({
          name: "Scan",
          params: {
            id: this.quiz.id,
          },
        });
        return;
      }

      // 选择班级
      this.showClassroomPicker();
    },
    gotoQuestions() {
      this.router.push({
        name: "QuizQuestions",
        params: {
          id: this.quiz.id,
        },
        query: {
          name: this.quiz.name,
        },
      });
    },

    gotoRecords() {
      this.router.push("/quizzes/" + this.quiz.id + "/records");
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