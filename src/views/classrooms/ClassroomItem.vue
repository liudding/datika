<template>
  <ion-item v-if="classroom" @click="gotoDetail" lines="none">
    <ion-label class="ion-text-wrap">
      <h2>
        {{ classroom.name }}
      </h2>
    </ion-label>
    <!-- <div slot="end">{{ classroom.studentCount }}</div> -->
    <div class="d-flex justify-content-between" style="margin-top: 8px">
      <div>
        <span class="" style="margin-left: 16px">
          <ion-note>{{ classroom.studentCount }}</ion-note>
        </span>
      </div>

      <div>
        <div @click.stop="showMore" style="padding: 1px 4px 0 10px">
          <ion-icon :icon="ellipsisHorizontal"></ion-icon>
        </div>
      </div>
    </div>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { ellipsisHorizontal } from "ionicons/icons";

export default defineComponent({
  name: "ClassroomItem",
  components: {},
  props: {
    classroom: Object,
  },
  setup() {
    const router = useRouter();
    return { router, ellipsisHorizontal };
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

    showMore() {
      this.$emit("more", this.classroom);
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