<template>
  <footer>
    <div class="top">
      <a href="https://www.bokecc.com/"><img src="@/assets/products/product4/company.png" alt="logo"></a>
      <div class="div1">
        <ul>
          <li>
            <a href="javascript:;">服务</a>
          </li>
          <li>
            <a href="https://www.bokecc.com/class/375">精细化服务</a>
          </li>
        </ul>
        <ul>
          <li v-for="(item, index) in footerContent1" :key="index">
            <a :href="item.link">{{item.msg}}</a>
          </li>
        </ul>
        <ul>
          <li v-for="(item, index) in footerContent2" :key="index">{{item}}</li>
        </ul>
        <a href="https://www.bokecc.com/class/131">网站地图</a>
      </div>
      <div class="div2">
        <div>
          <img src="@/assets/products/product4/serve.png" alt="img">
          <p>微信服务号</p>
        </div>
        <div>
          <img src="@/assets/products/product4/subscribe.png" alt="img">
          <p>微信订阅号</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p class="p1">
        <span>创盛视联数码科技（北京）有限公司</span>
        <span>北京市海淀区北三环中路44号海淀文教产业园F座4层（100083）</span>
        <span>(8610)82446642</span>
      </p>
      <p class="p2">Copyright 2005-2021 获得场景视频（bokecc.com）版权所有</p>
      <span>电信业务审批[2007]字第265号高新技术企业认定</span>
      <img src="@/assets/products/product4/copyright.png" alt="img">
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802030780">京公网安备 11010802030780号</a>
      <a href="http://www.beian.miit.gov.cn/">京ICP备15048265号-8</a>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      footerContent1: [
        { msg: '团队', link: 'javascript:;' },
        { msg: '企业简介', link: 'https://www.bokecc.com/class/8' },
        { msg: '人才招聘', link: 'https://www.bokecc.com/class/419' },
        { msg: '合作伙伴', link: 'https://www.bokecc.com/class/10' }
      ],
      footerContent2: ['联系方式', '市场合作：', 'marketing@bokecc.com', '销售咨询：', '400-886-0801']
    }
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  footer {
    background: #272220;
    .top {
      width: 75%;
      margin: 0 auto;
      padding: 3.125rem 0;
      border-bottom: 1px solid #66615f;
      display: flex;
      justify-content: space-between;
      .div1 {
        width: 48%;
        display: flex;
        justify-content: space-around;
        a,li {
          color: #fff;
          font-size: 0.875rem;
          line-height: 2.25rem;
        }
        >a {
          height: 1rem;
        }
        >a,ul li:first-child {
          background: url('../../assets/products/product4/icon_arrow.png') left 0.8rem no-repeat;
          padding-left: 1.25rem;
          font-size: 1.25rem;
          padding-bottom: 1.5rem;
        }
        ul li:first-child a {
          font-size: 1.25rem;
        }
      }
      .div2 {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        div {
          padding-right: 1.875rem;
          img {
            width: 8.1875rem;
            height: 8.1875rem;
          }
          p {
            text-align: center;
            color: #fff;
            font-size: 0.875rem;
            padding: 1.125rem 0 0;
          }
        }
      }
    }
    .bottom {
      width: 75%;
      margin: 0 auto;
      padding: 1.5625rem 0 3.125rem;
      color: #fff;
      .p1 {
        font-size: 0.875rem;
        padding-bottom: 1.5625rem;
        span {
          padding: 0 1.875rem 0 1.5625rem;
          background: url('../../assets/products/product4/icon_arrow.png') left 0.35rem no-repeat;
        }
      }
      .p2 {
        padding-bottom: 0.9375rem;
      }
      img {
        height: 1.25rem;
        padding: 0 0.625rem 0 1.5rem;
      }
      a {
        color: #fff;
        padding-right: 1.5625rem;
      }
    }
  }
</style>
