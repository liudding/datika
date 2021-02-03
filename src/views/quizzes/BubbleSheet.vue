<template>
  <div class="bubble-sheet-renderer-container">
    <div id="bubble-sheet"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import Form from '@/services/sheetGenerator/Form';
import Renderer from '@/services/sheetGenerator/Renderer';
import domtoimage from "dom-to-image";

export default defineComponent({
  props: {
    questions: Array
  },
  data() {
    return {
      image: ''
    };
  },

  setup() {
    return {};
  },
  components: {},
  mounted() {
    //
    // const form = Form.make(this.questions);
    // form.findBestLayout();

    // const renderer = new Renderer(form);
    // console.log(renderer.render());

    const questions = [{label: 1, choices: 'ABCDE'}, {label: 2, choices: 'ABD'}];

       const form = Form.make(questions, 6);
      form.findBestLayout();

      const renderer = new Renderer(form);
      const node = renderer.render();

      console.log(node)

      document.getElementById("bubble-sheet")?.append(node);

      const node2 = document.getElementById("bubble-sheet");

      domtoimage
        .toPng(node2 as Node)
        .then(function (dataUrl: string) {
          const a = document.createElement('a');
          a.setAttribute('download', '答题卡');
          a.setAttribute('href', dataUrl);
          a.click()

          const img = new Image();
          img.src = dataUrl;
          img.width = 400;
          img.height = 500;

          document.body.appendChild(img);
        })
        .catch(function (error: Error) {
          console.error("oops, something went wrong!", error);
        });

  },
  methods: {
  
  },
});
</script>


<style>

.bubble-sheet-renderer-container {
  position: absolute;

  top: -1000000px;
  left: -10000px;
  z-index: -1000;
}

#bubble-sheet {
  /* position: absolute;
  top: -1000000px;
  left: -10000px;
  z-index: -100; */

  display: block;
  user-select: none;
  font-family: "Work Sans", Arial, Helvetica, sans-serif;
  padding: 16px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  /* transform: scale(0.3, 0.3); */
  /* transform-origin: 0 0; */
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
}
</style>