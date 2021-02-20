import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

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
import 'vant/lib/index.css';

import '@/styles/index.scss';

import { Stepper } from 'vant';
import {
  IonItem, IonPage, IonContent, IonHeader, IonList,
  IonButton, IonButtons, IonBackButton, IonFab, IonFabButton,
  IonInput, IonCheckbox,
  IonRefresher, IonRefresherContent, IonIcon, IonTitle, IonLabel, IonNote,
  IonToolbar,
  IonAlert, IonPopover
} from '@ionic/vue';

// import '@/styles/index.scss'

import store from '@/store'

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

router.isReady().then(() => {
  app.mount('#app');
});

app.use(Stepper);


app.component('IonPage', IonPage)
  .component('IonContent', IonContent)
  .component('IonHeader', IonHeader)
  .component('IonList', IonList)
  .component('IonItem', IonItem)
  .component('IonInput', IonInput)
  .component('IonCheckbox', IonCheckbox)
  .component('IonButton', IonButton)
  .component('IonButtons', IonButtons)
  .component('IonFab', IonFab)
  .component('IonFabButton', IonFabButton)
  .component('IonBackButton', IonBackButton)
  .component('IonRefresher', IonRefresher)
  .component('IonRefresherContent', IonRefresherContent)
  .component('IonIcon', IonIcon)
  .component('IonToolbar', IonToolbar)
  .component('IonTitle', IonTitle)
  .component('IonNote', IonNote)
  .component('IonLabel', IonLabel)
  .component('IonPopover', IonPopover)
  .component('IonAlert', IonAlert);