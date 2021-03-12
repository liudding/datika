import { toastController } from "@ionic/vue";
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;
import { isApp } from "@/utils/env";

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


            if (isApp()) {
                await Toast.show({
                    text: options.title || options.header,
                    duration: duration > 3000 ? 'long' : 'short',
                    position: options.position || 'bottom'
                });

                return
            }

            const toast = await toastController
                .create({
                    header: options.title || options.header,
                    message: options.message || options.msg,
                    color: options.color,
                    position: options.position || 'bottom',
                    duration,
                    buttons: options.buttons
                })

            return toast.present();
        },

    }
}