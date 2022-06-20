<template>
  <div class="box">
    <Header></Header>
    <RightFixed></RightFixed>
    <ProductModule1 :currentActive="currentActive">
      <template v-slot:leftArticle>
        <p class="p1">轻松搭建在线招生与学习平台</p>
        <p class="p2">一站式解决方案，助力机构线上转型</p>
        <p class="p2">零技术门槛，打造专属线上教学系统</p>
      </template>
      <template v-slot:rightImg>
        <img src="@/assets/products/product6/attr-82-img1.png" alt="">
      </template>
    </ProductModule1>
    <div class="school">
      <p>六大模块系统，全方位助力机构搭建个性化网校系统</p>
      <ul>
        <li v-for="(item, index) in schoolImg" :key="index">
          <img :src="item" alt="img">
          <p class="p1">{{schoolSystem[index].title}}</p>
          <p class="p2">{{schoolSystem[index].p1}}</p>
          <p class="p2">{{schoolSystem[index].p2}}</p>
        </li>
      </ul>
    </div>
    <p>直播点播一体化，招生引流创商机</p>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product6/直播课程.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">直播课程</p>
        <p class="p4">高并发零卡顿直播课程，师生实时零距离互动</p>
        <p class="p2">桌面共享、文档白板、视频连麦、聊天问答</p>
        <p class="p2">签到抽奖、红包打赏、录制回放、渠道推广</p>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">点播课程</p>
        <p class="p4">即开通即使用，高清流畅观看体验</p>
        <p class="p2">众多上传方式、多种格式文档、视频安全加密、全网终端接入</p>
        <p class="p2">课程授权播放、定制内容设置、课件资料下载、知识随堂检测</p>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product6/点播课程.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule3>
      <template v-slot:img_slot>
        <img src="@/assets/products/product6/考试评测.png" alt="">
      </template>
      <template v-slot:article_slot>
        <p class="p1">考试评测</p>
        <p class="p4">深度定制专属系统，及时掌握课程内容</p>
        <p class="p2">考试题型丰富、海量组卷方案、多种习题模式、高频错题收集</p>
        <p class="p2">计时在线考试、智能阅卷评估、成绩统计分析、弱点具体解析</p>
      </template>
    </ProductModule3>
    <ProductModule4>
      <template v-slot:article_slot>
        <p class="p1">营销推广</p>
        <p class="p4">多渠道营销推广，降低机构招生成本</p>
        <p class="p2">课程全网推广、裂变海报推送、用户信息采集、学员表单收集</p>
        <p class="p2">课程评价管理、二级分销机制、分校专业管理、优惠券课程卡</p>
      </template>
      <template v-slot:img_slot>
        <img src="@/assets/products/product6/营销推广.png" alt="">
      </template>
    </ProductModule4>
    <ProductModule2 :imgArr="module2ImgArr" :textArr="module2TextArr">
      <template v-slot:title_slot>
        <p>提供全场景在线学习解决方案</p>
      </template>
    </ProductModule2>
    <div class="school2">
      <p class="p1">全终端轻松接入，全系统无缝融合</p>
      <p class="p2">Windows+Mac+iOS+Android+微信小程序+H5全面支持</p>
      <ul :class="{school2Active: liHover !== null}">
        <li v-for="(item, index) in school2Img1" :key="index" :class="{liActive: liHover === index, liDead: liHover !== index}" @mouseenter="elHover(index)">
          <img :src="item" alt="img" class="img1">
          <p class="p1">{{school2System[index].title}}</p>
          <p class="p2">{{school2System[index].p1}}</p>
          <div class="img2div"><img :src="school2Img2[index]" alt="img" class="img2"></div>
        </li>
      </ul>
      <a href="https://admin.bokecc.com/register.bo">申请免费试用</a>
    </div>
    <ProductModule7></ProductModule7>
    <ProductModule8>
      <template v-slot:text_slot>
        <p class="p1">开启您的专属在线招生与学习系统</p>
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
import ProductModule7 from '@/components/products/Module7.vue'
import ProductModule8 from '@/components/products/Module8.vue'

export default {
  data () {
    return {
      currentActive: 5,
      schoolImg: ['网校系统1.png', '网校系统2.png', '网校系统3.png', '网校系统4.png', '网校系统5.png', '网校系统6.png'].map(item => require('@/assets/products/product6/' + item)),
      schoolSystem: [
        { title: '教学系统', p1: '直播课程、点播课程、互动小班', p2: '视频加密、倍速播放、离线播放' },
        { title: '考评系统', p1: '课后测验、课程考试、题库管理', p2: '智能组卷、自动阅卷、考试统计' },
        { title: '助学系统', p1: '上课提醒、课后作业、资料下载', p2: '问答社区、进度统计、签到记录' },
        { title: '教务系统', p1: '学员管理、讲师管理、课程管理', p2: '智能排课、资源管理、权限管理' },
        { title: '营销系统', p1: '二级分销、裂变海报、渠道推广', p2: '优惠券、课程评价、财务管理' },
        { title: '门户系统', p1: '独立域名、品牌定制、站点装修', p2: '多终端平台、微信登录、分校模式' }
      ],
      liHover: null,
      isTrue: false,
      school2Img1: ['网校系统11.png', '网校系统12.png', '网校系统13.png', '网校系统14.png'].map(item => require('@/assets/products/product6/' + item)),
      school2Img2: ['网校系统15.png', '网校系统16.png', '网校系统17.png', 'h5.png'].map(item => require('@/assets/products/product6/' + item)),
      school2System: [
        { title: '电脑网校', p1: '搭建机构独立品牌在线学习平台' },
        { title: 'APP网校', p1: '可实现多角色便捷操作，轻松互动' },
        { title: '小程序网校', p1: '无需开发，一键进入在线学习系统' },
        { title: 'H5网校', p1: '轻量级系统平台，即开通即使用' }
      ],
      module2ImgArr: ['网校系统1.jpg', '网校系统2.jpg', '网校系统3.jpg', '网校系统4.jpg', '网校系统5.jpg', '网校系统6.jpg', '网校系统7.jpg', '网校系统8.jpg'].map(item => require('@/assets/products/product6/' + item)),
      module2TextArr: ['K12教育', '语言培训', '兴趣培训', '课程学习', '学历教育', '职业培训', '平台招生', '企业培训']
    }
  },
  methods: {
    elHover (index) {
      this.liHover = index
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
    ProductModule7,
    ProductModule8
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  /deep/ #module2Ul {
    width: 1220px;
    height: 650px;
    display: block;
    li {
      float: left;
      width: 275px;
      height: 295px;
      margin: 15px 15px;
      >p {
        font-size: 18px;
      }
    }
  }
  .box {
    min-width: 1240px;
    margin: 0 auto;
    .school {
      >p {
        font-size: 30px;
        font-weight: bold;
        color: #333333;
        text-align: center;
        padding: 65px 0 35px;
      }
      >ul {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        li {
          float: left;
          width: 390px;
          height: 155px;
          box-sizing: border-box;
          padding: 25px 30px 40px;
          margin: 5px 5px;
          box-shadow: 0px 5px 15px 5px #f1f1f1;
          >img {
            float: left;
            width: 66px;
            height: 66px;
            margin: 12px 35px 0 0;
          }
          .p1 {
            font-size: 16px;
            color: #333333;
            padding: 0 0 25px;
          }
          .p2 {
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 1px;
          }
        }
      }
    }
    .school2 {
      >.p1 {
        font-size: 30px;
        font-weight: bold;
        color: #333333;
        text-align: center;
        padding: 50px 0 20px;
      }
      >.p2 {
        font-size: 16px;
        color: #333333;
        text-align: center;
        padding: 0 0 25px;
      }
      .school2Active {
        li {
          width: 267px;
        }
      }
      >ul {
        width: 1200px;
        height: 465px;
        margin: 0 auto;
        display: flex;
        border-left: 1px solid #e5e5e5;
        .liActive {
          width: 399px;
          background: #fff;
          padding: 45px 45px 20px;
          .img1 {
            float: left;
            margin: 7px 20px 0 0;
          }
          .p1,.p2 {
            line-height: 24px;
            margin: 0 0;
            text-align: left;
          }
          .img2div {
            height: 350px;
            line-height: 350px;
            animation: img2Animation 0.2s linear;
          }
          @keyframes img2Animation {
            from {
              transform: translateY(-100px);
            }
            to {
              transform: translateY(0);
            }
          }
        }
        .liDead {
          .img2div {
            animation: img2Dead 0.2s linear;
          }
          @keyframes img2Dead {
            from {
              transform: translateY(100px);
            }
            to {
              transform: translateY(0);
            }
          }
        }
        li {
          width: 300px;
          height: 465px;
          box-sizing: border-box;
          border: 1px solid #e5e5e5;
          border-left: 0;
          text-align: center;
          background: url('../../assets/products/product6/icon-school.png') right top no-repeat;
          .img1 {
            height: 30px;
            margin: 60px auto 0;
            text-align: center;
          }
          .p1 {
            margin: 30px 0px 35px 0px;
            color: #333333;
            font-size: 18px;
          }
          .p2 {
            margin: 0 0 20px;
            font-size: 14px;
            color: #666666;
          }
          .img2div {
            width: 100%;
            height: 240px;
            line-height: 240px;
            .img2 {
              max-width: 100%;
              max-height: 65%;
              vertical-align: middle;
            }
          }
        }
      }
      >a {
        display: block;
        margin: 40px auto 90px;
        width: 118px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        border-radius: 5px;
        border: 1px solid @themeColor;
        color: @themeColor;
        font-size: 14px;
        transition: all 0.5s;
      }
      >a:hover {
        background-color: @themeColor;
        color: #fff;
      }
    }
    >p {
      color: #333333;
      font-size: 2.5em;
      font-weight: bold;
      padding: 45px 0 20px;
      text-align: center;
    }
  }
</style>
