import { toastController } from "@ionic/vue";

export default {

    methods: {
        async toast(options?: any) {
            if (typeof options === 'string') {
                options = {
                    title: options
                }
            }

            let duration = options.duration || 3000;
            if (duration < 500) {
                duration = duration * 1000;
            }



            const toast = await toastController
                .create({
                    header: options.title || options.header,
                    message: options.message || options.msg,
                    color: options.color,
                    position: options.position || 'top',
                    duration,
                    buttons: options.buttons
                })

            return toast.present();
        },

    }
}