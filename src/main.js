// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import { Menu, MenuItem, Submenu, Carousel, CarouselItem,CollapseTransition, Link, Input, Button } from 'element-ui'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import VueFullPage from 'vue-fullpage.js' // 插件2
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions

Vue.config.productionTip = false

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Link);
Vue.use(Input);
Vue.use(Button);
Vue.use(Router)
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(VueFullPage);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
