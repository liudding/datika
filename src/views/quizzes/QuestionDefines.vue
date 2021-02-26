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
      <ion-item class="list-header" lines="none">
        <ion-label>题目</ion-label>
        <ion-label>选项</ion-label>
        <ion-label>分值</ion-label>
      </ion-item>

      <ion-item
        v-for="(definition, index) in definitions"
        :key="definition.from"
        lines="none"
      >
        <div class="d-flex w-100">
          <div class="flex-grow d-flex align-items-center">
            <div class="input-wrapper">
              <ion-input
                :value="definition.from"
                type="number"
                @ionChange="definition.from = $event.target.value"
              ></ion-input>
            </div>

            <ion-note>至</ion-note>
            <div class="input-wrapper">
              <ion-input
                :value="definition.to"
                type="number"
                @ionChange="definition.to = $event.target.value"
              ></ion-input>
            </div>
          </div>

          <div class="flex-grow d-flex align-items-center">
            <Stepper
              :value="definition.choices"
              type="number"
              @change="definition.choices = $event"
            ></Stepper>
          </div>

          <div class="flex-grow d-flex align-items-center">
            <stepper
              :value="definition.score"
              type="number"
              @change="definition.score = $event"
            ></stepper>
          </div>
        </div>

        <div slot="end" style="margin-left: 0px; min-width: 16px">
          <ion-buttons>
            <ion-buttons
              v-if="definitions.length > 1"
              @click="remove(index)"
              color="danger"
              ><ion-icon :icon="removeCircle" color="danger"></ion-icon
            ></ion-buttons>
          </ion-buttons>
        </div>
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
import Stepper from "@/components/Stepper.vue";

export default defineComponent({
  components: { Stepper },
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

      // questions 是已经排序好的

      for (let i = 1; i <= questions.length; i++) {
        const pre = questions[i - 1] || null;
        const item = questions[i] || null;

        temp.push(pre);

        if (!item || +item.label - +pre.label > 1 || item.score != +pre.score) {
          result.push(temp);
          temp = [];
        }
      }

      return result;
    },
    toDefinitions(groups: any) {
      const definitions = [];
      for (const group of groups) {
        definitions.push({
          from: group[0].label,
          to: group[group.length - 1].label,
          score: group[0].score,
          choices: group[0].choices.length,
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
        choices: 4,
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
      console.log("def: ", this.definitions);
      const questions = [];

      for (const def of this.definitions) {
        for (let i = +def.from; i <= +def.to; i++) {
          questions.push({
            label: i + "",
            choices: this.getChoices(def),
            score: def.score,
          });
        }
      }

      return questions;
    },

    getChoices(def: any) {
      if (!def.choices) return "ABCD";

      if (+def.choices === 2) return "TF";

      return "ABCDEFGHIJK".substr(0, +def.choices);
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

.list-header {
  margin-bottom: 1px;
  --background: transparent;
}

.input-wrapper {
  padding-left: 8px;
  padding-right: 0;
  background: #eee;
  border-radius: 8px;
  width: 40px;
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
  --padding-start: 8px;
  --padding-end: 8px;
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