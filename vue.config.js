const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    configureWebpack: config =>{
        if (process.env.NODE_ENV === 'production' && process.env.BUILT_TARGET === 'website'){
            return {
                plugins: [
                    new CompressionWebpackPlugin({
                        test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
                        threshold: 1024
                    })
                ]
            }
        }
    },


    devServer: {
        // https: true
    },

    pwa: {
        name: "优测",
        themeColor: "#ffffff",
        msTileColor: "#000000",
        appleMobileWebAppStatusBarStyle: "default",
        assetsVersion: "2",
        manifestOptions: {
            "start_url": "./?source=pwa",
            "description": "手机阅卷助手",
            "background_color": "#fff",
            "orientation": "portrait",
        },
        iconPaths: {
            faviconSVG: 'img/icons/favicon.svg',
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        }
    }
}