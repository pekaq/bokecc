<template>
  <div class="box">
    <Header></Header>
    <RightFixed></RightFixed>
    <ProductModule1 :currentActive="currentActive">
      <template v-slot:leftArticle>
        <p class="p1">专注在线教育互动云课堂</p>
        <p class="p2">覆盖Windows、Mac、iOS、Android等全网终端</p>
        <p class="p2">提供API、SDK接口，无缝融合定制化品牌</p>
      </template>
      <template v-slot:rightImg>
        <img src="@/assets/products/product3/attr-81-img1.png" alt="">
      </template>
    </ProductModule1>
    <p>秒速开启云课堂，满足众多应用场景</p>
    <ul>
      <li>1v1私教</li>
      <li>1vN小班课</li>
      <li>1vN大班课</li>
      <li>双师课堂</li>
      <li>视频会议</li>
      <li>录播课程</li>
    </ul>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product3/1v1私教.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">1v1私教</p>
        <p class="p3">师生零距离互动，因材施教更高效</p>
        <p class="p3">1v1在线教学，快速搭建定制化专属私教课堂</p>
      </template>
      <template v-slot:div_slot>
        <div class="divslot">
          <div class="div1">功能特色：</div>
          <div class="div2">
            <p class="p3">全网终端接入，实时高效互动</p>
            <p class="p3">课件桌面共享，画面清晰流畅</p>
          </div>
        </div>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">1vN小班课</p>
        <p class="p3">真实还原线下课堂，16路同步连麦互动强</p>
        <p class="p3">提供1vN小班模式，适用于讲师、学员面对面互动授课</p>
      </template>
      <template v-slot:div_slot>
        <div class="divslot">
          <div class="div1">功能特色：</div>
          <div class="div2">
            <p class="p3">支持全球直播，丰富互动工具</p>
            <p class="p3">定制教学内容，高清回放录制</p>
          </div>
        </div>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product3/1v1小班课.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product3/1v1大班课.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">1vN大班课</p>
        <p class="p3">百万级高并发访问，同步在线学习零卡顿</p>
        <p class="p3">百万学生高效互动，让更多孩子走进直播云课堂</p>
      </template>
      <template v-slot:div_slot>
        <div class="divslot">
          <div class="div1">功能特色：</div>
          <div class="div2">
            <p class="p3">多种互动方式，活跃课堂气氛</p>
            <p class="p3">精准数据统计，转化有效商机</p>
          </div>
        </div>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">双师课堂</p>
        <p class="p3">主讲教师线上授课，辅导教师课堂管理</p>
        <p class="p3">打造线上线下双联动名师共享互动教学，高效均衡教学资源</p>
      </template>
      <template v-slot:div_slot>
        <div class="divslot">
          <div class="div1">功能特色：</div>
          <div class="div2">
            <p class="p3">自主平台定制，降低配备成本</p>
            <p class="p3">全球同步联动，多点互动流畅</p>
          </div>
        </div>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product3/双师课堂.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product3/视频会议.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">视频会议</p>
        <p class="p3">打破时空局限，异地轻松开会</p>
        <p class="p3">“云+端”一站式解决方案，为企业提供全方位协作技术支持</p>
      </template>
      <template v-slot:div_slot>
        <div class="divslot">
          <div class="div1">功能特色：</div>
          <div class="div2">
            <p class="p3">全面兼容无缝整合，快速部署简单易用</p>
            <p class="p3">视频布局自由切换，数据文档同步共享</p>
          </div>
        </div>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">录播课程</p>
        <p class="p3">智能化资源管理，释放教学新价值</p>
        <p class="p3">即开通即使用，打造常态化易操作的交互智能课堂</p>
      </template>
      <template v-slot:div_slot>
        <div class="divslot">
          <div class="div1">功能特色：</div>
          <div class="div2">
            <p class="p3">录课素材完整，课程笔记回看</p>
            <p class="p3">课件共享下载，课程评论打分</p>
          </div>
        </div>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product3/录播课程.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule5 :imgArr="module5ImgArr" :textArr1="module5TextArr1" :textArr2="module5TextArr2">
      <template v-slot:title_slot>
        <p>多种“云”端互动模式，让知识传递更轻松</p>
      </template>
    </ProductModule5>
    <ProductModule7></ProductModule7>
    <ProductModule8>
      <template v-slot:text_slot>
        <p class="p1">更多云课堂互动等您体验</p>
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
import ProductModule3 from '@/components/products/Module3.vue'
import ProductModule4 from '@/components/products/Module4.vue'
import ProductModule5 from '@/components/products/Module5.vue'
import ProductModule7 from '@/components/products/Module7.vue'
import ProductModule8 from '@/components/products/Module8.vue'

export default {
  data () {
    return {
      currentActive: 2,
      module5ImgArr: [
        'icon-i1.png', 'icon-i2.png', 'icon-i3.png', 'icon-i4.png',
        'icon-i5.png', 'icon-i6.png', 'icon-i7.png', 'icon-i8.png',
        'icon-i9.png', 'icon-i10.png', 'icon-i11.png', 'icon-i12.png'
      ].map(item => require('@/assets/products/product3/' + item)),
      module5TextArr1: ['网盘存储', '桌面共享', '教学互动', '文档白板', '多人连麦', '多样互动', '布局切换', '回放录制', '自选推流', '数据统计', '营销招生', '监控管理'],
      module5TextArr2: [
        '100M免费存储容量，既方便教师管理课件，又可支持学生共享文件',
        '提供桌面、窗口两种共享模式，满足众多授课需求',
        '支持签到、答题卡、计时器等互动形式，教师可实时了解学生情况',
        '支持PPT、Word、PDF等多种格式文档， 同时提供互动电子白板功能',
        '支持举手连麦、自由连麦、音频连麦、视频连麦等多种形式',
        '支持文字消息、图片展示、表情聊天、随堂测试等多种互动形式',
        '课堂布局实时切换，从讲课答疑到商务会谈，海量场景全覆盖',
        '支持本地和服务端双录制，录制自动转为点播视频，灵活调用点播视频',
        '支持网络推流节点切换，保障互动云课堂稳定、流畅',
        '提供在线人数、使用设备、地区分布、聊天记录等数据精准分析',
        '支持多渠道营销推广，助力机构精准转化意向学员',
        '后台开启全程监控功能，直播内容管理更便捷'
      ]
    }
  },
  components: {
    Header,
    Footer,
    RightFixed,
    ProductModule1,
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
  /deep/ #module5Ul {
    height: 840px;
  }
  .box {
    min-width: 1240px;
    margin: 0 auto;
    >p {
      color: #333333;
      font-size: 2.5em;
      font-weight: bold;
      padding: 65px 0 40px;
      text-align: center;
    }
    >ul {
      width: 1200px;
      margin: 0 auto 45px;
      display: flex;
      justify-content: space-around;
      li {
        padding-left: 25px;
        font-size: 18px;
        line-height: 24px;
        position: relative;
      }
      li:before {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        background: @themeColor;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: 5px;
      }
    }
  }
</style>
