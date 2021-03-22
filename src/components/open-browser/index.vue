<template>
  <div class="container">
    <div class="messages bubble">
      <p>1. 点击右上角 <b>···</b> 按钮</p>
      <p>
        2. 在弹出的菜单中，选择
        <b>在{{ isIos ? " Safari " : "浏览器" }}中打开</b>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { isIos } from "@/utils/env";

export default defineComponent({
  data() {
    return {
      isIos: isIos(),
    };
  },
});
</script>


<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.bubble {
  font-size: 15px;
  position: relative;
  clear: both;
  padding: 13px 14px;
  vertical-align: top;
  border-radius: 5px;

  float: right;
  right: 8px;
  top: 20px;
  color: black;
  background-color: white;
  align-self: flex-end;

  &:before {
    position: absolute;
    top: 0px;
    right: 16px;
    display: block;
    width: 16px;
    height: 16px;
    content: "";
    transform: rotate(45deg);

    top: -7px;
    background-color: white;
  }
}
</style>