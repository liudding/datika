<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>设置题目</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="add"
          ><ion-icon :icon="addCircle"></ion-icon
        ></ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="content">
    <ion-list :disabled="true" @ionItemReorder="doReorder($event)">
      <ion-item
        v-for="(definition, index) in definitions"
        :key="definition.from"
        lines="none"
      >
        <ion-note>从</ion-note>
        <div class="input-wrapper">
          <ion-input
            :value="definition.from"
            type="number"
            @ionChange="definition.from = $event.target.value"
          ></ion-input>
        </div>

        <ion-note>到</ion-note>
        <div class="input-wrapper">
          <ion-input
            :value="definition.to"
            type="number"
            @ionChange="definition.to = $event.target.value"
          ></ion-input>
        </div>

        <ion-note>分数</ion-note>
        <div class="input-wrapper">
          <ion-input
            :value="definition.score"
            type="number"
            @ionChange="definition.score = $event.target.value"
          ></ion-input>
        </div>

        <ion-buttons slot="end" v-if="definitions.length > 1">
          <ion-button @click="remove(index)" color="danger"
            ><ion-icon :icon="removeCircle" color="danger"></ion-icon
          ></ion-button>
        </ion-buttons>
      </ion-item>
    </ion-list>

    <div style="padding: 0 16px">
      <ion-button @click="submit" expand="block">确定</ion-button>
    </div>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { addCircle, removeCircle } from "ionicons/icons";

export default defineComponent({
  components: {},
  props: ["questions"],
  emits: ["change"],
  setup() {
    return { addCircle, removeCircle };
  },
  data() {
    const definitions: any[] = [];
    return {
      definitions,
    };
  },
  mounted() {
    const result = this.groupQuestions(this.questions);
    this.definitions = this.toDefinitions(result);
  },
  methods: {
    groupQuestions(questions: any): any {
      const result: any[] = [];
      let temp: any[] = [];

      questions
        .sort(function (a: any, b: any) {
          return +a.label > +b.label ? 1 : -1;
        })
        .concat(null)
        .reduce(function (pre: any, item: any) {
          temp.push(pre);

          if (
            !item ||
            +item.label - +pre.label > 1 ||
            item.score != +pre.score
          ) {
            result.push(temp);
            temp = [];
          }

          return item;
        });

      return result;
    },
    toDefinitions(groups: any) {
      const definitions = [];
      for (const group of groups) {
        definitions.push({
          from: group[0].label,
          to: group[group.length - 1].label,
          score: group[0].score,
        });
      }
      return definitions;
    },
    add() {
      const last = this.definitions[this.definitions.length - 1] ?? {
        from: 0,
        to: 0,
      };

      this.definitions.push({
        from: +last.to + 1,
        to: this.increaseLable(last.to + "", 10),
        score: 1,
      });
    },
    increaseLable(label: string, step = 1) {
      const parts = label.split(".");
      const last = parts[parts.length - 1];
      const newLast = +last + step;
      parts.splice(-1, 1, newLast + "");

      return parts.join(".");
    },
    remove(index: number) {
      this.definitions.splice(index, 1);
    },
    async submit() {
      const questions = this.makeQuestions();

      this.$emit("change", questions);
    },

    makeQuestions() {
      const questions = [];
      for (const def of this.definitions) {
        for (let i = def.from; i <= def.to; i++) {
          questions.push({
            label: i + "",
            choices: def.choices || "ABCD",
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


ion-list {
  background: transparent;
}

ion-item {
  margin-bottom: 16px;
}

ion-note {
  font-size: 12px;
  margin-right: 4px;
}

.input-wrapper {
  padding-left: 8px;
  padding-right: 0;
  background: #eee;
  border-radius: 8px;
  width: 60px;
  margin-left: 4px;

  margin-right: 8px;
}
ion-input {
  border-radius: 8px;
  height: 30px;
}

ion-button {
  --border-radius: 100px;
}

.content {
  height: 100%;
  padding: 32px 16px 0 16px;
  --padding-top: 32px;
  --padding-start: 16px;
  --padding-end: 16px;
}

ion-item {
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {

  .input-wrapper {
    background: #111;
  }
}
</style>