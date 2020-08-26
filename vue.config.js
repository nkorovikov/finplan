module.exports = {
  "publicPath": "/finplan/",
  "pwa": {
    "appleMobileWebAppCapable": "yes",
    "appleMobileWebAppStatusBarStyle": "black",
    "workboxPluginMode": "InjectManifest",
    "workboxOptions": {
      "swSrc": "src/service-worker.js"
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  configureWebpack: {
    externals: {
      moment: 'moment'
    },
  }
}