import { alertController } from "@ionic/vue";
import { Plugins } from "@capacitor/core";
const { Modals } = Plugins;

import { isApp } from "@/utils/env";

export default {
    methods: {
        async alert(options: any) {

            return new Promise<void>((resolve, reject) => {

                const buttons = options.buttons || [];

                if (options.cancel || options.cancelText) {
                    options.cancel = true;

                    buttons.push({
                        text: options.cancelText || "取消",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            reject();
                        }
                    })
                }

                if (options.confirm || options.confirmText || buttons.length === 0) {
                    options.confirm = true;

                    buttons.push({
                        text: options.confirmText || "确定",
                        handler: () => {
                            resolve()
                        }
                    })
                }


                if (isApp()) {
                    if (buttons.length === 1) {
                        Modals.alert({
                            title: options.header || options.title,
                            message: options.message || options.msg,
                            buttonTitle: options.confirmText || options.cancelText || "确定"
                        }).then(() => {
                            resolve();
                        });
                    } else if (buttons.length === 2 && options.confirm && options.cancel) {
                        Modals.confirm({
                            title: options.header || options.title,
                            message: options.message || options.msg,
                        }).then((result: any) => {
                            result ? resolve() : reject();
                        });
                    }
                } else {
                    alertController.create({
                        header: options.header || options.title,
                        message: options.message || options.msg,
                        buttons,
                    }).then((alert) => {
                        alert.present();
                    });
                }
            });
        }
    }
}