import { actionSheetController } from "@ionic/vue";
import { Plugins, ActionSheetOptionStyle } from "@capacitor/core";
const { Modals } = Plugins;

import { isApp } from "@/utils/env";

export default {
    methods: {
        async showActionSheet(options: any) {
            const buttons = options.buttons || [];

            if (options.cancel) {
                buttons.push({
                    text: options.cancelText || "取消",
                    role: "cancel",
                })
            }

            if (isApp()) {
                const styles: any = {
                    'destructive': ActionSheetOptionStyle.Destructive,
                    'cancel': ActionSheetOptionStyle.Cancel
                };

                const actions = buttons.map((i: any) => {
                    return {
                        title: i.text || i.title,
                        style: styles[i.role] || ActionSheetOptionStyle.Default
                    };
                });

                const result = await Modals.showActions({
                    title: options.header || options.title,
                    message: options.subHeader || options.message,
                    options: actions
                })

                const action = buttons[result.index];
                action && action.handler && action.handler();

                return;
            }


            const actionSheet = await actionSheetController.create({
                header: options.header || options.title,
                subHeader: options.subHeader || options.message,
                cssClass: options.cssClass,
                buttons,
            });

            return actionSheet.present();
        }
    }
}