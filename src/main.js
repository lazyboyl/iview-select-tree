import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'



Vue.use(ViewUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
