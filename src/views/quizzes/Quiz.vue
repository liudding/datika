<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>{{ quiz.name }}</ion-title>
        <ion-buttons slot="primary">
          <ion-button @click="gotoQuestions" color="primary"
            >设置题目</ion-button
          >
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="brief-infos">
        <div class="infos">
          <div @click="showAttachClassrooms" class="info-item">
            <span class="info-title">班级</span>
            <span class="info-content">{{ quiz.classroomCount }}</span>
            <ion-icon :icon="createOutline" class="info-edit"></ion-icon>
          </div>
          <div class="info-item">
            <span class="info-title">学生</span>
            <span class="info-content">{{ quiz.studentCount }}</span>
          </div>
          <div class="info-item">
            <span class="info-title">已录</span>
            <span class="info-content">{{ quiz.recordCount }}</span>
            <ion-icon
              v-if="
                quiz.recordCount > 0 && quiz.recordCount >= quiz.studentCount
              "
              :icon="checkmarkCircle"
              style="color: green"
            ></ion-icon>
          </div>
        </div>

        <div class="stats">
          <div class="stats-item">
            <small
              >平均分<span>{{ stats.average }}</span></small
            >
          </div>

          <div class="stats-item">
            <small
              >最高分<span>{{ stats.max }}</span></small
            >
          </div>
          <div class="stats-item">
            <small
              >最低分<span>{{ stats.min }}</span></small
            >
          </div>
        </div>
        <div @click="gotoReport" class="report-btn">
          <div>
            <ion-icon :icon="readerOutline"></ion-icon>
            <div>查看报告</div>
          </div>
        </div>
      </div>

      <Records v-if="quiz.studentCount" :quiz="quiz"></Records>
      <Emptyset v-else title="暂无成绩">
        <p>1. 设置测验题目和分值</p>
        <p>2. 关联参与测验的班级</p>
        <p>3. 扫描答题卡录入成绩</p>
      </Emptyset>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed" v-if="showFab">
        <ion-fab-button @click="gotoScan">
          <ion-icon :icon="scanOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { useStore, mapState } from "vuex";
import { createOutline } from "ionicons/icons";
import {
  scanOutline,
  documentTextOutline,
  readerOutline,
  checkmarkCircle,
} from "ionicons/icons";
import { defineComponent } from "vue";
import Records from "./Records.vue";
import Emptyset from "@/components/Emptyset.vue";
import AttachClassrooms from "./AttachClassrooms.vue";
import Modal from "@/mixins/Modal";
import Alert from "@/mixins/Alert";
import Loading from "@/mixins/Loading";

export default defineComponent({
  components: {
    Records,
    Emptyset,
  },
  mixins: [Modal, Loading, Alert],
  computed: {
    ...mapState({
      quiz: (state: any) => state.quiz.quiz || {},
      records: (state: any) => state.quiz.records,
    }),
    stats() {
      if (!this.records || !this.records.length) {
        return {
          max: "",
          min: "",
          average: "",
        };
      }
      let min = Number.MAX_VALUE;
      let max = 0;
      let total = 0;

      for (const record of this.records) {
        min = Math.min(min, record.score);
        max = Math.max(max, record.score);
        total += record.score;
      }

      return {
        average: total / this.records.length,
        max,
        min,
      };
    },
  },
  data() {
    const attachModal: any = null;
    return {
      showFab: true,

      students: [],

      attachModal,
    };
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      router,
      store,
      scanOutline,
      createOutline,
      documentTextOutline,
      readerOutline,
      checkmarkCircle,
    };
  },

  created() {
    this.getDetail();
    this.getRecords();
  },
  methods: {
    showAttachClassrooms() {
      const onAttached = (resolve: any) => {
        return (classrooms: any) => {
          this.attachModal.dismiss();

          this.store.commit("quiz/ATTACH_CLASSROOMS", classrooms);

          this.getRecords(true);

          resolve(classrooms);
        };
      };

      return new Promise((resolve, reject) => {
        this.modal(AttachClassrooms, {
          onAttached: onAttached(resolve),
          selected: this.quiz.classrooms.map((i: any) => i.id),
        })
          .then((modal: any) => {
            this.attachModal = modal;
          })
          .catch((e: any) => {
            reject(e);
          });
      });
    },

    async getDetail() {
      const loading = await this.loading();

      await this.store.dispatch("quiz/quiz", +this.$route.params.id);

      loading.dismiss();
    },

    async getRecords(force = false) {
      const loading = await this.loading();

      await this.store.dispatch("quiz/studentRecords", {
        id: +this.$route.params.id,
        force: force,
      });

      loading.dismiss();
    },

    questionsIsReady() {
      if (this.quiz.questions.length === 0) return false;
      const noAnswer = this.quiz.questions.findIndex((i: any) => !i.answer);

      return noAnswer < 0;
    },

    gotoReport() {
      this.router.push({
        name: "QuizReport",
        params: {
          id: this.quiz.id,
        },
      });
    },
    gotoScan() {
      if (!this.questionsIsReady()) {
        this.alert({
          title: "未设置正确答案",
          message: '存在题目未设置正确答案',
          confirmText: "去设置",
          cancel: true,
        }).then(() => {
          this.gotoQuestions();
        });
        return;
      }

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
  background: var(--ion-background-color);
  padding: 4px 8px;
  display: flex;
  /* background: white; */
}

.infos {
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100px;
}

.info-item {
  /* width: 100px; */
  border-radius: 16px;
  text-align: center;
  padding: 4px 8px;
  background: white;
  font-size: 12px;

  display: flex;
  align-items: center;

  position: relative;

  margin-bottom: 4px;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-title {
  font-size: 10px;
  width: 30px;
  text-align: left;
  color: gray;
}

.info-content {
  margin-left: 4px;
  font-size: 17px;
}

.info-item ion-icon {
  position: absolute;
  right: 8px;
  font-size: 14px;
}

.info-item .info-edit {
  color: var(--ion-color-primary);
}

.stats {
  background: white;
  flex: 1;
  margin-right: 8px;
  border-radius: 8px;
  padding: 8px;

  min-width: 120px;
}

.stats-item {
  padding: 2px;
  color: #2b2b2b;
}

.stats-item span {
  margin-left: 8px;
  font-weight: bold;
}

.report-btn {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
}
.report-btn ion-icon {
  font-size: 40px;
  color: var(--ion-color-primary);
}

.report-btn div {
  font-size: 12px;
  color: gray;
  /* display: none; */
  /* line-height: 14px; */
}
</style>