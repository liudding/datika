<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>帮助与反馈</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <iframe id="iframe" src="https://support.qq.com/product/311244" width="100%" height="100%"> </iframe>
    </ion-content>
  </ion-page>
</template>

<script>
import Tucao from "@/services/tucao";
import { mapState } from "vuex";

export default {
  components: {},
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  data() {
    return {};
  },
  mounted() {
    const iframe = document.getElementById("iframe");

    if (!iframe || !iframe.contentDocument) return;

    // Tucao.loadInto(iframe.contentDocument, {
    //   openid: this.user.uuid || this.user.id,
    //   nickname: this.user.name,
    //   avatar:
    //     this.user.avatar ||
    //     "https://txc.qq.com/static/desktop/img/products/def-product-logo.png",
    // });
  },
};
</script>

<style scoped>
iframe {
  border: none;
}
</style>