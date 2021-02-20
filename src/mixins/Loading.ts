import { loadingController } from "@ionic/vue";

export default {

    methods: {
        async loading(options?: any) {
            const loading = await loadingController
                .create({
                    cssClass: 'my-custom-class',
                    message: options?.message,
                });

            loading.present();

            return loading;
        },
        async stopLoading() {
            //
        }
    }
}