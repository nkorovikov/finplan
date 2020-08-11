import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import axios, { AxiosStatic } from 'axios';

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
