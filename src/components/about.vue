<template>
    <div id="about">
        <div class="topPic">
            <div class="wrap">
                <img src="src/assets/img/about/aboutnav.png" alt="" >
            </div>
        </div>
        <div class="top">
            <div class="wrap">
                <h4>走进菜头侠网络</h4>
                <div class="t-top">
                    <div class="t-top-l">
                        <h5>公司简介</h5>
                        <h6>小程序第三方服务平台</h6>
                        <p>     浙江菜头网络科技有限公司主要针对服务行业的经营模式和消费方式，进行探索研发针对性的微信、支付宝小程序解决方案，
                            将各类服务行业引入“互联网+”的时代，借助微信、支付宝小程序简化服务流程，减少人工支出，减低运营成本，并通过微信、支付宝营销，
                            吸引新客户，提升客户体验，加强老客户的维护。</p>
                        <p>    公司以建立行业服务品质标杆为目标，不断提升服务质量，专注于微信、支付宝公众号的开发和营销，
                            探索如何利用互联网领域提升传统行业的经营和销售新模式，坚持以市场营销为根本，运用领先的营销方式及推广思路，帮助企业、商家在市场中取得先机和优势。
                            我们拥有强大的技术力量、专业的设计理念，独特的设计风格、精益求精的设计制作人员、严谨的应用程序开发人员、尽善尽美的售后服务人员，
                            为您塑造更完美的企业、商家形象。</p>
                    </div>
                    <div class="t-top-r">
                        <img src="src/assets/img/about/aboutimg.png" alt="" >
                    </div>
                </div>
                <h3>助力服务行业 迈入互联网+时代！ </h3>
                <div class="t-bot">
                    <div class="item">
                        <img src="src/assets/img/about/1.png" alt="" >
                        <span>菜头侠科技网络成立</span>
                    </div>
                    <div class="item">
                        <img src="src/assets/img/about/2.png" alt="" >
                        <span>小程序用户量</span>
                    </div>
                    <div class="item">
                        <img src="src/assets/img/about/3.png" alt="" >
                        <span>小程序上线商家</span>
                    </div>
                    <div class="item">
                        <img src="src/assets/img/about/4.png" alt="" >
                        <span>全国商家使用量</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="wrap">
                <h4>菜头侠精英团队</h4>
                <h5>我们这里有一群对互联网充满热爱的人，在勇往直前的道路上永不停歇。</h5>
                <div class="m-con">
                    <div class="item">
                        <h6>专业</h6>
                        <p>Professional</p>
                        <section>专业丰富的产品俺咧玩转市场营销</section>
                    </div>
                    <div class="item">
                        <h6>创新</h6>
                        <p>Innovatio</p>
                        <section>以新思维、新发明和新描述持续不断融入团队中。</section>
                    </div>
                    <div class="item">
                        <h6>实力</h6>
                        <p>Strength</p>
                        <section>实事求是，力求卓越，完美呈现。</section>
                    </div>
                    <div class="item">
                        <h6>协作</h6>
                        <p>Cooperation</p>
                        <section>协同合力推进小程序，作为行业标杆旗帜。</section>
                    </div>
                    <div class="item">
                        <h6>目标</h6>
                        <p>Objective</p>
                        <section>打造完美小程序应用，不求最好，只求更好。</section>
                    </div>
                </div>
            </div>
        </div>
        <div class="bot">
            <div class="wrap">
                <div class="bot-left">
                    <div class="address">
                        <h3>联系我们</h3>
                        <p>浙江省杭州市江干区下沙华媒科创园B1-220</p>
                    </div>
                    <div class="connect">
                        <div class="c-left">
                            <h5>全国咨询电话</h5>
                            <p>400-085-8597</p>
                            <h5>官方网站</h5>
                            <p>www.caitouxia.com</p>
                        </div>
                        <div class="c-right">
                            <h4>在线客服系统</h4>
                            <p>专业技术客服在线问答</p>
                        </div>
                    </div>
                </div>
                <div class="bot-right">
                    <img src="src/assets/img/about/map.png" alt="" >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
export default {
    name:'about',
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

.topPic{
    width: 100%;
    overflow: hidden;
}
.topPic .wrap{
    text-align: center;
    height: 800px;
    position: relative;
    overflow: visible;
    margin-bottom: 15px;
}
.topPic img{
    position: absolute;
    top: 0;
    left: -360px;
    height: 800px;
}
.top{
    padding: 60px 0;
    background: #fafafa;
}
.top h4{
    font-size: 35px;
    color: #2E9585;
    text-align: center;
    padding: 10px 0 30px;
}
.top .t-top{
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
}
.top .t-top .t-top-l{
    width: 500px;
}
.top .t-top-l h5{
    font-size: 29px;
    color: #565656;
    text-align: center;
    padding: 0px 0 20px;
}
.top .t-top-l h6{
    font-size: 22px;
    color: #5F5F5F;
    text-align: right;
    padding: 0px 0 20px;
}
.top .t-top-l p{
    font-size: 16px;
    line-height: 28px;
    color: #5F5F5F;
    text-align: left;
    text-indent: 32px;
}
.top .t-top .t-top-r{
    width: 600px;
}
.top .t-top-r img{
    width:600px;
}
.top h3{
    font-size: 60px;
    color: #2E9585;
    text-align: center;
    padding: 40px 0;
}
.top .t-bot{
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
}
.top .t-bot .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 800;
}
.t-bot .item img{
    margin-bottom:20px; 
}
.t-bot .item span{
    font-size: 16px;
    color: #000;
}

.mid{
    padding: 50px 0;
    background: #fff;
    
}
.mid h4{
    font-size: 35px;
    color: #2E9585;
    text-align: center;
    padding: 10px 0 30px;
    font-weight: 800;
}
.mid h5{
    font-size: 18px;
    color: #636364;
    text-align: center;
    padding: 0px 0 30px;
    font-weight: 800;
}
.mid .m-con{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.mid .m-con .item{
    background: #F2F2F2;
    width: 160px;
    height: 200px;
    color: #565656;
    padding: 0 30px 0 10px;
    font-weight: 800;
    box-sizing:border-box;
}
.m-con .item h6{
    padding: 30px 0 0px;
    font-size: 24px;
}
.m-con .item p{
    font-size: 16px;
}
.m-con .item section{
    font-size: 14px;
    padding: 20px 0 0px;
}

.bot{
    background: #F2F2F2;
    margin-bottom: 20px;
}
.bot .wrap{
    display: flex;
    justify-content: space-between;
}
.bot .bot-left{
    width: 500px;
}
.bot .bot-right{
    width: 680px;
}
.bot img{
    height: 350px;
    width: 680px;
}
.address{
    color: #0C0408;
    padding: 10px 0 30px;
}
.address h3{
    font-size: 32px;
    padding: 60px 0 5px;
    font-weight: 800;
}
.address p{
    font-size: 16px;
}
.connect{
    display: flex;
    padding-bottom: 60px;
}
.connect .c-left{
    padding: 0 120px 10px 0;
    border-right: 1px solid #ccc;
}
.connect .c-left h5{
    color: #0C0408;
    font-size: 16px;
}
.connect .c-left p:nth-of-type(1){
    color: #2E9585;
    font-size: 20px;
    padding: 0px 0 20px;
}
.connect .c-left p:nth-of-type(2){
    color: #2E9585;
    font-size: 16px;
}
.connect .c-right{
    padding: 0 0 0 50px;
    color: #000;
}
.connect .c-right h4{
    font-size: 20px;
    padding-bottom: 10px;
    font-weight: 800;
}
.connect .c-right p{
    font-size: 16px;
    font-weight: 600;
}
</style>

