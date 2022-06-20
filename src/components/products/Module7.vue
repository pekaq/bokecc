<template>
  <div class="box">
    <p>他们正在使用获得场景视频</p>
    <ul>
      <li v-for="(item, index) in imgArr" :key="index">
        <img :src="item" alt="img">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgArr: [
        '客户7.png', '客户10.png', '客户12.png', '客户3.png', '客户13.png', '客户5.png',
        '客户4.png', '客户2.png', '客户6.png', '客户1.png', '客户8.png', '客户14.png',
        '7[2].jpg', '8[1].jpg', '9[3][1].png', '4[4][1].png', '10[3][1].png', '11[3][1].png',
        '3[3][1].png', '5[4][1].png', '2[6][1].png', '8[5][1].png', '亚马逊[1].png', '1[10].png',
        '2[5][1].png', '5[3][1].png', '7[2][1].png', '3[7].jpg', '2[9].jpg', '1[4][1].png',
        '6[1][2].png', '5[2][1].png', '4[2][1].png', '3[1][1].png', '2[4][2].png', '1[3][2].png',
        '点掌财经[1].png', '安邦保险.png', '泰康[1].png', '太平洋保险[1].png', '中国人财[1].png', '中国平安[1].png'
      ].map(item => require('@/assets/products/' + item))
    }
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #f8f6f6;
  .box {
    background: @themeColor;
    >p {
      color: #333333;
      font-size: 30px;
      padding: 100px 0 40px;
      text-align: center;
    }
    >ul {
      width: 1240px;
      padding-bottom: 60px;
      margin: 0 auto;
      overflow: hidden;
      li {
        float: left;
        width: 195px;
        height: 90px;
        margin: 5px 5px;
        background: #fff;
        box-shadow: 0px 0px 5px 3px #edebeb;
        position: relative;
        img {
          max-width: 80%;
          max-height: 60px;
          transition: all 0.5s;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      li:hover {
        box-shadow: 5px 5px 20px 5px #dbd9d9;
        img {
          transform: translate(-50%, -50%) scale(1.2);
        }
      }
    }
  }
</style>
