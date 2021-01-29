<template>
  <div class="container">
    <ion-list>
      <ion-item v-for="record in records" :key="record.id">
        <div>sdsd</div>
      </ion-item>
    </ion-list>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Records',
  props: {
  },
  data() {
    return {
        records: [
        {
          id: 1,
          name: "Student 1",
          studentId: 1,
          score: 56,
          date: "2020-09-09",
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Quiz 2",
          score: 50,
        },
        {
          name: "Quiz 2",
          score: 50,
        },
          {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
          {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
          {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
          {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
        {
          name: "Student 2",
          score: 50,
        },
      ],
    }
  },
  components: { }
});
</script>

<style scoped>
.container {
  margin-top: 16px;
  padding: 16px 8px;
}
</style>