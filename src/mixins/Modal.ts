import { modalController } from '@ionic/vue'


declare global {
    interface Window { _modal: any }
}


export default {
    methods: {
        async modal(component: any, props?: any, cssClass?: string, backdropDismiss = true) {

            let modal = null;

            props = props || {};
            props.modal = modal;

            cssClass = 'modal-custom-class ' + (cssClass ? cssClass : '');

            modal = await modalController
                .create({
                    component: component,
                    componentProps: props,
                    swipeToClose: true,
                    cssClass: cssClass,
                    backdropDismiss: backdropDismiss,
                })

            modal.onWillDismiss().then(() => {
                document.body.classList.remove('modal')
            })

            modal.present();

            document.body.classList.add('modal')

            window._modal = modal;

            return modal;
        },
    }
}