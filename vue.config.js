module.exports = {
  "publicPath": "/finplan/",
  "pwa": {
    "appleMobileWebAppCapable": "yes",
    "appleMobileWebAppStatusBarStyle": "black",
    "workboxPluginMode": "InjectManifest",
    "workboxOptions": {
      "swSrc": "service-worker.js"
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}