<template>
  <div class="box">
    <Header></Header>
    <RightFixed></RightFixed>
    <ProductModule1 :currentActive="currentActive">
      <template v-slot:leftArticle>
        <p class="p1">建构安全稳定云点播平台体验极致视频播放</p>
        <p class="p2">720+场景化视频功能，覆盖教育、金融、医疗等各行业</p>
      </template>
      <template v-slot:rightImg>
        <img src="@/assets/products/product2/attr-67-img1.png" alt="">
      </template>
    </ProductModule1>
    <ProductModule2 :imgArr="module2ImgArr" :textArr="module2TextArr">
      <template v-slot:title_slot>
        <p>“点播”覆盖全场景，享受极致播放体验</p>
      </template>
    </ProductModule2>
    <p>核心产品优势，“点播”助力创新</p>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product2/视频安全加密，开启版权保护.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">视频安全加密，开启版权保护</p>
        <p class="p2">自主研发CCDRM3.0核心加密算法，覆盖全网终端</p>
        <p class="p2">防录屏、跑马灯、动态水印等多重安全技术，保障视频安全</p>
        <p class="p2">提供黑白名单设置、时间戳等防盗链技术，维护视频版权</p>
        <p class="p2">应用HTTPS安全协议，防止网页数据被篡改</p>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">智能AI技术，确保视频质量</p>
        <p class="p2">通过自研智能转码技术，可实现课件优化、H265转码等多种场景需求，保障视频质量</p>
        <p class="p2">通过节点负载采集、智能测速、播放IP精准快判等多重技术，提供稳定流畅播放体验</p>
        <p class="p2">AI自动鉴黄技术，可准确识别色情、涉暴视频，确保视频内容健康安全</p>
        <p class="p2">AI语音识别技术，可自动识别音频内容为视频字幕，提高用户观看体验</p>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product2/智能AI技术，确保视频质量.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product2/精准数据分析，高效视频管理.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">精准数据分析，高效视频管理</p>
        <p class="p2">以Hadoop大数据存储和计算系统为基础，支持全终端播放行为采集</p>
        <p class="p2">提供多维度数据统计，可分析时间、空间、地理位置、观众行为等信息</p>
        <p class="p2">全部统计数据均可导出表格，支持二次分析处理，并可同步对接到用户系统</p>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">提供短视频SDK，支持VR播放</p>
        <p class="p2">短视频SDK可提供视频拍摄、编辑、上传、存储、分发、数据分析等功能</p>
        <p class="p2">短视频SDK兼容iOS和Android，便于用户快速搭建自有短视频APP</p>
        <p class="p2">基于云点播VR播放技术，实现行星视角切换、焦距控制等全景播放、全终端控制</p>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product2/提供短视频SDK，支持VR播放.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule5 :imgArr="module5ImgArr" :textArr1="module5TextArr1" :textArr2="module5TextArr2">
      <template v-slot:title_slot>
        <p>720+视频点播功能，助力挖掘新商机</p>
      </template>
    </ProductModule5>
    <ProductModule6 :msgArr="module6MsgArr"></ProductModule6>
    <ProductModule7></ProductModule7>
    <ProductModule8>
      <template v-slot:text_slot>
        <p class="p1">一键进入，享受极致视频体验</p>
        <p class="p2">体验获得场景视频更多云点播功能</p>
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
      currentActive: 1,
      module2ImgArr: ['云点播1.png', '云点播2.png', '云点播3.png', '云点播4.png', '云点播5.png'].map(item => require('@/assets/products/product2/' + item)),
      module2TextArr: ['在线教育', '视频网站', '企业培训', '知识付费', '短视频'],
      module5ImgArr: ['icon-h1.png', 'icon-h2.png', 'icon-h3.png', 'icon-h4.png', 'icon-h5.png', 'icon-h6.png', 'icon-h7.png', 'icon-h8.png'].map(item => require('@/assets/products/product2/' + item)),
      module5TextArr1: ['视频截图', '视频打点', '课件重编', '倍速播放', '字幕设置', '密码设置', '视频二维码', '空间流量统计'],
      module5TextArr2: [
        '视频播放过程中可随时截取精彩画面，便于保存、传播',
        '通过系统把视频重要内容标记出来，方便用户快速定位观看',
        '支持PPT文档上传H5重编，实现视频画面无损显示，还原PPT动画',
        '支持定制倍速播放，用户可自由选择视频播放速度',
        '支持自定义字幕设置，可自行切换中英文字幕',
        '可对视频文件进行播放密码设置，密码输入正确后方可观看视频',
        '通过手机扫描二维码，即可进入移动端播放页面，便于内容推广',
        '可实时统计用户使用的流量情况和空间使用数值，更精准计费'
      ],
      module6MsgArr: [
        { text: '6月/H5自定义倍速', link: 'https://www.bokecc.com/article/2017' },
        { text: '9月/H5播放列表', link: 'https://www.bokecc.com/article/2016' },
        { text: '10月/H5/APP播放器广告', link: 'https://www.bokecc.com/article/2015' },
        { text: '10月/接口统计终端细化', link: 'https://www.bokecc.com/article/2014' }
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
  .box {
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
