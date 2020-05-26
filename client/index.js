import Vue from 'vue'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import Main from '@pages/main.vue'
import Validator from 'vee-validate'
import store from '@store'
import Button from '@components/button.vue'
import Loader from '@components/loader.vue'
import TextInput from '@components/textInput.vue'

Vue.use(Router)
Vue.use(Validator)
Vue.component('btn', Button)
Vue.component('loader', Loader)
Vue.component('text-input', TextInput)

const app = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(Main)
})
