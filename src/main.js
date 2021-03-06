import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false

Vue.use(Toast)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
