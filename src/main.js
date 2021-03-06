// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // "store" オプションで指定されたストアは、全ての子コンポーネントに注入されます
  store,
  // elはidを指定する
  el: 'body',
  // router
  router,
  //
  template: '<App/>',
  components: { App }
})
