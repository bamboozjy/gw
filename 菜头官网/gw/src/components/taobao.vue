<template>
    <div id="taobao">
       <div class="wrap">
           <h2>暂无内容</h2>
       </div>
    </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
import {setCookie,getCookie,delCookie} from '../../static/js/cookie.js'
export default {
    name:"taobao",
    data(){
        return{
            str:'hello'
        }
    },
    methods:{
        fn(){
            this.str='hi'
        }
    },
    mounted(){

    },
}
</script>
<style scoped>
h2{
    text-align: center;
    font-size: 50px;
    padding: 300px 0;
}
</style>

