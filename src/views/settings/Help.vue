<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>使用帮助</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"> 
      <iframe width="100%" height="100%">

      </iframe>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
export default {
  name: "My",
  components: {},
  data() {
    return {
      user: {
        name: "ClassroomItem",
      },
    };
  },
};
</script>

<style scoped>
iframe {
  border: none;
}
</style>