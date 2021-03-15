<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>选择学生</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal">取消</ion-button>
        <ion-button @click="confirm">确定</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div style="padding: 8px; font-size: 14px; margin-bottom: 16px;">无法识别学生，请选择该答题卡所对应的学生</div>

    <ion-list>
      <ion-radio-group @ionChange="onChange" value="">
        <ion-item v-for="record in records" :key="record.studentId">
          <ion-label>
            <span>{{ record.studentName }}</span>
            <span style="margin-left: 8px; color: gray">{{
              record.studentNumber
            }}</span></ion-label
          >
          <ion-radio slot="end" :value="record.studentId"></ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["records"],
  emits: ["change"],
  data() {
    return {
      picked: null
    };
  },
  created() {
    console.log(this.records)
  },
  methods: {
    onChange($event) {
      this.picked =  $event.detail.value
    },
    confirm() {
      this.$emit('change', this.picked)

      this.dismissModal();
    },
    dismissModal() {
      window._modal.dismiss();
    },
  },
});
</script>
