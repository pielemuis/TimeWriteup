import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Times from './pages/Times.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes =[
  {path: '/About', component: About},
  {path: '/Times', component: Times},
  {path: '/', component: Home}
]

const router = new VueRouter({
  routes,
  mode: 'history'
}

)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
