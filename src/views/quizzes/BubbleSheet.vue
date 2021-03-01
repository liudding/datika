<template>
  <div class="backdrop" @click="onClickBackdrop"></div>
  <div class="container">
    <div class="main">
      <div id="preview">
        <img v-if="previewUrl" :src="previewUrl" />
      </div>

      <ion-button @click="download">Save</ion-button>
    </div>
  </div>

  <div class="bubble-sheet-renderer-container">
    <div id="bubble-sheet"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "@/services/sheetGenerator/Form";
import Renderer from "@/services/sheetGenerator/Renderer";
import domtoimage from "dom-to-image";

export default defineComponent({
  props: {
    questions: Array,
  },
  emits: ["downloaded", "backdrop"],
  data() {
    return {
      previewUrl: "",
    };
  },

  setup() {
    return {};
  },
  components: {},
  mounted() {
    this.generate();
  },
  methods: {
    async generate() {
      const questions = this.questions;

      const form = Form.make(questions, 6);
      form.findBestLayout();

      const renderer = new Renderer(form);
      const formNode = renderer.render();

      // console.log(formNode);

      document.getElementById("bubble-sheet")?.append(formNode);

      const node = document.getElementById("bubble-sheet");

      const dataUrl = await domtoimage.toPng(node as Node);

      // formNode.remove();

      this.previewUrl = dataUrl;
    },

    download() {
      const dataUrl = this.previewUrl;
      const a = document.createElement("a");
      a.setAttribute("download", "答题卡");
      a.setAttribute("href", dataUrl);
      a.click();

      this.$emit("downloaded");
    },

    onClickBackdrop() {
      this.$emit("backdrop");
    },
  },
});
</script>

<style scoped>
.container {
  position: fixed;
  z-index: 1001;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  background-color: transparent;

  display: flex;
  flex-direction: column;
  padding: 8px 16px;
}

.main {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 16px;
  border-radius: 16px;
}

.backdrop {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

<style>
.bubble-sheet-renderer-container {
  position: absolute;
  background: white;

  top: -1000000px;
  right: -10000px;

  transform: scale(0.3, 0.3);
}


#bubble-sheet {
  display: block;
  user-select: none;
  font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial,
    "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei",
    sans-serif;
  padding: 16px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
}

#bubble-sheet .header {
  min-height: 150px;
  position: relative;
  width: 100%;
}

#bubble-sheet .box {
  border: 18px solid rgb(0, 0, 0);
  position: relative;
}

#bubble-sheet .number {
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  border-left: 9px solid black;
  border-bottom: 9px solid black;
}

#bubble-sheet .number-group {
  display: grid;
  grid-auto-flow: row;
  /* grid-column-gap: 20px; */
  /* grid-row-gap: 8px; */
  flex-direction: column;
  align-items: center;
  justify-items: center;

  border-right: 2px solid rgb(160, 160, 160);
  background: white;
}

#bubble-sheet .number-grid {
  /* position: absolute; */
  float: right;
  right: 0;
  bottom: 16px;
  display: flex;
  border: 4px solid black;
}

#bubble-sheet .number-grid .item {
  width: 80px;
  height: 80px;
}

#bubble-sheet .number-grid .item:not(:last-child) {
  border-right: 1px solid black;
}

#bubble-sheet .bubbles {
  width: 100%;
  height: 100%;
}

#bubble-sheet .section {
  position: absolute;

  display: grid;
  /* grid-auto-flow: row; */
  grid-column-gap: 0px;
  /* grid-row-gap: 16px; */
  align-items: center;
  justify-content: start;
  align-content: start;
  background: white;
}

#bubble-sheet .group {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-content: start;
}

#bubble-sheet .group .label {
  font-size: 30px;
  text-align: right;
  color: rgb(0, 0, 0);
}

#bubble-sheet .bubble {
  box-sizing: border-box;
  border: 8px solid black;
  border-radius: 100px;
  text-align: center;
  line-height: 63px;
  font-size: 36px;
  font-weight: lighter;
  color: rgb(71, 71, 71);
  text-transform: uppercase;
}
</style>