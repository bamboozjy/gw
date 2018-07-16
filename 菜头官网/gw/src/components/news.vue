<template>
    <div id="news">
         <div class="topPic wrap">
            <img src="src/assets/img/news/newsnav.png" alt="" >
        </div>
        <div class="nav wrap">
            <span class="active" @click="swit" >所有动态</span>
            <span @click="swit" >行业动态</span>
            <span @click="swit" >公司动态</span>
        </div>
        <div class="content wrap">
            <div class="item" v-for="item in 5" :key="item" >
                <div class="itemleft">
                    <img :src="'src/assets/img/news/'+item+'.png'" alt="" >
                </div>
                <div class="itemright">
                    <h3>星巴克小程序登陆支付宝 赠送礼品卡有新姿势</h3>
                    <p>PConline资讯】小程序现在已经成为一个非常重要的功能之一，
                        我们日常生活中有非常多的店家都开通了小程序，网络购物、
                        礼品兑换都转移到小程序中完成。星巴克登陆微信小程序一年后，终于在啊啊啊……</p>
                    <button>点击查看</button>
                </div>
            </div>
        </div>
        <div class="pagination wrap">
            <el-pagination
            background
            layout="prev, pager, next"
            prev-text="《 上一页"
            next-text="下一页 》"
            :total="20">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
import {setCookie,getCookie,delCookie} from '../../static/js/cookie.js'
export default {
    name:"news",
    data(){
        return{
            str:'hello'
        }
    },
    methods:{
        swit(e){
            $(e.srcElement).addClass('active').siblings('span').removeClass('active')
        }
    },
    mounted(){

    },
}
</script>
<style scoped>
.topPic{
    position: relative;
    height: 600px;
    overflow: visible;
    margin-bottom: 15px;
}
.topPic img{
    position: absolute;
    top: 0;
    left: -360px;
    height: 600px;
}
.nav{
    padding: 60px 0 40px;
}
.nav span{
    font-size: 20px;
    margin-right: 50px;
    cursor: pointer;
}
.active{
    border-bottom: 4px solid #2E9585;
}
.content{
    padding: 10px 0 0px;
}
.content .item{
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
}
.content .item .itemleft,.item .itemleft img{
    width: 430px;
    height:285px;
}
.content .item .itemright{
    width: 670px;
    height:285px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
}
.item .itemright h3{
    font-size: 28px;
    color: #000;
    padding: 30px 0;
}
.item .itemright p{
    font-size: 20px;
    color: #000;
    padding-bottom: 30px;
    line-height: 28px;
    flex: 1;
}
.item .itemright button{
    font-size: 20px;
    color: #2E9585;
    border: 0;
    background: none;
    margin-bottom: 10px;
}
.pagination{
    padding: 0px 0 80px;
    display: flex;
    justify-content: center;
}
.pagination .el-pagination button{
    line-height: 40px;
    height: 40px;
}
</style>

