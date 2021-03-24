<template>
  <ion-header>
    <div class="header"></div>
  </ion-header>
  <div class="content">
    <ion-list>
      <ion-item>
        <ion-label>提示音</ion-label>
        <ion-toggle @ionChange="onSoundChange" :checked="soundEnabled">
        </ion-toggle>
      </ion-item>

      <ion-item>
        <ion-label
          >相机
          <ion-note>{{ camera }}</ion-note>
        </ion-label>
        <ion-button @click="changeCamera">切换</ion-button>
      </ion-item>
    </ion-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  props: {
    sound: {
      type: Boolean,
      default: null,
    },
    cameraList: Array,
  },
  emits: ["change"],
  computed: {
    ...mapState({
      settings: (state) => state.user.settings,
    }),
  },
  data() {
    return {
      cameras: [],

      soundEnabled: true,
      camera: "",
    };
  },
  components: {},
  async created() {
    const settings = this.getCache();

    this.soundEnabled =
      settings.sound !== undefined ? settings.sound : this.settings.scan_beep;

    if (!this.cameraList || this.cameraList.length === 0) {
      const devices = await navigator.mediaDevices.enumerateDevices();
      this.cameras = devices.filter((i) => i.kind === "videoinput");
    } else {
      this.cameras = this.cameraList;
    }
  },
  methods: {
    onSoundChange($event) {
      this.cache("sound", $event.detail.checked);

      this.$emit("change", {
        sound: $event.detail.checked,
        camera: this.camera,
      });
    },

    changeCamera() {
      if (!this.cameras || this.cameras.length === 0) {
        return;
      }

      let index = this.cameras.indexOf(this.camera);

      if (index < 0) {
        index = this.cameras.length - 1;
      } else {
        index += 1;
      }

      if (index < 0 || index >= this.cameras.length) {
        this.camera = this.cameras[0];
      } else {
        this.camera = this.cameras[index];
      }

      this.cache("camera", this.camera);

      this.$emit("change", {
        camera: this.camera,
        sound: this.sound,
      });
    },

    getCache() {
      return JSON.parse(localStorage.getItem("scan_settings") || "{}");
    },
    cache(key, value) {
      const settings = this.getCache();

      settings[key] = value;

      localStorage.setItem("scan_settings", JSON.stringify(settings));
    },
  },
});
</script>

<style scoped>
.scan-settings-modal .content {
  background-color: rgb(230, 230, 230);
}
</style>


<style>
.scan-settings-modal .modal-wrapper {
  position: absolute;
  bottom: 0;
  height: 20%;
  min-height: 150px;
  /* background: transparent; */
}

.scan-settings-modal .modal-shadow {
  position: absolute;
  bottom: 0;
  height: 20%;
  min-height: 150px;
}
</style>