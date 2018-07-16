<template>
  <div id="app">
    
    <!--<img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <a href="https://vuejs.org" target="_blank">Core Docs</a>
    <h1>{{ msg }}</h1>
    <i class="icon iconfont icon-leimu"></i>
    <i class="icon iconfont icon-leimu"></i>
    <i class="icon iconfont icon-leimu"></i>
    <div>hahahahproj</div>
    <div>hahahahproj</div>
    <div>hahahahproj</div>
    <v-home></v-home>-->
    <router-view></router-view>
  </div>
</template>

<script>
  // import Home from './components/index.vue'
  export default {
    name: 'app',
    // components: {
    //   'v-home': Home
    // },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
