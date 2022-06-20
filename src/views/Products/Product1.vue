<template>
  <div class="main">
    <Header></Header>
    <RightFixed></RightFixed>
    <ProductModule1 :currentActive="currentActive">
      <template v-slot:leftArticle>
        <p class="p1">轻松搭建企业级视频直播平台</p>
        <p class="p2">覆盖全网终端 &nbsp; API/SDK无缝嵌入 &nbsp; 开启专属直播间</p>
      </template>
      <template v-slot:rightImg>
        <img src="@/assets/products/product1/attr-80-img1.png" alt="">
      </template>
    </ProductModule1>
    <ProductModule2 :imgArr="module2ImgArr" :textArr="module2TextArr">
      <template v-slot:title_slot>
        <p>海量应用场景，轻松开启直播</p>
      </template>
    </ProductModule2>
    <p>核心产品优势，打造全行业“直播+”解决方案</p>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product1/覆盖全网终端，API_SDK无缝嵌入.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">覆盖全网终端，API/SDK无缝嵌入</p>
        <p class="p2">覆盖Windows+Mac+iOS+Android+微信小程序等全终端</p>
        <p class="p2">提供丰富API/SDK接口，轻松接入直播操作更便捷</p>
        <p class="p2">任何接口都可与企业系统无缝融合，打造定制化品牌</p>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">高并发高稳定，互动功能丰富</p>
        <p class="p2">支持百万级并发，多套异地备份容灾</p>
        <p class="p2">全球1400+节点，保障直播更稳定流畅</p>
        <p class="p2">直播内容实时录制，便于二次学习与传播</p>
        <p class="p2">提供视频连麦、聊天问答、签到抽奖等丰富互动功能</p>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product1/百万直播并发，在线互动功能丰富.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product1/全程直播监控，视频实时安全加密.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">全程安全监控，视频实时加密</p>
        <p class="p2">内容监播、智能鉴黄等功能保障视频内容安全</p>
        <p class="p2">直播过程多维度加密，通过跑马灯等防护内容外泄</p>
        <p class="p2">成熟的防录屏、防盗链等技术，全方位保护视频版权</p>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">自定义播放器，实现个性化推广</p>
        <p class="p2">提供完善iOS、Android、Web端等SDK和API接口，帮助用户快速自主定制</p>
        <p class="p2">支持播放器皮肤、片头、列表等设置，满足用户个性化定制需求</p>
        <p class="p2">支持自定义设置广告内容、投放时段等，有效促进企业宣传与推广</p>
        <p class="p2">支持视频一键转发微信、微博等各大社交平台，便于更广泛传播</p>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product1/自定义播放器设置，实现个性化推广.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule5 :imgArr="module5ImgArr" :textArr1="module5TextArr1" :textArr2="module5TextArr2">
      <template v-slot:title_slot>
        <p>众多功能，体验一站式直播服务</p>
      </template>
    </ProductModule5>
    <ProductModule6 :msgArr="module6MsgArr"></ProductModule6>
    <ProductModule7></ProductModule7>
    <ProductModule8>
      <template v-slot:text_slot>
        <p class="p1">即刻注册，一键开启直播</p>
        <p class="p2">体验获得场景视频更多云直播功能</p>
      </template>
    </ProductModule8>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import RightFixed from '@/components/RightFixed.vue'
import ProductModule1 from '@/components/products/Module1.vue'
import ProductModule2 from '@/components/products/Module2.vue'
import ProductModule3 from '@/components/products/Module3.vue'
import ProductModule4 from '@/components/products/Module4.vue'
import ProductModule5 from '@/components/products/Module5.vue'
import ProductModule6 from '@/components/products/Module6.vue'
import ProductModule7 from '@/components/products/Module7.vue'
import ProductModule8 from '@/components/products/Module8.vue'

export default {
  data () {
    return {
      currentActive: 0,
      module2ImgArr: ['云直播2[1].png', '云直播3[1].png', '云直播4.png', '云直播5.png', '云直播6.png'].map(item => require('@/assets/products/product1/' + item)),
      module2TextArr: ['教育直播', '金融直播', '医疗直播', '活动直播', '电商直播'],
      module5ImgArr: ['icon-g1[1].png', 'icon-g2.png', 'icon-g3[2].png', 'icon-g4[1].png', 'icon-g5[1].png', 'icon-g6.png', 'icon-g7[1].png', 'icon-g8[1].png'].map(item => require('@/assets/products/product1/' + item)),
      module5TextArr1: ['音视频采集', '多屏切换', '图文直播', 'PPT直播', '禁言设置', '权限设置', '手动录制', '直播带货'],
      module5TextArr2: [
        '采集素材拥有高清分辨率，同时实现幕布抠图，可应用于众多场景',
        '支持异地同步观看互动，可根据需求自由切换视频画面',
        '支持实时发布图片和文字直播，便于用户观看更多精彩内容',
        '支持多个课件存储云端，教师在教学过程中，可任意选择课件',
        '当出现不文明发言时，即时启动禁言功能，防止产生恶劣影响',
        '根据客户需求，可在直播前设置观看权限，通过验证才可进入直播间',
        '支持分段录制、暂停录制多种录制方式，避免直播结束后二次剪辑，提升运营效率',
        '通过自定义消息接口，在直播过程中实时推送商品，实现流量变现'
      ],
      module6MsgArr: [
        { text: '6月／客户端录屏模式', link: 'https://www.bokecc.com/article/1462' },
        { text: '7月／数据源图层锁定', link: 'https://www.bokecc.com/article/1457' },
        { text: '9月／直播间进出提醒', link: 'https://www.bokecc.com/article/1452' },
        { text: '10月／liveview直播H5播放器', link: 'https://www.bokecc.com/article/1447' }
      ]
    }
  },
  components: {
    Header,
    Footer,
    RightFixed,
    ProductModule1,
    ProductModule2,
    ProductModule3,
    ProductModule4,
    ProductModule5,
    ProductModule6,
    ProductModule7,
    ProductModule8
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  .main {
    min-width: 1240px;
    margin: 0 auto;
    >p {
      color: #333333;
      font-size: 2.5em;
      font-weight: bold;
      padding: 45px 0 20px;
      text-align: center;
    }
  }
</style>
