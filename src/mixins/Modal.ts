import { modalController } from '@ionic/vue'

export default {
    methods: {
        async modal(component: any, props?: any, cssClass?: string, swipeToClose = true) {

            let modal = null;

            props = props || {};
            props.modal = modal;

            cssClass = 'modal-custom-class ' + (cssClass ? cssClass : '');

            modal = await modalController
                .create({
                    component: component,
                    componentProps: props,
                    swipeToClose: swipeToClose,
                    cssClass: cssClass
                })

            modal.present();

            return modal;
        }
    }
}