<template>
    <div id="backstage">
        <div class="topPic wrap">
            <img src="src/assets/img/back/bgstagenav.png" alt="" >
        </div>
        <div class="type">
            <h3>小程序商家后台分类</h3>
            <h4>请点击商品分类进入后来管理页面</h4>
            <p class="border"></p>
            <div class="type-con">
                <div class="m-con">
                    <img src="src/assets/img/back/1.png" alt="" >
                    <div class="bg"></div>
                    <div class="con">
                        <h4>餐饮</h4>
                        <button>点击进入</button>
                    </div>
                </div>
                <div class="m-con">
                    <img src="src/assets/img/back/2.png" alt="" >
                    <div class="bg"></div>
                    <div class="con">
                        <h4>花店</h4>
                        <button>点击进入</button>
                    </div>
                </div>
                <div class="m-con">
                    <img src="src/assets/img/back/3.png" alt="" >
                    <div class="bg"></div>
                    <div class="con">
                        <h4>酒店</h4>
                        <button>点击进入</button>
                    </div>
                </div>
                <div class="m-con">
                    <img src="src/assets/img/back/4.png" alt="" >
                    <div class="bg"></div>
                    <div class="con">
                        <h4>美容</h4>
                        <button>点击进入</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
import {setCookie,getCookie,delCookie} from '../../static/js/cookie.js'
export default {
    name:"backstage",
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
        $(".type-con .m-con").hover(function(){
            $(this).children('.bg').css("visibility",'hidden')
        },function(){
            $(this).children('.bg').css("visibility",'visible')
        })
    },
}
</script>
<style scoped>
.topPic{
    position: relative;
    height: 800px;
    overflow: visible;
    margin-bottom: 15px;
}
.topPic img{
    position: absolute;
    top: 0;
    left: -360px;
    height: 800px;
}
.type h3{
    font-size: 50px;
    color: #2E9585;
    text-align: center;
    padding: 50px 0 40px;
}
.type>h4{
    font-size: 22px;
    padding: 0px 0 40px;
    color: #565656;
    text-align: center;
}
.type .border{
    border: 1px solid #BFBFBF;
    width: 650px;
    text-align: center;
    margin: 0 auto;
}
.type-con{
    padding: 80px 0 80px;
    display: flex;
    justify-content: center;
}
.type-con .m-con{
    position: relative;
    height: 500px;
    width: 330px;
}
.type-con .m-con img{
    position: absolute;
    top: 0;
    left: 0;
    height: 500px;
    width: 330px;
}
.type-con .m-con .bg{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(100, 100, 100, 0.5);
    z-index: 9;
}
.type-con .m-con .con{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 99;
}
.m-con .con h4{
    font-size: 30px;
    color: #fff;
}
.m-con .con button{
    font-size: 20px;
    padding: 5px 40px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    background: none;
}
</style>

