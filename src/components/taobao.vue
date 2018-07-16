<template>
    <div id="taobao">
       <div class="wrap">
           <h2>暂无内容</h2>
           <!-- <a href="https://zhidao.baidu.com/question/984839147934996379.html" target="_blank">tiao</a> -->
       </div>
    </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "taobao",
  data() {
    return {
      str: "hello"
    };
  },
  methods: {
    fn() {
      this.str = "hi";
    }
  },
  created() {
    window.open(
      "https://shop163100602.taobao.com/shop/view_shop.htm?spm=a313o.201708ban.category.d53.64f0197aqdHBeq&mytmenu=mdianpu&user_number_id=2895020426"
    );
  },
  mounted() {
    this.$router.push("/index/home");
  }
};
</script>
<style scoped>
h2 {
  text-align: center;
  font-size: 50px;
  padding: 200px 0;
}
</style>

