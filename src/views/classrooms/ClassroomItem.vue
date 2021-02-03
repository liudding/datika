<template>
  <ion-item v-if="classroom" @click="gotoDetail" :detail="true" lines="none">
    <ion-label class="ion-text-wrap">
      <h2>
        {{ classroom.name }}
      </h2>
    </ion-label>
    <div slot="end">{{ classroom.studentCount }}</div>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ClassroomItem",
  components: {},
  props: {
    classroom: Object,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    gotoDetail() {
      const classroom = this.classroom as any;

      this.router.push({
        name: "Classroom",
        query: {
          name: classroom.name,
        },
        params: {
          id: classroom.id,
        },
      });
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
ion-item {
  --min-height: 80px;

  border-radius: 8px;
  margin-bottom: 8px;
}


</style>