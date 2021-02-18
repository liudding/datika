<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>关于</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"> </ion-content>
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
.profile ion-item {
  /* height: 80px; */
  --padding-top: 16px;
  --padding-bottom: 16px;
}
.profile .name {
  margin-left: 8px;
  font-weight: 700;
}
</style>