import { actionSheetController } from "@ionic/vue";

export default {
    methods: {
        async showActionSheet(options: any) {
            const buttons = options.buttons;

            if (options.cancel) {
                buttons.push({
                    text: options.cancelText || "取消",
                    role: "cancel",
                })
            }

            const actionSheet = await actionSheetController.create({
                header: options.header || options.title,
                cssClass: options.cssClass,
                buttons,
            });
            
            return actionSheet.present();
        }
    }
}