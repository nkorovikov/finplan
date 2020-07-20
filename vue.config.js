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
  ]
}