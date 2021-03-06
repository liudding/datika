import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import '@/styles/index.scss';

import "@/utils/env";
import ionicConfig from '@/utils/ionic-config';

import {
  IonItem, IonPage, IonContent, IonHeader, IonList,
  IonButton, IonButtons, IonBackButton, IonFab, IonFabButton,
  IonInput, IonCheckbox, IonToggle,
  IonRefresher, IonRefresherContent, IonIcon, IonTitle, IonLabel, IonNote,
  IonToolbar, IonSegment, IonSegmentButton,
  IonAlert, IonSpinner, IonPopover
} from '@ionic/vue';


const app = createApp(App)
  .use(IonicVue, ionicConfig())
  .use(router)
  .use(store);

router.isReady().then(() => {
  app.mount('#app');
});


app.component('IonPage', IonPage)
  .component('IonContent', IonContent)
  .component('IonHeader', IonHeader)
  .component('IonList', IonList)
  .component('IonItem', IonItem)
  .component('IonInput', IonInput)
  .component('IonCheckbox', IonCheckbox)
  .component('IonToggle', IonToggle)
  .component('IonButton', IonButton)
  .component('IonButtons', IonButtons)
  .component('IonFab', IonFab)
  .component('IonFabButton', IonFabButton)
  .component('IonBackButton', IonBackButton)
  .component('IonRefresher', IonRefresher)
  .component('IonRefresherContent', IonRefresherContent)
  .component('IonIcon', IonIcon)
  .component('IonToolbar', IonToolbar)
  .component('IonSegment', IonSegment)
  .component('IonSegmentButton', IonSegmentButton)
  .component('IonTitle', IonTitle)
  .component('IonNote', IonNote)
  .component('IonLabel', IonLabel)
  .component('IonPopover', IonPopover)
  .component('IonAlert', IonAlert)
  .component('IonSpinner', IonSpinner);