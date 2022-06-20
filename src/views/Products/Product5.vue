<template>
  <div class="box">
    <header>
      <div>
        <img src="@/assets/products/product5/logo.png" alt="img">
        <div class="right">
          <a class="a1" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">立即体验</a>
          <a class="a2" href="https://admin.bokecc.com/register.bo?isPurchase=2&login=1" target="_blank" rel="noopener noreferrer">机构登录</a>
          <a class="a3" href="javascript:;"><img src="@/assets/products/product5/dianhua.png" alt="img">400-886-0801</a>
        </div>
      </div>
    </header>
    <div class="slideshow">
      <ul ref="slideshowUl">
        <li :class="{slide1: showImg === 1, slide2: showImg === 2, slide3: slideshowReset}" @mousedown="drag($event)">
          <img class="replenish" src="@/assets/products/product5/banner2.png" alt="img" draggable="false">
          <img src="@/assets/products/product5/banner_pc.png" alt="img" draggable="false">
          <div>
            <p class="p1">获得直播</p>
            <p class="p2">一站式企业营销服务商</p>
            <p class="p3">提供多场景直播营销解决方案</p>
            <a class="a1" draggable="false" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">免费试用</a>
            <a class="a2" draggable="false" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">领取试用金</a>
          </div>
        </li>
        <li :class="{slide1: showImg === 1, slide2: showImg === 2, slide3: slideshowReset}" @mousedown="drag($event)">
          <img src="@/assets/products/product5/banner2.png" alt="img" draggable="false">
        </li>
        <li :class="{slide1: showImg === 1, slide2: showImg === 2, slide3: slideshowReset}" @mousedown="drag($event)">
          <img src="@/assets/products/product5/banner_pc.png" alt="img" draggable="false">
          <div>
            <p class="p1">获得直播</p>
            <p class="p2">一站式企业营销服务商</p>
            <p class="p3">提供多场景直播营销解决方案</p>
            <a class="a1" draggable="false" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">免费试用</a>
            <a class="a2" draggable="false" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">领取试用金</a>
          </div>
        </li>
      </ul>
      <p><span :class="{spanbg: showImg !== 1}" @click="spanClick(0)"></span><span :class="{spanbg: showImg === 1}" @click="spanClick(1)"></span></p>
    </div>
    <div class="content1">
      <p>产品优势</p>
      <ul>
        <li class="li1">
          <p class="p1">高效稳定</p>
          <p class="p2">深耕直播底层技术，百万级直播并发访问为直播稳定性提供强大保证</p>
        </li>
        <li class="li2">
          <p class="p1">营销获客</p>
          <p class="p2">提供多种营销工具，全渠道创建企业私域流量</p>
        </li>
        <li class="li3">
          <p class="p1">数据BI可视化</p>
          <p class="p2">直播间数据可视化，更清晰地复盘，对客户进准定位</p>
        </li>
      </ul>
      <a class="symbolTagA" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">免费试用</a>
    </div>
    <div class="content2">
      <div class="left">
        <img src="@/assets/products/product5/p3.png" alt="img">
      </div>
      <div class="right">
        <p class="p1">企业培训</p>
        <p class="p2">随时随地组织、参加培训，降低成本难题</p>
        <p class="p3">异地实时培训，在线同步互动</p>
        <p class="p3">观看行为分析，量化培训效果</p>
        <a class="symbolTagA" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">免费试用</a>
      </div>
    </div>
    <div class="content2">
      <div class="right">
        <p class="p1">大会直播</p>
        <p class="p2">打破时间、空间局限</p>
        <p class="p3">一键开启直播，全球实时互动</p>
        <p class="p3">视频高清流畅、精准数据分析</p>
        <a class="symbolTagA" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">免费试用</a>
      </div>
      <div class="left">
        <img src="@/assets/products/product5/p2.png" alt="img">
      </div>
    </div>
    <div class="content2">
      <div class="left">
        <img src="@/assets/products/product5/p4.png" alt="img">
      </div>
      <div class="right">
        <p class="p1">展会直播</p>
        <p class="p2">提供一站式解决方案，快速开启线上展会</p>
        <p class="p3">全球1400+节点，保证视频安全稳定</p>
        <p class="p3">突发问题及时解决，录制回放二次分享</p>
        <a class="symbolTagA" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">免费试用</a>
      </div>
    </div>
    <div class="content2">
      <div class="right">
        <p class="p1">新品发布</p>
        <p class="p2">全平台多渠道推广新品，助力企业更具影响力</p>
        <p class="p3">超高清视频零卡顿，专属客服实时在线</p>
        <p class="p3">整套完备解决方案，深度分析观看数据</p>
        <a class="symbolTagA" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">免费试用</a>
      </div>
      <div class="left">
        <img src="@/assets/products/product5/p1.png" alt="img">
      </div>
    </div>
    <div class="content3">
      <p class="symbolP">更多功能，提升直播效果</p>
      <ul>
        <li v-for="(item, index) in content3" :key="index">
          <img :src="item.img" alt="img">
          <p class="p1">{{item.p1}}</p>
          <p class="p2">{{item.p2}}</p>
        </li>
      </ul>
      <a class="symbolTagA" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">免费试用</a>
    </div>
    <div class="content4">
      <p class="symbolP">提供全生命周期直播服务</p>
      <ul>
        <li v-for="(item, index) in content4" :key="index">
          <img :src="item.img" alt="img">
          <p class="p1">{{item.p1}}</p>
          <p class="p2">{{item.p2}}</p>
        </li>
      </ul>
    </div>
    <div class="content5">
      <p class="symbolP">我们提供的服务</p>
      <ul>
        <li v-for="(item, index) in content5" :key="index">
          <img :src="item.img" alt="img">
          <p class="p1">{{item.p1}}</p>
          <p class="p2">{{item.p2}}</p>
        </li>
      </ul>
      <a class="symbolTagA" href="https://admin.bokecc.com/register.bo?isPurchase=2" target="_blank" rel="noopener noreferrer">免费试用</a>
    </div>
    <div class="content6">
      <p class="symbolP">客户案例</p>
      <ul>
        <li v-for="(item, index) in content6" :key="index">
          <img :src="item" alt="img">
        </li>
      </ul>
    </div>
    <ProductFooter></ProductFooter>
  </div>
</template>

<script>
import ProductFooter from '@/components/products/ProductFooter.vue'

export default {
  data () {
    return {
      timer: null,
      timerFun: null,
      showImg: 0,
      slideshowReset: false,
      content3: [
        {
          img: require('@/assets/products/product5/effect1.png'),
          p1: '视频采集',
          p2: '采集素材拥有高清分辨率，可应用于众多场景'
        },
        {
          img: require('@/assets/products/product5/effect2.png'),
          p1: '多样互动',
          p2: '支持文字消息、图片展示、表情聊天等多种互动形式'
        },
        {
          img: require('@/assets/products/product5/effect3.png'),
          p1: '桌面共享',
          p2: '提供桌面、窗口等共享模式，满足众多在线直播需求'
        },
        {
          img: require('@/assets/products/product5/effect4.png'),
          p1: '问卷',
          p2: '获取观众联系方式，更精准的触达客户'
        },
        {
          img: require('@/assets/products/product5/effect5.png'),
          p1: '分享海报',
          p2: '在营销渠道流传，方便进行客户裂变'
        },
        {
          img: require('@/assets/products/product5/effect6.png'),
          p1: '数据分析',
          p2: '强大数据分析能力，可精准挖掘全网用户价值，提升流量转化'
        }
      ],
      content4: [
        {
          img: require('@/assets/products/product5/cycle1.png'),
          p1: '直播前',
          p2: '创建直播间，简单的直播间置自定义海报分享，直播间导流口'
        },
        {
          img: require('@/assets/products/product5/cycle2.png'),
          p1: '推流直播',
          p2: '视频高清稳定，互动功能丰富、视频安全加密'
        },
        {
          img: require('@/assets/products/product5/cycle3.png'),
          p1: '直播后',
          p2: '剪辑精美回放素材，用户行为数据分析、精准定位目标客户'
        }
      ],
      content5: [
        {
          img: require('@/assets/products/product5/kefu.png'),
          p1: '专业客服',
          p2: '我们为每个客户提供一对一的专属客服，协助您快速解决使用过程中的任何疑难问题'
        },
        {
          img: require('@/assets/products/product5/baozhang.png'),
          p1: '品牌保障',
          p2: '拥有成熟研发经验的资深技术团队，提供稳定技术支持，专注视频云服务16载'
        },
        {
          img: require('@/assets/products/product5/fangan.png'),
          p1: '方案教程',
          p2: '我们这里有数以万计的客户案例，可以提供专属的高效方案'
        }
      ],
      content6: [
        'c1.png', 'c2.png', 'c3.png', 'c4.png', 'c5.png',
        'c6.png', 'c7.png', 'c8.png', 'c9.png', 'c10.png'
      ].map(item => require('@/assets/products/product5/' + item))
    }
  },
  methods: {
    spanClick (index) {
      clearInterval(this.timer)
      this.showImg = index
      this.timerFun()
    },
    drag (e) {
      e = e || window.event
      const currentLi = e.currentTarget
      const currentDate = new Date()
      const currentClientX = e.clientX
      const that = this
      console.log('鼠标按下')
      clearInterval(this.timer)
      currentLi.onmousemove = function (e) {
        e = e || window.event
        const currentDx = (e.clientX - currentClientX) / 16
        console.log('鼠标移动')
        // console.log('当前位移X：', currentDx)
        that.$refs.slideshowUl.style.transform = `translateX(${currentDx}rem)`
      }
      currentLi.onmouseup = function (e) {
        e = e || window.event
        currentLi.onmousemove = null
        const runtime = new Date() - currentDate
        const dx = e.clientX - currentClientX
        const dv = 1000 * dx / runtime
        that.timerFun()
        console.log('鼠标弹起')
        console.log('持续时间：', runtime)
        console.log('水平位移：', dx)
        console.log('位移速度：', dv)
        console.log(that.showImg)
        that.$refs.slideshowUl.style.transform = 'translateX(0)'
        if (Math.abs(dv) >= 250) {
          if (dv > 0) {
            console.log('右移')
            that.showImg--
            if (that.showImg < 0) {
              that.showImg = 1
            }
          } else {
            console.log('左移')
            that.showImg++
            if (that.showImg >= 2) {
              that.showImg = 0
            }
          }
        }
      }
    }
  },
  created () {
    this.timerFun = function () {
      this.timer = setInterval(() => {
        this.slideshowReset = false
        this.showImg++
        if (this.showImg >= 2) {
          setTimeout(() => {
            this.showImg = 0
            this.slideshowReset = true
          }, 500)
        }
      }, 5000)
    }
    this.timerFun()
  },
  components: {
    ProductFooter
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  /deep/ footer {
    background: #ff6e0a;
    .top {
      border-bottom: 1px solid #ff9166;
    }
  }
  .box {
    width: 100%;
    min-width: 982px;
    overflow: hidden;
    .symbolTagA {
      display: block;
      margin: 3.75rem auto 1rem;
      width: 12.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      color: #fff;
      font-size: 0.875rem;
      text-align: center;
      border-radius: 0.5rem;
      background: linear-gradient(#ff6e0a, #fe920e);
    }
    header {
      background: #fff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      >div {
        width: 75%;
        height: 4.375rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >img {
          height: 2.25rem;
        }
        .right {
          .a1,.a2 {
            display: inline-block;
            width: 6.25rem;
            height: 2.25rem;
            line-height: 2.25rem;
            text-align: center;
            font-size: 0.75rem;
            border: 1px solid @themeColor;
            border-radius: 1.125rem;
          }
          .a1 {
            background: @themeColor;
            color: #fff;
          }
          .a2 {
            color: @themeColor;
            margin: 0 2rem 0 1rem;
          }
          .a3 {
            display: inline-block;
            color: @themeColor;
            height: 1.5rem;
            line-height: 1.5rem;
            img {
              padding: 0 0.5rem 0;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .slideshow {
      width: 100%;
      position: relative;
      ul {
        width: 300%;
        display: flex;
        li:first-child {
          .replenish {
            width: 100%;
            position: absolute;
            top: 0;
            left: -100%;
          }
        }
        li {
          width: 100%;
          transition: all 0.5s linear;
          position: relative;
          img {
            width: 100%;
          }
          >div {
            width: 75%;
            margin: auto auto;
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            user-select: none;
            p {
              color: #fff;
              font-weight: bold;
            }
            .p1 {
              font-size: 3rem;
            }
            .p2 {
              font-size: 2rem;
              padding: 3rem 0 2rem;
            }
            .p3 {
              font-size: 1.5rem;
              font-weight: normal;
              padding-bottom: 4.25rem;
            }
            a {
              display: inline-block;
              width: 11.875rem;
              height: 2.375rem;
              line-height: 2.375rem;
              font-size: 0.875rem;
              text-align: center;
              border: 1px solid #fff;
              border-radius: 1.1875rem;
            }
            .a1 {
              color: @themeColor;
              margin-right: 48px;
              background: #fff;
            }
            .a2 {
              color: #fff;
              background: @themeColor;
            }
          }
        }
        .slide1 {
          transform: translateX(-100%);
        }
        .slide2 {
          transform: translateX(-200%);
        }
        .slide3 {
          transition: none;
          transform: translateX(0);
        }
      }
      >p {
        position: absolute;
        bottom: 0.625rem;
        left: 0;
        right: 0;
        text-align: center;
        span {
          display: inline-block;
          width: 0.5rem;
          height: 0.5rem;
          margin: 0 0.3125rem;
          border-radius: 50%;
          background: #cc5d10;
          cursor: pointer;
        }
        .spanbg {
          background: #fff;
        }
      }
    }
    .content1 {
      >p {
        text-align: center;
        font-size: 2.25rem;
        font-weight: bold;
        padding: 6.25rem 0 5.3125rem;
      }
      >p::after {
        content: '';
        display: block;
        width: 3.75rem;
        height: 0.25rem;
        margin: 0.625rem auto 0;
        background: @themeColor;
      }
      ul {
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        li {
          width: 21.625rem;
          height: 13rem;
          padding: 1.25rem;
          background-size: 100% !important;
          transition: all 0.2s linear;
          .p1 {
            padding: 2rem 6rem 1.25rem;
            font-size: 1.5rem;
            background: url('../..//assets/products/product5/superiority_icon.png') 2rem 2rem no-repeat;
          }
          .p2 {
            padding: 0 2rem;
            width: 70%;
            font-size: 1.125rem;
            line-height: 1.875rem;
          }
        }
        .li1 {
          background: url('../..//assets/products/product5/superiority1.png') no-repeat;
        }
        .li2 {
          background: url('../..//assets/products/product5/superiority2.png') no-repeat;
        }
        .li3 {
          background: url('../..//assets/products/product5/superiority3.png') no-repeat;
        }
        li:hover {
          transform: translateY(-0.5rem);
        }
      }
    }
    .content2 {
      padding-top: 5rem;
      width: 82%;
      margin: 0 auto;
      display: flex;
      .left {
        width: 48%;
        height: 27.5rem;
        box-sizing: border-box;
        padding: 6.25rem 3.5rem 1.5625rem 3.6875rem;
        position: relative;
        img {
          height: 100%;
        }
      }
      .left::after {
        display: block;
        content: '';
        width: 15.625rem;
        height: 15.625rem;
        border-radius: 50%;
        background: #fef1e7;
        position: absolute;
        top: 2rem;
        left: 0;
        z-index: -1;
      }
      .right {
        padding: 0 0 0 2.1875rem;
        position: relative;
        width: 52%;
        box-sizing: border-box;
        .p1 {
          font-size: 2.25rem;
          font-weight: bold;
          width: 70%;
          padding: 6.5rem 0 0;
          border-bottom: 1px solid #e1e1e1;
        }
        .p1::before {
          display: block;
          content: '';
          width: 3.125rem;
          height: 4.625rem;
          background: url('../..//assets/products/product5/th.png') no-repeat;
          background-size: 100%;
          position: absolute;
          top: 6.25rem;
          left: 0;
          z-index: -1;
        }
        .p1::after {
          display: block;
          content: '';
          width: 4.5rem;
          height: 0.25rem;
          margin: 0.5rem 0 0;
          background: @themeColor;
        }
        .p2 {
          font-size: 1.875rem;
          padding: 1.125rem 0;
        }
        .p3 {
          font-size: 1.5rem;
          padding: 0.75rem 0;
        }
        a {
          width: 7.5rem;
          margin: 2.1875rem 0 0;
          font-size: 0.75rem;
        }
      }
    }
    .content3 {
      background: #f6f6f6;
      padding-bottom: 5rem;
      >p {
        padding: 5rem 0 0;
      }
      >p::after {
        background: @themeColor;
      }
      ul {
        width: 80%;
        margin: 5rem auto 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 30%;
          margin: 0 0 5rem;
          img {
            height: 3.125rem;
            float: left;
          }
          p {
            padding-left: 3.75rem;
          }
          .p1 {
            font-size: 1.5rem;
            font-weight: bold;
            padding-bottom: 0.9375rem;
          }
          .p2 {
            font-size: 1.25rem;
            line-height: 2.5rem;
          }
        }
      }
      >a {
        margin: 0 auto;
      }
    }
    .symbolP {
      font-size: 2.25rem;
      font-weight: bold;
      padding-top: 3.75rem;
      margin-bottom: 2.8125rem;
      text-align: center;
    }
    .symbolP::after {
      display: block;
      content: '';
      width: 3.75rem;
      height: 0.25rem;
      background: #fff;
      margin: 1.25rem auto 0;
    }
    .content4 {
      background: url('../../assets/products/product5/cycle_bg.png') no-repeat;
      background-size: 100%;
      color: #fff;
      position: relative;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        li {
          width: 30%;
          height: 14rem;
          text-align: center;
          img {
            height: 4.375rem;
            padding-bottom: 1.125rem;
          }
          .p1 {
            font-size: 1.5rem;
            margin-bottom: 0.625rem;
          }
          .p2 {
            margin: 0 auto;
            font-size: 0.875rem;
            line-height: 1.625rem;
            width: 68%;
          }
        }
      }
    }
    .content4::after {
      display: block;
      content: '';
      width: 100%;
      height: 13rem;
      position: absolute;
      top: 7rem;
      background: url('../../assets/products/product5/cycle_line.png') no-repeat;
      background-size: 100%;
    }
    .content5 {
      padding: 6.25rem 0;
      >p {
        padding: 0 0 5.3125rem;
        margin: 0;
      }
      >p::after {
        background: @themeColor;
      }
      ul {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 0 auto;
        li {
          width: 32%;
          height: 15rem;
          padding: 1.25rem;
          box-sizing: border-box;
          background: url('../../assets/products/product5/server.png') no-repeat;
          background-size: 100%;
          text-align: center;
          img {
            height: 1.875rem;
            padding: 1rem 5px 3rem;
          }
          .p1 {
            display: inline-block;
            font-size: 1rem;
            color: #fff;
            padding: 1.35rem 0;
            vertical-align: top;
          }
          .p2 {
            font-size: 0.875rem;
            line-height: 1.875rem;
            padding: 0 0.625rem;
            text-align: left;
          }
        }
      }
    }
    .content6 {
      padding: 5rem 0;
      background: #f6f6f6;
      >p {
        padding: 0 0 6.25rem;
        margin: 0;
      }
      >p::after {
        background: @themeColor;
      }
      ul {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 19%;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
</style>
