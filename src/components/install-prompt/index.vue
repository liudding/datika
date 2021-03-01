<template>
  <div
    class="install-prompt"
    :class="{
      visible: visible,
      hide: !visible,
      display: display
    }"
  >
    <div class="container">
      <div class="header">安装到主屏幕</div>
      <p>使用 Safari 浏览器</p>

      <div class="body">
        <div class="step step-1">
          <div class="step-label">1</div>

          <div class="step-content">
            <p>点击分享按钮</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 670">
              <path
                d="M255 12c4-4 10-8 16-8s12 3 16 8l94 89c3 4 6 7 8 12 2 6 0 14-5 19-7 8-20 9-28 2l-7-7-57-60 2 54v276c0 12-10 22-22 22-12 1-24-10-23-22V110l1-43-60 65c-5 5-13 8-21 6a19 19 0 0 1-16-17c-1-7 2-13 7-18l95-91z"
              ></path>
              <path
                d="M43 207c16-17 40-23 63-23h83v46h-79c-12 0-25 3-33 13-8 9-10 21-10 33v260c0 13 0 27 6 38 5 12 18 18 30 19l14 1h302c14 0 28 0 40-8 11-7 16-21 16-34V276c0-11-2-24-9-33-8-10-22-13-34-13h-78v-46h75c13 0 25 1 37 4 16 4 31 13 41 27 11 17 14 37 14 57v280c0 20-3 41-15 58a71 71 0 0 1-45 27c-11 2-23 3-34 3H109c-19-1-40-4-56-15-14-9-23-23-27-38-4-12-5-25-5-38V270c1-22 6-47 22-63z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="step step-2">
          <div class="step-label">2</div>
          <div class="step-content">
            <p>选择「添加到主屏幕」</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 578 584">
              <path
                d="M101 35l19-1h333c12 0 23 0 35 3 17 3 34 12 44 27 13 16 16 38 16 58v329c0 19 0 39-8 57a65 65 0 0 1-37 37c-18 7-38 7-57 7H130c-21 1-44 0-63-10-14-7-25-20-30-34-6-15-8-30-8-45V121c1-21 5-44 19-61 13-16 33-23 53-25m7 46c-10 1-19 6-24 14-7 8-9 20-9 31v334c0 12 2 25 10 34 9 10 23 12 35 12h336c14 1 30-3 38-15 6-9 8-20 8-31V125c0-12-2-24-10-33-9-9-22-12-35-12H121l-13 1z"
              ></path>
              <path
                d="M271 161c9-11 31-10 38 4 3 5 3 11 3 17v87h88c7 0 16 1 21 7 6 6 7 14 6 22a21 21 0 0 1-10 14c-5 4-11 5-17 5h-88v82c0 7-1 15-6 20-10 10-29 10-37-2-3-6-4-13-4-19v-81h-87c-8-1-17-3-23-9-5-6-6-15-4-22a21 21 0 0 1 11-14c6-3 13-3 19-3h84v-88c0-7 1-14 6-20z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div @click="onClickBackdrop" class="backdrop"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

const STORAGE_KEY = "PWA_INSTALL_PROMPT";

export default defineComponent({
  props: {
    /**
     * 是否展示
     * true / false / force
     */
    show: {
      default: true,
    },
    /**
     * 自动展示时的延迟时间
     */
    delay: {
      type: Number,
      default: 3,
    },
  },
  watch: {
    show: function (val) {
      val && this.showPrompt(val);
    },
  },
  data() {
    return {
      visible: false,
      display: false,
      steps: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.showPrompt(this.show);
    }, this.delay * 1000);
  },
  methods: {
    showPrompt(show = true) {
      let shouldShow;

      const lastDate = localStorage.getItem(STORAGE_KEY);

      if (Date.now() - lastDate > 24 * 60 * 60 * 1000) {
        shouldShow = true;
      } else {
        shouldShow = false;
      }

      if (show === "force") {
        shouldShow = true;
      }

      if (!shouldShow) return;

      this.display = true;

      setTimeout(() => {
         this.visible = true;
      }, 1)

      localStorage.setItem(STORAGE_KEY, Date.now());
    },
    onClickBackdrop() {
      this.visible = false;
      setTimeout(() => {
        this.display = false;
      }, 400);
    },
  },
});
</script>

<style scoped>
.install-prompt {
  position: fixed;
  z-index: 1001;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* transform: translateY(100); */
}

.backdrop {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
}

.container {
  position: fixed;
  z-index: 1002;
  bottom: 8px;

  min-height: 100px;
  min-width: 80%;

  padding: 8px 24px 36px 24px;

  background-color: rgb(255, 255, 255);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-radius: 24px;

  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.install-prompt {
  display: none;
}

.install-prompt.display {
  display: flex;
}

.install-prompt.visible .container {
  transform: translateY(0);
  transition: transform 0.4s cubic-bezier(0.4, 0.24, 0.3, 1);
}

.install-prompt.hide .container {
  transform: translateY(300%);
  transition: transform 0.4s cubic-bezier(0.4, 0.24, 0.3, 1);
}

.install-prompt.visible .backdrop {
  opacity: 1;
  transition: opacity 0.2s ease-in;
}

.install-prompt.hide .backdrop {
  opacity: 0;
  transition: opacity 0.2s ease-in;
}

.header {
  font-weight: bold;
  padding: 8px;
}

.body {
  margin-top: 16px;
}

.step {
  display: flex;
  margin-bottom: 8px;
  padding: 4px 0;
  align-items: center;
}

svg {
  width: 25px;
  fill: #3084e4;
}

.step-label {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: rgb(252, 101, 101);
  text-align: center;
  line-height: 20px;
  color: white;
  font-size: 12px;
}

.step-content {
  margin-left: 16px;
  font-size: 15px;

  display: flex;
  align-items: center;
}

.step-content p {
  margin-right: 8px;
}

.step-2 svg {
  fill: black;
}

@media (prefers-color-scheme: dark) {
  .container {
    background-color: #333;
  }

  .step-2 svg {
    fill: white;
  }
}
</style>