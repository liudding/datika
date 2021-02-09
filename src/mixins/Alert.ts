import { alertController } from "@ionic/vue";

export default {
    methods: {
        async alert(options: any) {

            return new Promise<void>((resolve, reject) => {
                let buttons = options.buttons;

                if (!options.buttons) {
                    buttons = [];
                    if (options.cancel) {
                        buttons.push({
                            text: options.cancelText || "取消",
                            role: "cancel",
                            cssClass: "secondary",
                            handler: () => {
                                reject();
                            }
                        })
                    }

                    const confirm = options.confirm === null || options.confirm === undefined ? true : options.confirm
                    
                    if (confirm) {
                        buttons.push({
                            text: options.confirmText || "确定",
                            handler: () => {
                                resolve()
                            }
                        })
                    }
                }

                alertController.create({
                    header: options.header || options.title,
                    message: options.message || options.msg,
                    buttons,
                }).then((alert) => {
                    alert.present();
                });
            });
        }
    }
}