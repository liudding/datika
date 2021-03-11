<template>
  <ion-list>
    <RecordItem v-for="record in records" :key="record.id" :record="record" :quizId="quiz.id" />
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import RecordItem from "./RecordItem.vue";
import Loading from "@/mixins/Loading";
import {mapState} from "vuex"

export default defineComponent({
  name: "Records",
  props: ["quiz"],
  mixins: [Loading],
  components: {
    RecordItem,
  },
  setup() {
    return { store: useStore(), }
  },
  computed: {
    ...mapState({
      records: (state: any) => state.quiz.records
    })
  },
  data() {
    const studentRecords: any[] = [];
    return {
      students: [],
      studentRecords,
    };
  },
  mounted() {
    // 
  },
  methods: {
  },
});
</script>

<style scoped>
ion-list {
  padding: 8px;
  background: transparent;
}
</style>