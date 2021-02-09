
module.exports = {
    devServer: {
        // https: true
    },

    pwa: {
        name: "Quiz",
        themeColor: "#ffffff",
        msTileColor: "#000000",
        appleMobileWebAppStatusBarStyle: "default",
        assetsVersion: "1",
        manifestOptions: {
            "start_url": "./?source=pwa",
            "description": "答题卡扫描",
            "background_color": "red",
            "orientation": "portrait-primary",
        },
        iconPaths: {
            faviconSVG: 'img/icons/favicon.svg',
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        }
    }
}