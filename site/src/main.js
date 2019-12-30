import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import MaxItems from "@koas/v-max-items";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
