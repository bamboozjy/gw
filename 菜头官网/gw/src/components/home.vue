<template>
    <div id="home">
        <div class="lbt">
            <div class="block">
                <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                <el-carousel height="800px" trigger="click">
                    <el-carousel-item v-for="item in lbt" :key="item" label=''>
                        <!-- <h3>{{ item }}</h3> -->
                        <img :src="'src/assets/img/'+item+'.png'" alt="" >
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="m-top wrap">
            <img src="src/assets/img/big.png" alt="" >
            <p>助力企业行业迈入互联网3.0时代！</p>
        </div>
        <div class="mains">
            <div class="wrap">
                <div class="mains-top">
                    <h3>菜头侠代理商六大优势</h3>
                    <div class="mains-top-b">
                        <div class="m-con">
                            <img src="src/assets/img/61.png" alt="" >
                            <p>海量资源</p>
                        </div>
                        <div class="m-con">
                            <img src="src/assets/img/62.png" alt="" >
                            <p>市场巨大</p>
                        </div>
                        <div class="m-con">
                            <img src="src/assets/img/63.png" alt="" >
                            <p>丰厚返利</p>
                        </div>
                        <div class="m-con">
                            <img src="src/assets/img/64.png" alt="" >
                            <p>培训支持</p>
                        </div>
                        <div class="m-con">
                            <img src="src/assets/img/65.png" alt="" >
                            <p>市场支持</p>
                        </div>
                        <div class="m-con">
                            <img src="src/assets/img/66.png" alt="" >
                            <p>驻地支持</p>
                        </div>
                    </div>
                </div>
                <div class="mains-bot">
                    <h3>菜头侠小程序的三大特色</h3>
                    <div class="mains-bot-b">
                        <div class="m-con">
                           <img src="src/assets/img/n1.png" alt="" >
                           <img src="src/assets/img/31.png" alt="" >
                        </div>
                        <div class="m-con">
                            <p class="midP">提供各种行业解决<br /> 方案，深挖<br />需求、解决行业痛<br />点，持续更<br />新功能，不断提升<br />用户体验</p>
                        </div>
                        <div class="m-con">
                            <img src="src/assets/img/n3.png" alt="" >
                            <img src="src/assets/img/33.png" alt="" >
                        </div>
                    </div>
                </div>
                
                <div class="mains-foot">
                    <div class="mains-foot-con">
                        <div class="group">
                            <img src="src/assets/img/group.png" alt="" >
                        </div>
                        <div class="m-con">
                            <p>高返点</p>
                            <p>产品支持</p>
                            <p>培训支持</p>
                            <p>销售工具</p>
                            <p>资源支持</p>
                            <p>推广支持</p>
                            <p>物料支持</p>
                            <p>技术支持</p>
                            <p>售后客服</p>
                            <p>技术保障</p>
                            <p>区域保护</p>                       
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="footer wrap">
            <img src="src/assets/img/foot.png" alt="">
            <div>菜头侠小程序入驻： 杭州、武汉、温州、衢州</div>
        </div>
        <div class="two">
            <div class="twoleft">
                <img src="src/assets/img/left.png" alt="" class="bgpic">
                <img src="src/assets/img/leftcon.png" alt="" class="smpic">
                <div class="cons">进一步了解我们 <i class="icon iconfont icon-right"></i></div>
            </div>
            <div class="tworight">
                <img src="src/assets/img/right.png" alt="" class="bgpic">
                <img src="src/assets/img/rightcon.png" alt="" class="smpic">
                <div class="cons">点击进入 <i class="icon iconfont icon-right"></i></div>
            </div>
        </div>
        <!-- <img :src="img" alt="" > -->
    </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
import {setCookie,getCookie,delCookie} from '../../static/js/cookie.js'
export default {
    name:"home",
    data(){
        return{
            lbt:[1,2,3]
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

.el-carousel__item {
    text-align: center;
}
.el-carousel__container img{
    height: 800px;
    margin: 0 auto;
}
#home .el-carousel ul .el-carousel__button{
    height: 6px;
    border-radius: 3px;
    background: #2E9585 !important;
}
.lbt,.m-top{
    margin-bottom: 20px;
}
.m-top{
    text-align: center;
    position: relative;
    height: 400px;
    overflow: visible;
}
.m-top img{
    position: absolute;
    top: 0;
    left: -360px;
    height: 400px;
}
.m-top p{
    position: absolute;
    top: 200px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    font-size: 67px;
    color: #FFF;
}

.mains{
    background: #F1F1F1;
    padding: 20px 0;
    margin-bottom: 20px;
}
.mains-top,.mains-bot{
    padding: 30px 0 10px;
}
.mains h3{
    font-size: 40px;
    text-align: center;
    padding-bottom: 30px;
}
.mains-top .mains-top-b{
    display: flex;
    justify-content: space-around;
    padding: 0 100px 30px;
}
.mains-top .mains-top-b div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.mains-top-b div img{
    width: 120px;
    margin-bottom: 10px;
    border-radius: 50%;
}
.mains-top-b div p{
    font-size: 16px;
}
.mains-bot .mains-bot-b{
    display: flex;
    justify-content: space-around;
    padding: 0 100px 30px;
}
.mains-bot .mains-bot-b div{
    display: flex;
    padding: 20px;
    width: 260px;
    height: 260px;
    background: #E8E8E8;
    flex-direction: column;
    align-items: center;
}
.mains-bot-b div img:nth-of-type(1){
    padding: 30px 0;
}
.mains-bot-b .midP{
    text-align: center;
    font-size: 22px;
    line-height: 34px;
    color: #5F5F5F;
}
.mains-foot-con{
    padding:20px 30px;
}
.mains-foot-con  img{
    margin-bottom: 10px;
    width: 100%;
}
.mains-foot-con .m-con{
    padding: 0 10px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.footer{
    text-align: center;
    position: relative;
    height: 200px;
    overflow: visible;
    margin-bottom: 20px;
}

.footer img{
    position: absolute;
    top: 0;
    left: -360px;
    height: 200px;
}
.footer div{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    font-size: 57px;
    color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.two{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto 20px;
}
.two>div{
    height: 495px;
    position: relative;
}
.two .twoleft,.two .twoleft .bgpic{
    width: 618px;
}
.two .tworight,.two .tworight .bgpic{
    width: 562px;
}
.two .twoleft .bgpic{
    width: 618px;
}
.two div .smpic{
    position: absolute;
    right: 30px;
    top: 50px;
    height: 60px;
}
.two .cons{
    position: absolute;
    top: 120px;
    right: 30px;
    font-size: 24px;
    color: #fff;
}
.two .cons .icon{
    font-size: 24px;
}
</style>

