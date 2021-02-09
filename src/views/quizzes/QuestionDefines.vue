<template>
  <ion-header>
    <div class="header d-flex justify-content-between">
      <div></div>
      <ion-buttons>
        <ion-button @click="add"
          ><ion-icon :icon="addCircle"></ion-icon
        ></ion-button>
      </ion-buttons>
    </div>
  </ion-header>
  <div class="content">
    <ion-list :disabled="true" @ionItemReorder="doReorder($event)">
      <ion-item
        v-for="(definition, index) in definitions"
        :key="definition.from"
        lines=""
      >
        <ion-note>从</ion-note>
        <div class="input-wrapper">
          <ion-input :value="definition.from" type="number"></ion-input>
        </div>

        <ion-note>到</ion-note>
        <div class="input-wrapper">
          <ion-input :value="definition.to" type="number"></ion-input>
        </div>

        <ion-note>分数</ion-note>
        <div class="input-wrapper">
          <ion-input :value="definition.score" type="number"></ion-input>
        </div>

        <ion-buttons slot="end">
          <ion-button @click="remove(index)" color="danger"
            ><ion-icon :icon="removeCircle" color="danger"></ion-icon
          ></ion-button>
        </ion-buttons>
      </ion-item>
    </ion-list>

    <ion-button @click="submit" expand="block">确定</ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { addCircle, removeCircle } from "ionicons/icons";

export default defineComponent({
  components: {},
  props: ["questions"],
  setup() {
    return { addCircle, removeCircle };
  },
  data() {
    const definitions: any[] = [];
    return {
      definitions,
    };
  },
  created() {
    //
  },
  methods: {
    add() {
      const last = this.definitions[this.definitions.length - 1] ?? {
        from: 0,
        to: 0,
      };

      this.definitions.push({
        from: last.to + 1,
        to: last.to + 10,
        score: 1,
      });
    },
    remove(index: number) {
      console.log(index);
      this.definitions.splice(index, 1);
    },
    async submit() {
      const questions = this.makeQuestions();

      console.log(questions);

      this.$emit("change", questions);
    },

    makeQuestions() {
      const questions = [];
      for (const def of this.definitions) {
        for (let i = def.from; i <= def.to; i++) {
          questions.push({
            label: i + "",
            choices: def.choices,
            score: def.score,
          });
        }
      }

      return questions;
    },
  },
});
</script>

<style scoped>
.content {
  background: white;
  height: 100%;
  overflow: auto;
  padding: 32px 8px 0 8px;
}

.header {
  padding: 8px 8px 0 8px;
}

ion-item {
  margin-bottom: 16px;
}

.input-wrapper {
  padding-left: 8px;
  padding-right: 0;
  background: #eee;
  border-radius: 8px;
  width: 50px;
  margin-left: 4px;

  margin-right: 16px;
}
ion-input {
  --background: #eee;
  border-radius: 8px;
  height: 30px;
}

ion-button {
  --border-radius: 100px;
}
</style>