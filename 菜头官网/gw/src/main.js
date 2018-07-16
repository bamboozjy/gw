import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/all.css'
// import 'bootstrap/dist/js/bootstrap.min'
Vue.use(ElementUI)
Vue.use(VueRouter)

import App from './App.vue'
import Index from './components/index.vue';
import Home from './components/home.vue';
import Intro from './components/intro.vue';
import Join from './components/join.vue';
import Backstage from './components/backstage.vue';
import About from './components/about.vue';
import News from './components/news.vue';
import Taobao from './components/taobao.vue';

var routes=[
	{path:'/',redirect:'/index'},//重定向到index下
	{path:'/index',component:Index,children:[
		{path:'/home',component:Home},
		{path:'/intro',component:Intro},
		{path:'/join',component:Join},
		{path:'/backstage',component:Backstage},
		{path:'/about',component:About},
		{path:'/news',component:News},
		{path:'/taobao',component:Taobao},
		{path:'/',redirect:'/home'}
	]}
]

var router=new VueRouter({
	// mode: 'history',//去除路径中的 # 号,打包之后可能会有问题
	routes:routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
