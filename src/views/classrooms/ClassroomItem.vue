<template>
  <ion-item v-if="classroom" :routerLink="'/classrooms/' + classroom.id" :detail="true">

    <ion-label class="ion-text-wrap">
      <h2>
        {{ classroom.name }}
      </h2>
    
    </ion-label>
      <div slot="end">{{ classroom.studentCount }}</div>
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClassroomItem',
  components: {
    IonItem,
    IonLabel
  },
  props: {
    classroom: Object,
  },
  methods: {
  },
  data() {
    return { }
  }
});
</script>

<style scoped>

</style>