// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import $ from 'jquery'
import store from './store/index'
import axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import  'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(Mint);
Vue.use(VueAwesomeSwiper)

//引入公共过滤器js
import filters from './api/filters.js'
//过滤器统一处理加载
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

//下拉加载数据  注册全局
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll);

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  next()//执行进入路由，如果不写就不会进入目标页
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
