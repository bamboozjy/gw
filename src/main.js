import Vue from "vue";
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
import { MessageBox, Carousel, CarouselItem, Pagination } from "element-ui";
// Vue.use(MessageBox)//会自动执行一次空内容弹出
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Pagination);
Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$message = Message;

import VueRouter from "vue-router";
Vue.use(VueRouter);

import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css";
import "./style/all.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'

import App from "./App.vue";
import Index from "./components/index.vue";
import Home from "./components/home.vue";
import Intro from "./components/intro.vue";
import Join from "./components/join.vue";
import Backstage from "./components/backstage.vue";
import About from "./components/about.vue";
import News from "./components/news.vue";
import Taobao from "./components/taobao.vue";

var routes = [
  { path: "/", redirect: "/index" }, //重定向到index下
  {
    path: "/index",
    // name: "index",
    component: Index,
    children: [
      { path: "/", redirect: "/index/home" },
      { path: "home", name: "home", component: Home },
      { path: "intro", name: "intro", component: Intro },
      { path: "join", name: "join", component: Join },
      { path: "backstage", name: "backstage", component: Backstage },
      { path: "about", name: "about", component: About },
      { path: "news", name: "news", component: News },
      { path: "taobao", name: "taobao", component: Taobao }
    ]
  }
];

var router = new VueRouter({
  //   mode: 'history', //去除路径中的 # 号,打包之后路由会有问题
  routes: routes
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
