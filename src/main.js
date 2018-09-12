import Vue from 'vue'
import coinview from '@coinjinja/coinview-sdk'

import App from './App.vue'

Vue.config.productionTip = false
coinview.init('njqNbqXQ').then(() => {
  console.log('Coinview sdk inited.')
  new Vue({
    render: h => h(App)
  }).$mount('#app')
})
