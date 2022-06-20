<template>
  <div class="box">
    <header>
      <img src="@/assets/products/product4/banner.png" alt="img">
      <div class="top">
        <div class="top-left">
          <img src="@/assets/products/product4/logo.png" alt="img">
          <a href="https://marketing.bokecc.com/">获得直播</a>
          <a href="https://www.huodexueyuan.com/">获得学院</a>
          <a href="https://kt.bokecc.com/hdclass">获得课堂</a>
        </div>
        <div class="top-right">
          <img src="@/assets/products/product4/icon_phone.png" alt="img">
          <p>400-886-0810</p>
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3&login=1" class="a1">机构登录</a>
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a2">免费试用</a>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="(item, index) in headerBottom" :key="index">
            <p class="p1">{{item.p1}}</p>
            <p class="p2">{{item.p2}}</p>
          </li>
        </ul>
      </div>
    </header>
    <div class="content1">
      <p>全场景企业培训闭环</p>
      <div class="div0">
        <div class="div1">
          <p class="p1">在线直播</p>
          <p class="p2">高清、稳定、高并发互动直播500+功能任意使用</p>
        </div>
        <div class="div2">
          <div class="left">
            <p class="p1">专属平台</p>
            <p class="p2">5分钟搭建企业定制企训平台</p>
          </div>
          <div class="right">
            <p class="p1">任务培训</p>
            <p class="p2">OMO混合式培训，培训、直播、 考试、测评、调研，签到等全类型任务</p>
          </div>
        </div>
        <div class="div2 div3">
          <div class="left">
            <p class="p1">课程资源</p>
            <p class="p2">课程1000+</p>
            <p class="p2">十大门类企业精品课程</p>
          </div>
          <div class="right">
            <p class="p1">考试测评</p>
            <p class="p2">考试+测评，以考促学、全面测评，精准识别岗位人才</p>
          </div>
        </div>
        <div class="div2 div4">
          <div class="left">
            <p class="p1">运营指导</p>
            <p class="p2">1对1专家运营指导</p>
            <p class="p2">快速落地实施企业培训</p>
          </div>
          <div class="right">
            <p class="p1">证书积分</p>
            <p class="p2">荣誉与关怀激励同行，学习质量持续提升</p>
          </div>
        </div>
        <div class="div1 div5">
          <p class="p1">数据成果</p>
          <p class="p2">多维度全面展示企业培训数据和成功</p>
        </div>
      </div>
      <a href="https://admin.bokecc.com/register.bo?isPurchase=3">立即试用</a>
    </div>
    <div class="content2">
      <p>企业培训全场景服务</p>
      <ul>
        <li>
          <a href="#area1">
            <img src="@/assets/products/product4/icon_area1.png" alt="img">
            <span>OMO培训模式</span>
          </a>
        </li>
        <li>
          <a href="#area2">
            <img src="@/assets/products/product4/icon_area2.png" alt="img">
            <span>5分钟快速搭建</span>
          </a>
        </li>
        <li>
          <a href="#area3">
            <img src="@/assets/products/product4/icon_area3.png" alt="img">
            <span>考测一体</span>
          </a>
        </li>
        <li>
          <a href="#area4">
            <img src="@/assets/products/product4/icon_area4.png" alt="img">
            <span>精品课程</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content3 style1">
      <a id="area1"></a>
      <div class="inner">
        <div class="div1">
          <div class="left">
            <img src="@/assets/products/product4/icon_area1.png" alt="img">
            <span>OMO培训模式</span>
            <p>让企业培训更高效</p>
            <ul>
              <li>
                <img src="@/assets/products/product4/icon1.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon1_active.png" alt="img" class="img2">
                <p class="p1">线上课程丰富多样</p>
                <p class="p2">点播课、直播课、音频课、图文课，文档课程丰富多样</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon2.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon2_active.png" alt="img" class="img2">
                <p class="p1">组合式培训</p>
                <p class="p2">线上线下混合培训、课程、考试、调研、作业、资料等混合式任务</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon3.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon3_active.png" alt="img" class="img2">
                <p class="p1">线下高效互动</p>
                <p class="p2">扫码签到、分组话题、作业成绩，有效提升线下互动培训效果</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon4.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon4_active.png" alt="img" class="img2">
                <p class="p1">成果数据</p>
                <p class="p2">平台活跃数据、成果信息展示、荣誉证书排行等多维度全面展示企训成果</p>
              </li>
            </ul>
          </div>
          <div class="right">
            <img src="@/assets/products/product4/area1.png" alt="img">
          </div>
        </div>
        <div class="div2">
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a1">超长免费使用</a>
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a2">预约专家演示</a>
        </div>
      </div>
    </div>
    <div class="content3 style2">
      <a id="area2"></a>
      <div class="inner">
        <div class="div1">
          <div class="right">
            <img src="@/assets/products/product4/area2.png" alt="img">
          </div>
          <div class="left">
            <img src="@/assets/products/product4/icon_area2.png" alt="img">
            <span>5分钟快速搭建</span>
            <p>企业专属培训平台</p>
            <ul>
              <li>
                <img src="@/assets/products/product4/icon5.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon5_active.png" alt="img" class="img2">
                <p class="p1">专属域名</p>
                <p class="p2">企业专属半定制域名，品牌加持</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon6.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon6_active.png" alt="img" class="img2">
                <p class="p1">专属平台</p>
                <p class="p2">平台名、LOGO、ico、导航、banner自由定制，独特风格</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon7.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon7_active.png" alt="img" class="img2">
                <p class="p1">模块化平台</p>
                <p class="p2">课程、培训、考试、测评、社区、证书等全部独立模块化使用，便捷灵活</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon8.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon8_active.png" alt="img" class="img2">
                <p class="p1">一对一指导</p>
                <p class="p2">专家一对一指导，快速完成企业培训落地实施</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="div2">
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a1">超长免费使用</a>
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a2">预约专家演示</a>
        </div>
      </div>
    </div>
    <div class="content3 style1">
      <a id="area3"></a>
      <div class="inner">
        <div class="div1">
          <div class="left">
            <img src="@/assets/products/product4/icon_area3.png" alt="img">
            <span>考测一体</span>
            <p>快速定位企业人才</p>
            <ul>
              <li>
                <img src="@/assets/products/product4/icon9.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon9_active.png" alt="img" class="img2">
                <p class="p1">全题型题库</p>
                <p class="p2">支持各类型题目，可批量导入快速搭建企业题库</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon10.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon10_active.png" alt="img" class="img2">
                <p class="p1">智能组卷</p>
                <p class="p2">根据分数、标签、难易程度等多维度进行智能自动组卷，提升效率</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon11.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon11_active.png" alt="img" class="img2">
                <p class="p1">岗位评测</p>
                <p class="p2">岗位职业能力测评，快速定位企业隐藏人才</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon12.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon12_active.png" alt="img" class="img2">
                <p class="p1">测评报告</p>
                <p class="p2">自定生成测评报告，一键生成岗位能力模型</p>
              </li>
            </ul>
          </div>
          <div class="right">
            <img src="@/assets/products/product4/area3.png" alt="img">
          </div>
        </div>
        <div class="div2">
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a1">超长免费使用</a>
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a2">预约专家演示</a>
        </div>
      </div>
    </div>
    <div class="content3 style2">
      <a id="area4"></a>
      <div class="inner">
        <div class="div1">
          <div class="right">
            <img src="@/assets/products/product4/area4.png" alt="img">
          </div>
          <div class="left">
            <img src="@/assets/products/product4/icon_area4.png" alt="img">
            <span>精品课程</span>
            <p>快速完成企业知识竞赛</p>
            <ul>
              <li>
                <img src="@/assets/products/product4/icon13.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon13_active.png" alt="img" class="img2">
                <p class="p1">1000+门课程</p>
                <p class="p2">丰富课程内容，帮助企业快速完成知识库搭建</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon14.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon14_active.png" alt="img" class="img2">
                <p class="p1">10大类型</p>
                <p class="p2">10大各行业课程、职场能力、财务、营销、各行业等专业课程</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon15.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon15_active.png" alt="img" class="img2">
                <p class="p1">精品企业课程</p>
                <p class="p2">各类型精品课程内容，行业精品</p>
              </li>
              <li>
                <img src="@/assets/products/product4/icon16.png" alt="img" class="img1">
                <img src="@/assets/products/product4/icon16_active.png" alt="img" class="img2">
                <p class="p1">行业金牌讲师</p>
                <p class="p2">金牌讲师倾力打造，助力企业优质培训</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="div2">
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a1">超长免费使用</a>
          <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a2">预约专家演示</a>
        </div>
      </div>
    </div>
    <div class="content4">
      <p>产品优势</p>
      <ul>
        <li v-for="(item, index) in content4" :key="index">
          <img :src="item.img" alt="img">
          <p class="p1">{{item.p1}}</p>
          <p class="p2">{{item.p2}}</p>
          <p class="p2">{{item.p3}}</p>
        </li>
      </ul>
      <a href="https://admin.bokecc.com/register.bo?isPurchase=3">立即试用</a>
    </div>
    <div class="content5">
      <p><span>140000+</span>企业的选择</p>
      <div class="logos">
        <img src="@/assets/products/product4/roll_mask.png" alt="img" class="img1">
        <img src="@/assets/products/product4/roll_mask.png" alt="img" class="img2">
        <ul>
          <li class="slideSlow">
            <img src="@/assets/products/product4/custom1.png" alt="img">
            <img src="@/assets/products/product4/custom1.png" alt="img">
          </li>
          <li class="slideQuick">
            <img src="@/assets/products/product4/custom2.png" alt="img">
            <img src="@/assets/products/product4/custom2.png" alt="img">
          </li>
          <li class="slideSlow">
            <img src="@/assets/products/product4/custom3.png" alt="img">
            <img src="@/assets/products/product4/custom3.png" alt="img">
          </li>
          <li class="slideQuick">
            <img src="@/assets/products/product4/custom4.png" alt="img">
            <img src="@/assets/products/product4/custom4.png" alt="img">
          </li>
        </ul>
      </div>
    </div>
    <div class="content6">
      <p class="p1">与企业一起成长</p>
      <p class="p2">现在注册，立享超长免费试用</p>
      <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a1">超长免费试用</a>
      <a href="https://admin.bokecc.com/register.bo?isPurchase=3" class="a2">预约专家演示</a>
    </div>
    <ProductFooter></ProductFooter>
  </div>
</template>

<script>
import ProductFooter from '@/components/products/ProductFooter.vue'

export default {
  data () {
    return {
      headerBottom: [
        { p1: '企业培训', p2: '专业培训，高效成长' },
        { p1: '丰富易用', p2: '全场景企业培训' },
        { p1: '快速搭建', p2: '5分钟搭建定制平台' },
        { p1: '全终端体验', p2: 'PC · APP · H5' },
        { p1: '售后服务', p2: '专业 · 实时 · 口碑' }
      ],
      content4: [
        {
          img: require('@/assets/products/product4/product1.png'),
          p1: '快速便捷',
          p2: '5分钟完成平台搭建',
          p3: '快速展开企业培训工作'
        },
        {
          img: require('@/assets/products/product4/product2.png'),
          p1: '场景丰富',
          p2: '搭建、培训、成果、数据',
          p3: '运营、课程等企业培训全场景支持'
        },
        {
          img: require('@/assets/products/product4/product3.png'),
          p1: '专属定制',
          p2: '专属域名、专属站点',
          p3: '搭建企业专属培训平台'
        },
        {
          img: require('@/assets/products/product4/product4.png'),
          p1: '自由灵活',
          p2: '模块化产品设计',
          p3: '企业培训从未如此自由灵活'
        },
        {
          img: require('@/assets/products/product4/product5.png'),
          p1: '课程丰富',
          p2: '1000+门课，10大类型企业',
          p3: '竞品课程，帮助企业解决内容难题'
        },
        {
          img: require('@/assets/products/product4/product6.png'),
          p1: '专业售后',
          p2: '16年1.4万家企业客户',
          p3: '服务经验，专业及时'
        }
      ]
    }
  },
  components: {
    ProductFooter
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  .box {
    width: 100%;
    min-width: 982px;
    overflow: hidden;
    header {
      background: @themeColor;
      position: relative;
      >img {
        width: 100%;
      }
      .top,.bottom {
        position: absolute;
        left: 0;
        right: 0;
      }
      .top {
        top: 0;
        width: 75%;
        margin: 0 auto;
        display: flex;
        height: 5rem;
        justify-content: space-between;
        .top-left {
          display: flex;
          align-items: center;
          img {
            height: 55%;
          }
          a {
            color: #fff;
            font-size: 1.5rem;
            padding: 0 0 0 1.875rem;
          }
        }
        .top-right {
          display: flex;
          align-items: center;
          img {
            height: 35%;
            padding: 0 5px;
          }
          p {
            font-size: 1.5rem;
            color: #fff;
          }
          .a1,.a2 {
            font-size: 1.25rem;
            color: #fff;
            display: block;
            height: 5rem;
            line-height: 5rem;
            padding: 0 2rem;
          }
          .a2 {
            font-weight: bold;
            color: @themeColor;
            background: #fff;
          }
        }
      }
      .bottom {
        bottom: 0;
        text-align: center;
        background: #ff7619;
        ul {
          width: 75%;
          height: 7rem;
          margin: 0 auto;
          display: flex;
          li {
            width: 20%;
            color: #fff;
            .p1 {
              font-size: 1.875rem;
              padding: 1.5rem 0 0.625rem;
            }
            .p2 {
              font-size: 1rem;
            }
          }
        }
      }
    }
    .content1 {
      padding: 3.75rem 0;
      >p {
        font-size: 3.125rem;
        text-align: center;
        padding: 0 0 3.75rem;
      }
      .div0 {
        background: url('../../assets/products/product4/ring_bg.png') center center no-repeat;
        background-size: auto 93%;
        .p1 {
          font-size: 1.875rem;
          line-height: 2.8125rem;
          color: @themeColor;
        }
        .p2 {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
        .div1 {
          width: 18.75rem;
          height: 8.25rem;
          padding: 0 0 0 15.75rem;
          margin: 0 auto;
        }
        .div2 {
          width: 90rem;
          height: 8.25rem;
          margin: 2rem auto 0;
          display: flex;
          .left,.right {
            width: 50%;
            box-sizing: border-box;
          }
          .left {
            text-align: right;
            padding: 0 19rem 0 0;
          }
          .right {
            padding: 0 0 0 19rem;
          }
        }
        .div3 {
          margin: 2rem auto 0;
          .left {
            padding: 0 25.5rem 0 0;
          }
          .right {
            padding: 0 0 0 25.5rem;
          }
        }
        .div4 {
          margin: 4rem auto 1rem;
          .right {
            padding: 0 5rem 0 19rem;
          }
        }
        .div5 {
          margin: 0rem auto 0;
        }
      }
      >a {
        display: block;
        width: 14.0625rem;
        height: 4.375rem;
        line-height: 4.375rem;
        color: #fff;
        font-size: 1.5rem;
        background: @themeColor;
        margin: 4rem auto 2rem;
        text-align: center;
      }
    }
    .content2 {
      background: #fff7f2;
      >p {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        padding: 6.5625rem 0 0;
      }
      ul {
        padding: 4.6875rem 0 0;
        display: flex;
        justify-content: center;
        li {
          width: 19.5rem;
          height: 8.3125rem;
          box-sizing: border-box;
          margin: 0 0.9375rem;
          padding: 2.5rem 1.875rem;
          background: #fff;
          text-align: center;
          img {
            height: 100%;
            padding: 0 1.25rem 0 0;
          }
          span {
            font-size: 1.5rem;
            font-weight: bold;
            color: #000000;
            line-height: 3.125rem;
            vertical-align: top;
          }
        }
      }
    }
    .style1 {
      background: #fff7f2;
    }
    .style2 {
      li:hover {
        background: #f6f8ff !important;
      }
    }
    .content3 {
      padding: 4.125rem 0 4.125rem;
      .inner {
        width: 75%;
        margin: 0 auto;
        .div1 {
          display: flex;
          justify-content: space-between;
          .left {
            width: 35%;
            >img {
              height: 2.5rem;
              padding-right: 1.25rem;
            }
            >span {
              font-size: 1.875rem;
              font-weight: bold;
              line-height: 2.5rem;
              vertical-align: top;
            }
            >p {
              font-size: 1.5rem;
              line-height: 1.875rem;
              color: #666f80;
              padding-left: 3.75rem;
            }
            >ul {
              margin: 2.375rem 0 0;
              li:hover {
                background: #fff1ed;
                .img1 {
                  display: none;
                }
                .img2 {
                  display: block;
                }
              }
              li {
                padding: 0.9375rem 2.1875rem 0 0.9375rem;
                cursor: pointer;
                img {
                  height: 1.875rem;
                  float: left;
                  padding-right: 0.9375rem;
                }
                .img2 {
                  display: none;
                }
                .p1 {
                  padding: 0 0 0.5rem 0;
                  font-size: 1.25rem;
                  line-height: 1.875rem;
                }
                .p2 {
                  padding: 0 0 1.5rem 2.8125rem;
                  font-size: 0.875rem;
                  line-height: 1.875rem;
                  color: #666666;
                }
              }
            }
          }
          .right {
            width: 55%;
            img {
              width: 100%;
              padding: 2rem 0 0;
            }
          }
        }
        .div2 {
          display: flex;
          justify-content: center;
          a {
            display: inline-block;
            width: 14.0625rem;
            height: 4.375rem;
            font-size: 1.5rem;
            line-height: 4.375rem;
            text-align: center;
            border: 1px solid @themeColor;
            margin: 2.125rem 0.625rem 0;
          }
          .a1 {
            color: @themeColor;
          }
          .a2 {
            color: #fff;
            background: linear-gradient(#ff4700, #ff6a00);
          }
        }
      }
    }
    .content4 {
      background: #fff7f2;
      padding: 3.75rem 0;
      >p {
        font-size: 2.25rem;
        font-weight: bold;
        text-align: center;
      }
      >ul {
        width: 75%;
        margin: 2.625rem auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 32%;
          background: #fff;
          padding: 1.875rem 0 2.4375rem;
          margin: 0.625rem 0;
          border: 1px solid #dfdfdf;
          border-radius: 1.25rem;
          text-align: center;
          >img {
            width: 40%;
          }
          .p1 {
            font-size: 1.125rem;
            padding: 1.125rem 0 0.5rem;
          }
          .p2 {
            font-size: 0.75rem;
            line-height: 1.5rem;
            color: #999;
          }
        }
      }
      >a {
        display: block;
        margin: 0 auto;
        font-size: 1.5rem;
        width: 10.75rem;
        height: 3.625rem;
        line-height: 3.625rem;
        text-align: center;
        color: #fff;
        background: linear-gradient(#ff4700, #ff6a00);
      }
    }
    .content5 {
      padding: 0 0 3.125rem;
      >p {
        font-size: 1.875rem;
        font-weight: bold;
        padding: 3.75rem 0 2.625rem;
        text-align: center;
        span {
          color: @themeColor;
        }
      }
      .logos {
        width: 75%;
        margin: 0 auto;
        position: relative;
        >img {
          z-index: 9;
          height: 28.75rem;
          position: absolute;
          top: 0;
        }
        .img1 {
          left: 0;
        }
        .img2 {
          right: 0;
          transform: rotate(180deg);
        }
        ul {
          overflow: hidden;
          li {
            width: 200%;
            display: flex;
            img {
              width: 50%;
            }
          }
          .slideSlow {
            animation: slideSlow 60s linear infinite;
          }
          .slideQuick {
            animation: slideQuick 40s linear infinite;
          }
          @keyframes slideSlow {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          @keyframes slideQuick {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        }
      }
    }
    .content6 {
      text-align: center;
      padding: 0 0 6rem;
      background: url('../../assets/products/product4/grow.png') center top no-repeat;
      background-size: 100% 100%;
      p {
        color: #fff;
        font-weight: bold;
      }
      .p1 {
        font-size: 3rem;
        padding: 6rem 0 4.5rem;
      }
      .p2 {
        font-size: 2.375rem;
        padding: 0 0 6rem;
      }
      a {
        display: inline-block;
        margin: 0 0.625rem;
        width: 14.0625rem;
        height: 4.375rem;
        line-height: 4.375rem;
        border: 0.0625rem solid #fff;
        font-size: 1.375rem;
        font-weight: bold;
      }
      .a1 {
        color: #fff;
      }
      .a2 {
        color: @themeColor;
        background: #fff;
      }
    }
  }
</style>
