<template>
    <div id="index">
        <div class="navTop"></div>
        <div class="nav">
            <div class="wrap">
                <h1 class="logo">
                    <img src="src/assets/img/logo.png" alt="浙江菜头网络科技有限公司">
                </h1>
                <div class="navItem">
                    <router-link to="/home" tag="li">首页</router-link>
                    <router-link to="/intro" tag="li">产品介绍</router-link>
                    <router-link to="/join" tag="li">招商加盟</router-link>
                    <router-link to="/backstage" tag="li">商家后台</router-link>
                    <router-link to="/news" tag="li">新闻资讯</router-link>
                    <router-link to="/about" tag="li">关于我们</router-link>
                    <router-link to="/taobao" tag="li">淘宝商城</router-link>
                </div>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="foot">
            <div class="wrap">
                <div class="f-top">
                    <div class="f-top-l">
                        <div class="f-top-l-t">
                            <span @click="swit" :id='1'>关于我们</span>
                            <span @click="swit" :id='2'>招商加盟</span>
                            <span @click="swit" :id='3'>联系我们</span>
                            <!-- <router-link to="/about" tag="span">关于我们</router-link>
                            <router-link to="/join" tag="span">招商加盟</router-link>
                            <router-link to="/about" tag="span">联系我们</router-link> -->
                        </div>
                        <div class="f-top-l-b">
                            <img src="src/assets/img/tx.png" alt="">
                            <img src="src/assets/img/txy.png" alt="">
                            <img src="src/assets/img/zfb.png" alt="">
                            <img src="src/assets/img/aly.png" alt="">
                            <img src="src/assets/img/wxzf.png" alt="">
                            <img src="src/assets/img/wx.png" alt="">
                        </div>
                    </div>
                    <div class="f-top-r">
                        <div class="f-top-r-con">
                            <div>
                                <p>官方微信</p>
                                <img src="src/assets/img/gzh.png" alt="">
                            </div>
                            <div>
                                <p>售前客服</p>
                                <img src="src/assets/img/sqkf.png" alt="">
                            </div>
                            <div>
                                <p>售后客服</p>
                                <img src="src/assets/img/shkf.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="f-bot">
                    <span>版权所有：浙江菜头网络科技有限公司</span>
                    <span>公司地址：浙江省杭州市江干区下沙华媒科创园</span>
                    <span>联系电话：400-085-8597</span>
                    <span>上班时间：周一至周五 8:30-21:00 </span>
                </div>
            </div>
        </div>
        <div class="over">
            <div class="ask" @click="ask">
                <img src="src/assets/img/ask.png" alt="">
            </div>
            <div class="toTop" @click="toTop">
                <img src="src/assets/img/totop.png" alt="">
            </div>
        </div>
        <!-- <i class="icon iconfont icon-leimu"></i>
        <div>{{str}}</div>
        <div @click="fn">换内容</div>
        <img src="src/assets/1.jpg" alt=""> -->
    </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
import {setCookie,getCookie,delCookie} from '../../static/js/cookie.js'
export default {
    name:"index",
    data(){
        return{
            str:'hello'
            // img1:require('../asset/logo.png')
        }
    },
    methods:{
        swit($event){
            // console.log(typeof event.target.id);
            var num=event.target.id
            switch(num){
                case '1':this.$router.push('/about')
                break;
                case '2':this.$router.push('/join')
                break;
                case '3':this.$router.push('/about')
                break;
            }
        },
        ask(){

        },
        toTop(e){
            // console.log(e);
            $(document).css({transition:'all 0.5s'}).scrollTop(0)
            // $(document).stop().animate({ scrollTop: 0  });  
        }
    },
    mounted(){
        // axios({
        //     method:'get',
        //     url:'http://datainfo.duapp.com/shopdata/getclass.php'
        // }).then(function(d){
        //     console.log(d)
        // })

    },
}
</script>
<style scoped>
.over{
    position: fixed;
    right: 20px;
    bottom: 10px;
    width: 100px;
    z-index: 9999;
}
.over div{
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}
.over img{
    width: 100px;
}


.router-link-active{
    color: #2E9585;
    border-top: 2px solid #2E9585;
    background: #fff;
}
.wrap{
    width: 1200px;
    margin: 0 auto;
    /* background: #efefef; */
}
.navTop{
    height: 50px;
    background: #B1B1B1;
}
.nav{
    height: 76px;
    background: #9A9A9A;
}
.nav img{
    height: 70px;
    margin: 3px 0;
}
.nav .wrap{
    display: flex;
    justify-content: space-between;
}

.nav .navItem li{
    padding: 28px 30px;
    font-size: 20px;
    float: left;
    color: #000;
}

.foot{
    background: #F1F1F1;
}
.foot .f-top{
    padding: 30px 0 20px;
    display: flex;
    justify-content: space-around;
}
.f-top .f-top-l{
    padding: 0 30px;
}
.f-top .f-top-l span{
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-right: 1px solid #868686;
    font-size: 12px;
    cursor: pointer;
}
.f-top .f-top-l span:nth-of-type(1){
    padding-left: 5px;
}
.f-top .f-top-l span:nth-last-of-type(1){
    border: 0;
}
.f-top .f-top-l img{
    height: 20px;
    margin-right: 10px;
}
.f-top-r-con{
    display: flex;
}
.f-top-r-con div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}
.f-top .f-top-r p{
    font-size: 12px;
    width: 57px;
    text-align: justify;
}
.f-top .f-top-r img{
    height: 57px;
}

.f-bot{
    border-top: 1px solid #868686;
    display: flex;
    justify-content: space-around;
    padding: 20px 100px 50px;
    font-size: 8px;
}

</style>

