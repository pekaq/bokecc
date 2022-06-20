<template>
  <footer>
    <div class="top">
      <div class="inner">
        <div class="left">
          <h1>
            <a href="https://www.bokecc.com/">
              <img src="@/assets/logo/logo1.png" alt="抱歉，图片丢失了！">
            </a>
          </h1>
          <ul>
            <li class="phone">400-993-9696</li>
            <li class="email">marketing@bokecc.com</li>
            <li class="address">北京市海淀区北三环中路44号海淀文教产业园F座4层</li>
          </ul>
        </div>
        <ul>
          <li v-for="item in products" :key="item.name">
            <a :href="item.link">{{item.name}}</a>
          </li>
        </ul>
        <ul>
          <li v-for="item in industrys" :key="item.name">
            <a :href="item.link">{{item.name}}</a>
          </li>
        </ul>
        <ul>
          <li v-for="item in scenes" :key="item.name">
            <a :href="item.link">{{item.name}}</a>
          </li>
        </ul>
        <ul>
          <li v-for="item in about" :key="item.name">
            <a :href="item.link">{{item.name}}</a>
          </li>
        </ul>
        <div class="right">
          <div>
            <img src="@/assets/logo/产品咨询.jpg" alt="产品咨询" title="产品咨询">
            <p>产品咨询</p>
          </div>
          <div>
            <img src="@/assets/logo/公众号.jpg" alt="获得场景视频公众号" title="获得场景视频公众号">
            <p>获得场景视频公众号</p>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <p>友情链接：<a href="https://www.bokecc.com/">直播软件</a></p>
    </div>
    <div class="bottom">
      <p>
        <span>Copyright©2005-2021创盛视联数码科技（北京）有限公司版权所有</span>
        <a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备15048265号-8</a>
        <img src="@/assets/logo/ga.png" alt="">
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802030780" target="_blank" rel="noopener noreferrer">京公网安备 11010802030780号</a>
        <span>电信业务审批[2007]字第265号高新技术企业认定</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      products: this.$store.state.products,
      industrys: this.$store.state.industrys,
      scenes: this.$store.state.scenes,
      about: this.$store.state.about
    }
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #535353;
  footer {
    width: 100%;
    min-width: 1240px;
    height: 500px;
    background-color: @themeColor;
    .top {
      width: 1240px;
      min-width: 1240px;
      margin: 0 auto;
      color: #ffffff;
      .inner {
        height: 330px;
        .left {
          float: left;
          width: 250px;
          padding: 0 30px 0 25px;
          h1 {
            max-width: 145px;
            height: 60px;
            line-height: 60px;
            padding: 30px 0;
            img {
              max-width: 100%;
              max-height: 100%;
              vertical-align: middle;
            }
          }
          ul {
            max-width: 100%;
            height: 205px;
            li {
              padding-left: 35px;
              padding: 10px 20px 10px 35px;
              margin: 5px 0;
              font-size: 14px;
            }
            .phone {
              background: url('../assets/logo/icon-phone.png') 5px 5px no-repeat;
            }
            .email {
              background: url('../assets/logo/icon-email.png') 5px 5px no-repeat;
            }
            .address {
              background: url('../assets/logo/icon-address.png') 5px 5px no-repeat;
            }
          }
        }
        >ul {
          width: 140px;
          float: left;
          padding-top: 50px;
          li {
            font-size: 12px;
            padding: 7px 0 7px 25px;
            a {
              color: #ffffff;
            }
            a:hover {
              color: #c8c8c8;
            }
          }
          li:first-child {
            background: url('../assets/logo/icon-arrow.png') 5px 8px no-repeat;
            padding-bottom: 30px;
            font-size: 14px;
          }
        }
        .right {
          float: left;
          div {
            float: left;
            padding: 55px 0 0 30px;
            text-align: center;
            p {
              padding-top: 10px;
            }
          }
        }
      }
    }
    .center,.bottom {
      height: 84px;
      line-height: 84px;
      color: #ffffff;
      border-top: 1px solid #c8c8c8;
      p {
        width: 1240px;
        margin: 0 auto;
        padding-left: 25px;
      }
    }
    .center p a {
      color: #c8c8c8;
    }
    .bottom p a {
      color: #ffffff;
    }
    .bottom p a:nth-child(2) {
      padding: 0 10px 0 65px;
    }
    .bottom p img:nth-child(3) {
      padding-left: 20px;
      vertical-align: middle;
    }
    .bottom p a:nth-child(4) {
      padding: 0 65px 0 5px;
    }
  }
</style>
