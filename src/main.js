// import 'normalize.css'
// import 'bulma'
import 'golden-layout/src/css/goldenlayout-light-theme.css'

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import vgl from 'vue-golden-layout'
Vue.use(vgl);

new Vue({
  render: h => h(App)
}).$mount('#app')









