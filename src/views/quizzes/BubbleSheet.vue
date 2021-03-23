<template>
  <div class="backdrop" @click="onClickBackdrop"></div>
  <div class="container">
    <div class="main">
      <div id="preview">
        <img v-if="previewUrl" :src="previewUrl" crossorigin="anonymous" />
        <ion-spinner v-else name="circles" color="medium"></ion-spinner>
      </div>

      <div class="tips">
        <ion-icon :icon="alertCircle"></ion-icon>请注意
        <p>1. 可根据需要调节答题卡大小，但不能改变其长宽比例</p>
        <p>2. 打印后，确保答题卡边框清晰，无缺损</p>
      </div>

      <ion-button :disabled="!previewUrl" @click="download" class="download-btn"
        >下载</ion-button
      >
    </div>
  </div>

  <div class="bubble-sheet-renderer-container">
    <div id="bubble-sheet"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { alertCircle } from "ionicons/icons";
import Toast from "@/mixins/Toast";
import Alert from "@/mixins/Alert";
import Loading from "@/mixins/Loading";
import Form from "@/services/sheetGenerator/Form";
import Renderer from "@/services/sheetGenerator/Renderer";
import domtoimage from "dom-to-image";
import { isApp, isIos, isBrowser } from "@/utils/env";
import { PhotoLibrary } from "@ionic-native/photo-library";

import Media from "@/utils/Media";

export default defineComponent({
  props: {
    questions: Array,
    quiz: Object
  },
  emits: ["downloaded", "backdrop"],
  mixins: [Toast, Alert, Loading],
  data() {
    return {
      alertCircle,
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

      document.getElementById("bubble-sheet")?.append(formNode);

      const node = document.getElementById("bubble-sheet");

      const dataUrl = await domtoimage.toPng(node as Node);

      formNode.remove();

      this.previewUrl = dataUrl;
    },

    async download() {
      const dataUrl = this.previewUrl;

      if (isApp()) {
        try {
          await PhotoLibrary.requestAuthorization({ write: true });
        } catch (e) {
          // iOS: plugin 会自动跳转到 settings

          this.toast({
            title: "您拒绝了访问相册的权限",
            message: "请允许此权限，否则无法下载答题卡",
          });

          return;
        }

        const loading = await this.loading();

        try {
          // await PhotoLibrary.saveImage(dataUrl, process.env.VUE_APP_NAME);
          await Media.savePhoto({
            src: dataUrl, 
            albumName: process.env.VUE_APP_NAME,
            filename: (this.quiz?.name || '答题卡') + '.png'
          });

          console.log("下载成功");
        } catch (e) {
          console.error("download image error: ", e);
          console.error(e.message);
          // ios: 用户限制了只能访问指定的照片 FetchResult has no PHAssetCollection

          this.alert({
            title: "下载失败",
            message: isIos() ? "请允许访问全部照片" : "",
          });

          return;
        } finally {
          loading.dismiss();
        }
      } else {
        this.downloadOnWeb(dataUrl);
      }

      let message = "已保存至相册";
      if (isBrowser()) {
        message = "已保存至文件";
      }

      this.toast({
        title: message,
        duration: 3000,
      });

      this.$emit("downloaded");
    },

    downloadOnWeb(dataUrl: string) {
      const a = document.createElement("a");
      a.setAttribute("download", "答题卡");
      a.setAttribute("href", dataUrl);
      a.click();
    },

    onClickBackdrop() {
      this.$emit("backdrop");
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  z-index: 1001;
  left: 0px;
  right: 0px;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
}

#preview {
  width: 85vw;
  height: 250px;
  text-align: center;
}

#preview img {
  width: 100%;
  height: inherit;
  object-fit: contain;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

  min-width: 200px;
  min-height: 300px;
}

ion-spinner {
  margin-top: 100px;
}

.tips {
  color: gray;
  font-size: 14px;
  margin: 4px;

  p {
    margin: 0;
    font-size: 12px;
    line-height: 18px;
  }

  ion-icon {
    color: var(--ion-color-warning);
    margin-right: 4px;
  }
}

.download-btn {
  margin-top: 16px;
  min-width: 120px;
  width: 250px;
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

  position: relative;
}

#bubble-sheet .header {
  min-height: 150px;
  position: relative;
  width: 100%;
  max-width: 100%;
}

#bubble-sheet .box {
  border: 18px solid rgb(0, 0, 0);
  position: relative;
  border-radius: 16px;
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

#bubble-sheet .header .number-grid {
  position: absolute;
  right: 0;
  bottom: 16px;
  display: flex;
  border: 4px solid black;
}

#bubble-sheet .header .number-grid .item {
  width: 80px;
  height: 80px;
}

#bubble-sheet .header .number-grid .item:not(:last-child) {
  border-right: 1px solid black;
}

#bubble-sheet .header .name-input {
  position: absolute;
  left: 20px;
  bottom: 16px;
  min-width: 200px;
  font-size: 48px;
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
  color: rgb(34, 34, 34);
  text-transform: uppercase;
}

#bubble-sheet .bubble.placeholder {
  position: relative;
  display: inline-block;
}

#bubble-sheet .bubble.placeholder::before {
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -2px;
  width: 60px;
  height: 4px;
  background-color: gray;
  content: "";
  position: absolute;
  transform: rotate(45deg);
}

#bubble-sheet .bubble.placeholder::after {
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -2px;
  width: 60px;
  height: 4px;
  background-color: gray;
  content: "";
  position: absolute;
  transform: rotate(-45deg);
}
</style>