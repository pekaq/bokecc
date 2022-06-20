<template>
  <div class="box">
    <Header></Header>
    <RightFixed></RightFixed>
    <ProductModule1 :currentActive="currentActive">
      <template v-slot:leftArticle>
        <p class="p1">为企业提供安全可靠的视频应用加速服务</p>
        <p class="p2">开创不堵车的安全高速，不止CDN这么简单</p>
      </template>
      <template v-slot:rightImg>
        <img src="@/assets/products/product7/attr-83-img1.png" alt="">
      </template>
    </ProductModule1>
    <p>强大优势功能，为企业发展“加速”</p>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product7/零测试成本，CDN_超级增值服务.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">零测试成本，CDN+超级增值服务</p>
        <p class="p2">提供不同量级和场景测试，无需考虑成本支出</p>
        <p class="p2">点播HTTPS上传转码加速一体化服务</p>
        <p class="p2">直播端到端Triple-play加速解决方案</p>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">堡垒防护源站，加速服务安全可靠</p>
        <p class="p2">支持多种防盗链，防止DDoS类型攻击，保护源站</p>
        <p class="p2">支持全网HTTPS安全传输、视频防盗链等功能</p>
        <p class="p2">提供安全可靠的云加速服务，保障用户数据不外泄</p>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product7/堡垒防护源站，加速服务安全可靠.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product7/深度学习智能CDN，操作更加方便快捷.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">深度学习智能CDN，操作更加方便快捷</p>
        <p class="p2">自主研发网络陀螺仪稳定技术</p>
        <p class="p2">全球首推带AI的智能CDN服务</p>
        <p class="p2">采用全终端无缝接入方式，操作更便捷</p>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">全网智能调度，个性品牌支持</p>
        <p class="p2">结合底层探测的智能调度，支持DNS、HTTPDNS、HTTP302调度方式</p>
        <p class="p2">支持自定义域名管理及配置项目，便于用户进行统计分析、日志管理等</p>
        <p class="p2">支持Portal定制化，满足用户私有化CDN需求</p>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product7/全网智能调度，个性品牌支持.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule2 :imgArr="module2ImgArr" :textArr="module2TextArr">
      <template v-slot:title_slot>
        <p>提供智能“CDN+”全方位加速解决方案</p>
      </template>
    </ProductModule2>
    <ProductModule5 :imgArr="module5ImgArr" :textArr1="module5TextArr1" :textArr2="module5TextArr2">
      <template v-slot:title_slot>
        <p>畅享极速体验，服务创造价值</p>
      </template>
    </ProductModule5>
    <ProductModule7></ProductModule7>
    <ProductModule8>
      <template v-slot:text_slot>
        <p class="p1">更多云加速项目等您体验</p>
        <p class="p2"> &nbsp; </p>
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
import ProductModule7 from '@/components/products/Module7.vue'
import ProductModule8 from '@/components/products/Module8.vue'

export default {
  data () {
    return {
      currentActive: 6,
      module2ImgArr: ['教育[1].jpg', '云加速.jpg', '云加速1.jpg', '云加速2.jpg', '云加速3.jpg'].map(item => require('@/assets/products/product7/' + item)),
      module2TextArr: ['教育', '游戏', '电商', '政企', '健康医疗'],
      module5ImgArr: ['icon-j1.png', 'icon-j2.png', 'icon-j3[1].png', 'icon-j4[1].png', 'icon-j5[1].png', 'icon-j6[1].png', 'icon-j7[1].png', 'icon-j8[1].png'].map(item => require('@/assets/products/product7/' + item)),
      module5TextArr1: ['移动推拉流客户端', 'ISP全覆盖', '分发加速', 'DDoS防护', '安全加密', '支持多终端', '稳定播放', '全网数据分析'],
      module5TextArr2: [
        '提供移动推拉流客户端，无缝接入直播加速，满足自主化直播需求',
        '自有BGP节点及全球多地机房，可接入众多运营商，减少跨运营商访问流量',
        '支持全球快速、稳定的多元化视频内容分发，提供流畅的用户体验',
        '全面、高效的DDoS防护能力，保障用户业务安全运行',
        '自主研发CCDRM3.O加密系统，保障视频在加速的过程中的内容安全',
        '无论PC端还是APP端，均可支持在线视频加速',
        '全球1400+节点，融合主流、自建视频服务优势，确保视频稳定播放',
        '强大数据分析能力，可精准挖掘全网用户价值，提升流量转化'
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
    ProductModule7,
    ProductModule8
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  /deep/ #module2Ul li {
    height: 238px;
    >p {
      font-size: 18px;
    }
  }
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
