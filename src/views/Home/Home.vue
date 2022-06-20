<template>
  <div class="home">
    <!-- 页眉 -->
    <Header></Header>
    <!-- 侧边栏 -->
    <RightFixed></RightFixed>
    <!-- 轮播图 -->
    <div class="slideshow" id="slide">
      <div class="imgBox">
        <img :src="item" alt="抱歉，图片找不到了！" v-for="(item, index) in banners" :key="index">
      </div>
      <p><span index="0"></span><span index="1"></span><span index="2"></span></p>
      <div class="slideImg0" id="animation0">
        <div class="inner">
          <div class="left">
            <div>
              <p>云视频技术+一站式直播解决方案</p>
              <p>助力企业<span>数字化转型</span></p>
              <p>专注视频云服务<span>16</span>载，用户覆盖全行业</p>
              <p>在线教育 在线金融 在线医疗 活动直播 企业培训 视频会议</p>
              <button><a href="https://admin.bokecc.com/register.bo" target="_blank" rel="noopener noreferrer">免费试用</a></button>
              <button><a href="javascript:;">在线咨询</a></button>
            </div>
          </div>
          <div class="right">
            <img src="@/assets/logo/aaaa1.png" alt="抱歉，图片丢失！">
          </div>
        </div>
      </div>
      <div class="slideImg1" id="animation1">
        <div class="inner">
          <div>
            <p>更懂教育行业的智慧课堂</p>
            <p>全面助力教培机构实现OMO转型</p>
            <p>超过70%的教育标杆企业正在使用获得场景视频</p>
            <button><a href="https://admin.bokecc.com/register.bo" target="_blank" rel="noopener noreferrer">免费试用</a></button>
            <button><a href="javascript:;">在线咨询</a></button>
          </div>
        </div>
      </div>
      <div class="slideImg2" id="animation2">
        <div class="inner">
          <div>
            <p>获得场景视频合作伙伴<span>全国招募</span></p>
            <p>携手获得，共拓市场</p>
            <button><a href="https://www.bokecc.com/class/557">了解详情</a></button>
            <button><a href="javascript:;">合作咨询</a></button>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 内容顶部导航 -->
      <div class="content1">
        <div class="inner">
          <ul>
            <li v-for="(item, index) in content1" :key="index" :class="'li' + index">
              <span></span>
              <a :href="item.link">
                <p>{{item.p1}}</p>
                <p>{{item.p2}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 全行业覆盖，满足企业用户全场景化视频需求 -->
      <div class="content2">
        <p class="p1">全行业覆盖，满足企业用户全场景化视频需求</p>
        <p class="p2">
          <span :class="{spanActive: content2Active === 0}" @mouseenter="spanActive(0)">行业解决方案</span>
          <span :class="{spanActive: content2Active === 1}" @mouseenter="spanActive(1)">场景解决方案</span>
        </p>
        <div class="case">
          <ul :class="{ulActive: content2Active === 0}">
            <li v-for="(item, index) in industrys" :key="item.name" :class="'li'+index" @mouseenter="spanHover($event)" @mouseleave="spanLeave($event)">
              <a :href="item.link">
                <p class="p1"><span></span></p>
                <p class="p2">{{item.name}}</p>
                <p class="p3">{{content2[0][index].p1}}</p>
                <p class="p3">{{content2[0][index].p2}}</p>
                <p class="p4">详细了解</p>
              </a>
            </li>
          </ul>
          <ul :class="{ulActive: content2Active === 1}">
            <li v-for="(item, index) in scenes" :key="item.name" :class="'li'+index" @mouseenter="spanHover($event)" @mouseleave="spanLeave($event)">
              <a :href="item.link">
                <p class="p1"><span></span></p>
                <p class="p2">{{item.name}}</p>
                <p class="p3">{{content2[1][index].p1}}</p>
                <p class="p3">{{content2[1][index].p2}}</p>
                <p class="p4">详细了解</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 七大视频服务产品，提供全方位技术支持 -->
      <div class="content3">
        <p>七大视频服务产品，提供全方位技术支持</p>
        <div class="box1">
          <ul id="box1Ul">
            <li v-for="(item, index) in content3.navs" :key="index" :class="{navActive: currentNav === index}" @mouseenter="box1Actice(index, $event)">
              <span class="backgroundImg"></span><span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="box2">
          <div :class="{applyActive: currentNav === 0}">
            <div class="top">
              <div class="left">
                <img src="@/assets/content3/attr-80-img.png" alt="云直播">
              </div>
              <div class="right">
                <p class="p1">搭建专属直播间</p>
                <p class="p2">打造企业级视频直播平台，提供全行业“直播+”解决方案</p>
                <div class="items">
                  <p>适用场景:</p>
                  <ul>
                    <li v-for="(item, index) in content3.apply1" :key="index">{{item}}</li>
                  </ul>
                </div>
                <div class="attrs">
                  <ul>
                    <li v-for="(item, index) in content3.apply1Attr" :key="index">
                      <p class="p1"><span :class="'apply1AttrIcon'+index"></span></p>
                      <p class="p2">{{item}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom">
              <button>
                <a href="https://admin.bokecc.com/register.bo">免费试用</a>
              </button>
              <button>
                <a href="https://www.bokecc.com/class/80">产品详情</a>
              </button>
            </div>
          </div>
          <div :class="{applyActive: currentNav === 1}">
            <div class="top">
              <div class="left">
                <img src="@/assets/content3/attr-67-img.png" alt="云直播">
              </div>
              <div class="right">
                <p class="p1">让视频管理更便捷</p>
                <p class="p2">搭建安全稳定视频点播平台，极致视频播放体验</p>
                <div class="items">
                  <p>适用场景:</p>
                  <ul>
                    <li v-for="(item, index) in content3.apply2" :key="index">{{item}}</li>
                  </ul>
                </div>
                <div class="attrs">
                  <ul>
                    <li v-for="(item, index) in content3.apply2Attr" :key="index">
                      <p class="p1"><span :class="'apply2AttrIcon'+index"></span></p>
                      <p class="p2">{{item}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom">
              <button>
                <a href="https://admin.bokecc.com/register.bo">免费试用</a>
              </button>
              <button>
                <a href="https://www.bokecc.com/class/67">产品详情</a>
              </button>
            </div>
          </div>
          <div :class="{applyActive: currentNav === 2}">
            <div class="top">
              <div class="left">
                <img src="@/assets/content3/attr-81-img.png" alt="云课堂">
              </div>
              <div class="right">
                <p class="p1">打造教学轻课堂</p>
                <p class="p2">全场景实时互动云课堂，真实还原线下教学场景</p>
                <div class="items">
                  <p>适用场景:</p>
                  <ul>
                    <li v-for="(item, index) in content3.apply3" :key="index">{{item}}</li>
                  </ul>
                </div>
                <div class="attrs">
                  <ul>
                    <li v-for="(item, index) in content3.apply3Attr" :key="index">
                      <p class="p1"><span :class="'apply3AttrIcon'+index"></span></p>
                      <p class="p2">{{item}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom">
              <button>
                <a href="https://admin.bokecc.com/register.bo">免费试用</a>
              </button>
              <button>
                <a href="https://www.bokecc.com/class/81">产品详情</a>
              </button>
            </div>
          </div>
          <div :class="{applyActive: currentNav === 3}">
            <div class="top">
              <div class="left">
                <img src="@/assets/content3/attr-589-img.png" alt="云直播">
              </div>
              <div class="right">
                <p class="p1">企业专属数字化学习平台</p>
                <p class="p2">一键搭建企业专属数字化学习平台，全流程全场景企训服务</p>
                <div class="items">
                  <p>适用场景:</p>
                  <ul>
                    <li v-for="(item, index) in content3.apply4" :key="index">{{item}}</li>
                  </ul>
                </div>
                <div class="attrs">
                  <ul>
                    <li v-for="(item, index) in content3.apply4Attr" :key="index">
                      <p class="p1"><span :class="'apply4AttrIcon'+index"></span></p>
                      <p class="p2">{{item}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom">
              <button>
                <a href="https://admin.bokecc.com/register.bo">免费试用</a>
              </button>
              <button>
                <a href="https://www.bokecc.com/class/589">产品详情</a>
              </button>
            </div>
          </div>
          <div :class="{applyActive: currentNav === 4}">
            <div class="top">
              <div class="left">
                <img src="@/assets/content3/attr-590-img.png" alt="云直播">
              </div>
              <div class="right">
                <p class="p1">一站式企业直播解决方案</p>
                <p class="p2">为企业提供一站式直播服务，多场景直播营销解决方案</p>
                <div class="items">
                  <p>适用场景:</p>
                  <ul>
                    <li v-for="(item, index) in content3.apply5" :key="index">{{item}}</li>
                  </ul>
                </div>
                <div class="attrs">
                  <ul>
                    <li v-for="(item, index) in content3.apply5Attr" :key="index">
                      <p class="p1"><span :class="'apply5AttrIcon'+index"></span></p>
                      <p class="p2">{{item}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom">
              <button>
                <a href="https://admin.bokecc.com/register.bo">免费试用</a>
              </button>
              <button>
                <a href="https://www.bokecc.com/class/590">产品详情</a>
              </button>
            </div>
          </div>
          <div :class="{applyActive: currentNav === 5}">
            <div class="top">
              <div class="left">
                <img src="@/assets/content3/attr-82-img.png" alt="云直播">
              </div>
              <div class="right">
                <p class="p1">打造线上教学系统</p>
                <p class="p2">零技术门槛搭建一站式网校平台，助力机构快速实现线下到线上的转型</p>
                <div class="items">
                  <p>适用场景:</p>
                  <ul>
                    <li v-for="(item, index) in content3.apply6" :key="index">{{item}}</li>
                  </ul>
                </div>
                <div class="attrs">
                  <ul>
                    <li v-for="(item, index) in content3.apply6Attr" :key="index">
                      <p class="p1"><span :class="'apply6AttrIcon'+index"></span></p>
                      <p class="p2">{{item}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom">
              <button>
                <a href="https://admin.bokecc.com/register.bo">免费试用</a>
              </button>
              <button>
                <a href="https://www.bokecc.com/class/82">产品详情</a>
              </button>
            </div>
          </div>
          <div :class="{applyActive: currentNav === 6}">
            <div class="top">
              <div class="left">
                <img src="@/assets/content3/attr-83-img.png" alt="云直播">
              </div>
              <div class="right">
                <p class="p1">让视频播放更顺畅</p>
                <p class="p2">全球首推带AI的智能CDN加速服务，保障视频播放清晰流畅</p>
                <div class="items">
                  <p>适用场景:</p>
                  <ul>
                    <li v-for="(item, index) in content3.apply7" :key="index">{{item}}</li>
                  </ul>
                </div>
                <div class="attrs">
                  <ul>
                    <li v-for="(item, index) in content3.apply7Attr" :key="index">
                      <p class="p1"><span :class="'apply7AttrIcon'+index"></span></p>
                      <p class="p2">{{item}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom">
              <button>
                <a href="https://admin.bokecc.com/register.bo">免费试用</a>
              </button>
              <button>
                <a href="https://www.bokecc.com/class/83">产品详情</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- content4 -->
      <div class="content4">
        <ul>
          <li>
            <img src="@/assets/content4/icon1[1].png" alt="">
            <p>系统稳定可靠</p>
          </li>
          <li>
            <img src="@/assets/content4/icon2.png" alt="">
            <p>安全体系保障</p>
          </li>
          <li>
            <img src="@/assets/content4/icon3.png" alt="">
            <p>学员隐私保护</p>
          </li>
          <li>
            <img src="@/assets/content4/icon4.png" alt="">
            <p>独立部署深度定制</p>
          </li>
        </ul>
      </div>
      <!-- 携手获得场景视频，促进共赢与发展 -->
      <div class="content5">
        <p>携手获得场景视频，促进共赢与发展</p>
        <ul>
          <li @mouseenter="content5LiActive(0)" @mouseleave="content5LiLeave()">
            <div class="digest">
              <p class="p1">教育行业</p>
              <div><img src="@/assets/content5/attr-475-icon.png" alt=""></div>
              <p class="p2">协助新东方开拓线上版图，实现线上线下融合，为品牌实现了降本增效</p>
            </div>
            <div class="detail">
              <div><img src="@/assets/content5/attr-475-icon1.png" alt=""></div>
              <p class="p1">徐健 新东方集团/副总裁</p>
              <p class="p2">“产品高效稳定，服务周到及时。与获得场景视频合作的两年里，切实地感受到了合作伙伴对工作的执着精神。希望获得场景视频继续提供高质量的产品，开拓更广阔的市场”</p>
              <a href="https://www.bokecc.com/class/475">查看案例</a>
            </div>
          </li>
          <li @mouseenter="content5LiActive(1)" @mouseleave="content5LiLeave()">
            <div class="digest">
              <p class="p1">金融行业</p>
              <div><img src="@/assets/content5/attr-476-icon.png" alt=""></div>
              <p class="p2">一体化平台解决方案，极大降低了点掌财经的使用成本和人力成本</p>
            </div>
            <div class="detail">
              <div><img src="@/assets/content5/attr-476-icon1.jpg" alt=""></div>
              <p class="p1">顾远洋 点掌传媒/CTO</p>
              <p class="p2">“牛金大学是点掌传媒财经教育重点产品，通过获得场景视频一站式解决方案，集成了个性化的互动教学产品。多年来，获得场景视频给我们提供了稳定的服务，为我们打下了坚实的业务基础，为获得场景视频点赞”</p>
              <a href="https://www.bokecc.com/class/476">查看案例</a>
            </div>
          </li>
          <li @mouseenter="content5LiActive(2)" @mouseleave="content5LiLeave()">
            <div class="digest">
              <p class="p1">健康医疗</p>
              <div><img src="@/assets/content5/attr-477-icon.png" alt=""></div>
              <p class="p2">实现了华医网对互联网健康教育的促进，帮助提升了大众健康水平</p>
            </div>
            <div class="detail">
              <div><img src="@/assets/content5/attr-477-icon1.jpg" alt=""></div>
              <p class="p1">蓝葛亮 华医网/运营总监</p>
              <p class="p2">“通过获得场景视频云点播等视频应用解决方案，帮助提升各级医疗记否卫生人员服务水平，促进加强大众健康意识。与获得场景视频合作多年，配合默契，相互成就”</p>
              <a href="https://www.bokecc.com/class/477">查看案例</a>
            </div>
          </li>
        </ul>
        <div class="relatedImg">
          <ul :class="{active: content5Active === 0}">
            <li v-for="(item, index) in content5RelatedImg1" :key="index">
              <img :src="item" alt="抱歉，图片弄丢了">
            </li>
          </ul>
          <ul :class="{active: content5Active === 1}">
            <li v-for="(item, index) in content5RelatedImg2" :key="index">
              <img :src="item" alt="抱歉，图片弄丢了">
            </li>
          </ul>
          <ul :class="{active: content5Active === 2}">
            <li v-for="(item, index) in content5RelatedImg3" :key="index">
              <img :src="item" alt="抱歉，图片弄丢了">
            </li>
          </ul>
        </div>
        <a href="https://admin.bokecc.com/register.bo?https://www.bokecc.com/&utm_uri=undefined">免费试用</a>
        <a href="https://www.bokecc.com/class/422">查看案例</a>
      </div>
      <!-- 最新活动资讯，掌握活动信息 -->
      <div class="content6">
        <p>最新活动资讯，掌握获得信息</p>
        <div class="inner">
          <div class="left">
            <p>市场活动<span><a href="https://www.bokecc.com/class/474">更多&nbsp;&nbsp;&nbsp;+</a></span></p>
            <ul>
              <li v-for="(item, index) in content6[0]" :key="index">
                <a href="javascript:;">{{item}}</a>
              </li>
            </ul>
          </div>
          <div class="right">
            <p>前沿资讯<span><a href="https://www.bokecc.com/class/415">更多&nbsp;&nbsp;&nbsp;+</a></span></p>
            <ul>
              <li v-for="(item, index) in content6[1]" :key="index">
                <a href="javascript:;">{{item}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 获得场景视频，助力企业打造专属直播品牌 -->
      <div class="content7">
        <p class="p1">获得场景视频，助力企业打造专属直播品牌</p>
        <p class="p2">解决方案、技术搭建等相关问题，可致电咨询400-993-9696</p>
        <a href="https://admin.bokecc.com/register.bo?https://www.bokecc.com/&utm_uri=https://www.bokecc.com/">免费试用</a>
      </div>
    </div>
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import RightFixed from '@/components/RightFixed.vue'
import Slideshow from './Slideshow'

export default {
  name: 'Home',
  data () {
    return {
      banners: ['aa1[1].jpg', 'banner3.jpg', 'banner5[1].jpg', 'aa1[1].jpg'].map(item => require('@/assets/logo/' + item)),
      content1: [
        { p1: '市场活动', p2: '最新活动，新鲜送达', link: 'https://www.bokecc.com/class/474' },
        { p1: '客户案例', p2: '覆盖全行业，全场景', link: 'https://www.bokecc.com/class/422' },
        { p1: '企业动态', p2: '一键了解企业资讯', link: 'https://www.bokecc.com/class/418' },
        { p1: '产品上新', p2: '功能迭代，产品升级', link: 'https://www.bokecc.com/class/416' }
      ],
      industrys: this.$store.state.industrys.slice(1),
      scenes: this.$store.state.scenes.slice(1),
      content2: [
        [
          { p1: '1000+互动功能实现全场景线上模式', p2: '全面提升教学效果' },
          { p1: '搭建金融行业在线培训与直播平台', p2: '助力企业数字化转型' },
          { p1: '从远程问诊到在线科研交流', p2: '打造医疗服务新模式' },
          { p1: '快速搭建视频会议与在线学习平台', p2: '大幅提升政务能力' },
          { p1: '打造品牌传播+引流增长新平台', p2: '打通线上获客渠道' }
        ],
        [
          { p1: '提供海量教学场景及丰富课堂互动', p2: '提升线上教学体验' },
          { p1: '一地发起直播异地同步观看', p2: '实现数字营销闭环' },
          { p1: '零技术门槛实现线下到线上转型', p2: '打造定制化品牌系统' },
          { p1: '搭建企业轻量级在线培训系统', p2: '降低成本提升培训质量' },
          { p1: '一站式解决方案', p2: '改善沟通环境提升会议效率' }
        ]
      ],
      content2Active: 0,
      content3: {
        navs: ['云直播', '云点播', '云课堂', '获得学院', '获得直播', '网校系统', '云加速'],
        apply1: ['在线教育', '大会直播', '商务直播', '金融直播', '医疗直播', '政企培训'],
        apply2: ['在线教育', '企业培训', '视频网站', '知识付费', '电商营销', '短视频'],
        apply3: ['1v1私教', '小班课', '大班课', '双师课堂', '视频会议', '企业培训'],
        apply4: ['企业培训', '人社培训', '企业大学', '职业培训', '技能培训', '数字化学习'],
        apply5: ['商务直播', '会议直播', '企业培训', '营销直播', '年会直播', '新品发布'],
        apply6: ['K12教育', '课程学习', '职业培训', '平台招生', '企业内训', '线下转线上'],
        apply7: ['网络游戏', '电商直播', '政务直播', '政策发布', '大盘行情', '企业大会'],
        apply1Attr: ['聊天问答', '视频连麦', '白板文档', '桌面共享', '录制回放', '签到抽奖'],
        apply2Attr: ['视频上传', '多点存储', '视频加密', '音频识别', '分发加速', '数据统计'],
        apply3Attr: ['多人互动', '超低延时', '高可用性', '全网覆盖', '多终端支持', '多角色支持'],
        apply4Attr: ['海量课程', '互动制课', 'OMO混合培训', '超清直播', '视频加密', '专属门户'],
        apply5Attr: ['高效稳定', '营销获客', '调研问卷', '红包抽奖', '多地互动', '数据分析'],
        apply6Attr: ['门户独立', '网站装修', '直播教学', '点播视频', '教务排课', '学员管理'],
        apply7Attr: ['ISP全覆盖', '堡垒防护源站', '全应用SSL支持', '协议深层优化', '页面智能优化']
      },
      currentNav: 0,
      content5RelatedImg1: ['客户7.png', '客户10.png', '客户12.png', '客户3.png', '客户13.png', '客户5.png'].map(item => require('@/assets/content5/' + item)),
      content5RelatedImg2: ['中国平安[1].png', '中国人财[1].png', '太平洋保险[1].png', '泰康[1].png', '安邦保险.png', '点掌财经[1].png'].map(item => require('@/assets/content5/' + item)),
      content5RelatedImg3: ['1[3][2].png', '2[4][2].png', '3[1][1].png', '4[2][1].png', '5[2][1].png', '6[1][2].png'].map(item => require('@/assets/content5/' + item)),
      content5Active: 0,
      content6: []
    }
  },
  methods: {
    spanActive (index) {
      this.content2Active = index
    },
    isShow (index) {
      return this.content2Active === index
    },
    spanHover (e) {
      e = e || window.event
      const span = e.target.getElementsByTagName('p')[0].getElementsByTagName('span')[0]
      const h = span.offsetHeight
      span.style.backgroundPositionY = -h + 'px'
    },
    spanLeave (e) {
      e = e || window.event
      const span = e.target.getElementsByTagName('p')[0].getElementsByTagName('span')[0]
      span.style.backgroundPositionY = 0
    },
    box1Actice (index, e) {
      const previousNav = this.currentNav
      this.currentNav = index
      e = e || window.event
      const box1Span = e.target.getElementsByTagName('span')[0]
      const previousSpan = document.getElementById('box1Ul').getElementsByTagName('li')[previousNav].getElementsByTagName('span')[0]
      // 复位上一个span背景的初始位置
      previousSpan.style.backgroundPositionY = 0
      // 执行当前span过渡动画
      const h = box1Span.offsetHeight
      box1Span.style.backgroundPositionY = -h + 'px'
    },
    content5LiActive (index) {
      this.content5Active = index
    },
    content5LiLeave () {
      this.content5Active = 0
    }
  },
  created () {
    // 页面调用轮播图js
    Slideshow()
  },
  mounted () {
    // 页面挂载以后执行一次span过渡动画
    (function () {
      const span = document.getElementById('box1Ul').getElementsByTagName('span')[0]
      const h = span.offsetHeight
      span.style.backgroundPositionY = -h + 'px'
    })()
  },
  components: {
    Header,
    Footer,
    RightFixed
  }
}
</script>

<style lang="less">
  @themeColor: #fd6e20;
  .home {
    width: 100%;
    min-width: 1240px;
    .slideshow {
      width: 100%;
      position: relative;
      overflow: hidden;
      .imgBox {
        width: 100%;
        position: relative;
        img {
          width: 100%;
          position: absolute;
          transition: left 1s;
        }
      }
      >p {
        width: 100%;
        bottom: 30px;
        text-align: center;
        position: absolute;
        z-index: 99;
        span {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 5px 5px;
          background-color: #fff;
          cursor: pointer;
        }
        span:first-child {
          background-color: @themeColor;
        }
      }
      .slideImg0,.slideImg1,.slideImg2 {
        z-index: 98;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: left 1s;
        .inner {
          width: 1100px;
          height: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          button {
            transition: width 0.5s;
            background-color: @themeColor;
            border: 1px solid @themeColor;
            margin-top: 35px;
            a {
              color: #fff;
            }
          }
          button:last-child {
            margin-left: 25px;
            background-color: #f4f5fa;
            border: 1px solid #cbcccf;
            a {
              color: #000000;
            }
          }
        }
      }
      @keyframes slideAnimation {
        from {
          transform: translateY(300px);
        }
        to {
          transform: translateY(0px);
        }
      }
      .slideImg0,.slideImg2 {
        @media screen and (max-width: 1240px) {
          .inner button {
            width: 130px;
            height: 36px;
            line-height: 36px;
            font-size: 16px;
          }
        }
        @media screen and (min-width: 1240px) {
          .inner button {
            width: 180px;
            height: 42px;
            line-height: 42px;
            font-size: 20px;
          }
        }
      }
      .slideImg1 {
        @media screen and (max-width: 1240px) {
          .inner button {
            width: 150px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
          }
        }
        @media screen and (min-width: 1240px) {
          .inner button {
            width: 190px;
            height: 52px;
            line-height: 52px;
            font-size: 20px;
          }
        }
      }
      .slideImg0 {
        animation: slideAnimation 0.5s linear;
        .inner {
          text-align: left;
          display: flex;
          .left {
            width: 50%;
            position: relative;
            >div {
              position: absolute;
              bottom: 70px;
              p {
                font-size: 14px;
                color: #666;
              }
              p:nth-child(1),p:nth-child(2) {
                font-size: 30px;
                line-height: 44px;
              }
              p:nth-child(2) span {
                color: @themeColor;
              }
              p:nth-child(3) {
                padding: 15px 0 10px 0;
                span {
                  font-size: 22px;
                }
              }
            }
          }
          .right {
            width: 50%;
            position: relative;
            img {
              max-width: 77%;
              max-height: 77%;
              position: absolute;
              left: 15%;
              bottom: 0;
            }
          }
        }
      }
      .slideImg1,.slideImg2 {
        display: none;
        .inner {
          position: relative;
          >div {
            position: absolute;
            bottom: 70px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
      .slideImg1 .inner {
        p {
          font-size: 16px;
          color: #666;
        }
        p:nth-child(1),p:nth-child(2) {
          font-size: 26px;
          line-height: 44px;
          letter-spacing: 3px;
          color: #242529;
        }
        p:nth-child(3) {
          padding-top: 10px;
        }
      }
      .slideImg2 .inner {
        p:nth-child(1) {
          line-height: 46px;
          font-size: 30px;
          letter-spacing: 3px;
          span {
            color: @themeColor;
          }
        }
        p:nth-child(2) {
          font-size: 18px;
          padding-top: 5px;
        }
        button {
          margin-top: 25px;
        }
      }
    }
    .content {
      width: 100%;
      .content1 {
        background-color: #eff0f6;
        .inner {
          width: 1200px;
          margin: 0 auto;
          ul {
            display: flex;
            li {
              width: 25%;
              box-sizing: border-box;
              padding: 25px 25px;
              span {
                width: 33px;
                float: left;
                padding-right: 5px;
                transition: all 0.5s;
              }
              a {
                p:nth-child(1) {
                  color: #000000;
                  font-size: 20px;
                  padding-bottom: 5px;
                }
                p:nth-child(2) {
                  font-size: 16px;
                  color: #666666;
                }
              }
            }
            li:hover {
              background-color: #f4f5fb;
            }
            .li0 span {
              height: 27px;
              background: url('../../assets/logo/attr-474-icon.png') 0 0 no-repeat;
            }
            .li0:hover span {
              background-position-y: -27px;
            }
            .li1 span {
              height: 28px;
              background: url('../../assets/logo/attr-422-icon.png') 0 0 no-repeat;
            }
            .li1:hover span {
              background-position-y: -28px;
            }
            .li2 span {
              height: 26px;
              background: url('../../assets/logo/attr-418-icon.png') 0 0 no-repeat;
            }
            .li2:hover span {
              background-position-y: -26px;
            }
            .li3 span {
              height: 29px;
              background: url('../../assets/logo/attr-416-icon.png') 0 0 no-repeat;
            }
            .li3:hover span {
              background-position-y: -29px;
            }
          }
        }
      }
      .content2 {
        text-align: center;
        overflow: hidden;
        >.p1 {
          font-size: 30px;
          color: #333333;
          margin: 65px 0 50px 0;
        }
        >.p2 {
          margin-bottom: 45px;
          font-size: 18px;
          color: #666666;
          span {
            margin: 0 40px;
            padding-bottom: 5px;
            border-bottom: 3px solid transparent;
            transition: all 1s;
          }
          .spanActive {
            border-bottom: 3px solid @themeColor;
          }
        }
        .case {
          width: 1200px;
          margin: 0 auto 45px;
          .ulActive {
            display: flex;
          }
          ul {
            display: none;
            li {
              width: 20%;
              padding: 10px 0 30px;
              a {
                display: block;
                .p1 {
                  width: 76px;
                  height: 90px;
                  margin-bottom: 18px;
                  display: inline-block;
                  background: url('../../assets/content2/icon-arrow2.png') no-repeat;
                  span {
                    display: inline-block;
                    transition: all 1s;
                  }
                }
                .p2 {
                  font-size: 18px;
                  color: #333333;
                  margin-bottom: 15px;
                }
                .p3 {
                  font-size: 14px;
                  color: #999999;
                  line-height: 20px;
                }
                .p4 {
                  font-size: 12px;
                  color: #666666;
                  margin-top: 30px;
                  background: url('../../assets/content2/icon-more.png') 155px 0 no-repeat;
                }
              }
            }
            li:hover {
              box-shadow: 0 0 2px 2px #f3f3f3;
              .p4 {
                color: @themeColor;
              }
            }
          }
          ul:nth-child(1) .li0 .p1 span {
            width: 36px;
            height: 30px;
            margin-top: 30px;
            background: url('../../assets/content2/attr-84-icon.png') no-repeat;
          }
          ul:nth-child(1) .li1 .p1 span {
            width: 36px;
            height: 35px;
            margin-top: 28px;
            background: url('../../assets/content2/attr-427-icon.png') no-repeat;
          }
          ul:nth-child(1) .li2 .p1 span {
            width: 35px;
            height: 32px;
            margin-top: 29px;
            background: url('../../assets/content2/attr-428-icon.png') no-repeat;
          }
          ul:nth-child(1) .li3 .p1 span {
            width: 37px;
            height: 32px;
            margin-top: 29px;
            background: url('../../assets/content2/attr-429-icon.png') no-repeat;
          }
          ul:nth-child(1) .li4 .p1 span {
            width: 35px;
            height: 35px;
            margin-top: 28px;
            background: url('../../assets/content2/attr-430-icon.png') no-repeat;
          }
          ul:nth-child(2) .li0 .p1 span {
            width: 39px;
            height: 32px;
            margin-top: 29px;
            background: url('../../assets/content2/attr-431-icon.png') no-repeat;
          }
          ul:nth-child(2) .li1 .p1 span {
            width: 35px;
            height: 34px;
            margin-top: 28px;
            background: url('../../assets/content2/attr-432-icon.png') no-repeat;
          }
          ul:nth-child(2) .li2 .p1 span {
            width: 35px;
            height: 35px;
            margin-top: 28px;
            background: url('../../assets/content2/attr-433-icon.png') no-repeat;
          }
          ul:nth-child(2) .li3 .p1 span {
            width: 37px;
            height: 36px;
            margin-top: 27px;
            background: url('../../assets/content2/attr-434-icon.png') no-repeat;
          }
          ul:nth-child(2) .li4 .p1 span {
            width: 35px;
            height: 34px;
            margin-top: 28px;
            background: url('../../assets/content2/attr-435-icon.png') no-repeat;
          }
        }
      }
      .content3 {
        position: relative;
        >p {
          font-size: 30px;
          line-height: 40px;
          margin-bottom: 55px;
          color: #333333;
          text-align: center;
        }
        @media screen and (min-width: 1240px) {
          >p {
            margin-bottom: 95px;
          }
          .box1 {
            position: absolute;
            top: 95px;
            left: 50%;
            transform: translateX(-50%);
          }
          .box2 {
            padding: 85px 0 37px !important;
          }
        }
        .box1 ul {
          display: flex;
          margin: 0 auto;
          border: 1px solid #e5e5e5;
          border-radius: 5px;
          background-color: #fff;
          li {
            width: 175px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 20px;
            color: #666666;
            cursor: pointer;
            transition: background-color 0.5s;
            span {
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
            }
            span:nth-child(1) {
              transition: all 0.5s;
            }
            span:nth-child(2) {
              vertical-align: top;
              margin-left: 10px;
            }
          }
          .navActive {
            color: #fff;
            background-color: @themeColor;
          }
          li:nth-child(1) .backgroundImg {
            width: 29px;
            height: 29px;
            background: url('../../assets/content3/attr-80-icon.png') no-repeat;
          }
          li:nth-child(2) .backgroundImg {
            width: 34px;
            height: 30px;
            background: url('../../assets/content3/attr-67-icon.png') no-repeat;
          }
          li:nth-child(3) .backgroundImg {
            width: 34px;
            height: 32px;
            background: url('../../assets/content3/attr-81-icon.png') no-repeat;
          }
          li:nth-child(4) .backgroundImg {
            width: 33px;
            height: 31px;
            background: url('../../assets/content3/attr-589-icon.png') no-repeat;
          }
          li:nth-child(5) .backgroundImg {
            width: 32px;
            height: 32px;
            background: url('../../assets/content3/attr-590-icon.png') no-repeat;
          }
          li:nth-child(6) .backgroundImg {
            width: 43px;
            height: 31px;
            background: url('../../assets/content3/attr-82-icon.png') no-repeat;
          }
          li:nth-child(7) .backgroundImg {
            width: 33px;
            height: 34px;
            background: url('../../assets/content3/attr-83-icon.png') no-repeat;
          }
        }
        .box2 {
          padding: 45px 0;
          background: url('../../assets/content3/indexbg.jpg') center top no-repeat;
          background-size: 100% 100%;
          .applyActive {
            display: block;
          }
          >div {
            display: none;
            width: 1200px;
            margin: 0 auto;
            .top {
              display: flex;
              .left {
                width: 480px;
                height: 350px;
                display: flex;
                justify-content: center;
                img {
                  max-width: 100%;
                  max-height: 100%;
                }
              }
              .right {
                width: 720px;
                box-sizing: border-box;
                padding: 10px 10px 10px 210px;
                >.p1 {
                  color: #333333;
                  font-size: 24px;
                }
                >.p2 {
                  color: #333333;
                  font-size: 16px;
                  margin: 20px 0 60px;
                }
                .items {
                  display: flex;
                  color: #999999;
                  margin-bottom: 60px;
                  p {
                    width: 15%;
                    font-size: 14px;
                  }
                  ul {
                    width: 66%;
                    li {
                      width: 33.33%;
                      box-sizing: border-box;
                      display: inline-block;
                      font-size: 16px;
                      padding: 0 0 5px 20px;
                      background: url('../../assets/content3/icon-arrow1.png') 6px 3px no-repeat;
                    }
                  }
                }
                .attrs ul {
                  display: flex;
                  li {
                    flex: 1;
                    text-align: center;
                    .p1 {
                      width: 36px;
                      height: 36px;
                      border-radius: 50%;
                      background-color: #fff;
                      display: inline-block;
                      margin-bottom: 20px;
                      box-sizing: border-box;
                      position: relative;
                      span {
                        width: 100%;
                        display: inline-block;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        transition: all 0.5s;
                      }
                    }
                    .p2 {
                      font-size: 12px;
                      color: #858585;
                    }
                  }
                  li:hover {
                    .p1 {
                      border: 1px solid @themeColor;
                      span {
                        background-position-y: bottom;
                      }
                    }
                    .p2 {
                      color: @themeColor;
                    }
                  }
                }
              }
            }
            .bottom {
              text-align: center;
              margin-top: 30px;
              button {
                border: 0;
                margin: 0 10px;
                a {
                  display: inline-block;
                  width: 120px;
                  height: 40px;
                  box-sizing: border-box;
                  line-height: 40px;
                  font-size: 12px;
                  border: 1px solid @themeColor;
                  border-radius: 5px;
                }
              }
              button:nth-child(1) a {
                color: #fff;
                background-color: @themeColor;
              }
              button:nth-child(2) a {
                color: @themeColor;
                background-color: #fff;
              }
            }
          }
          .apply1AttrIcon0 {
            height: 19.5px;
            background: url('../../assets/content3/icon-c1.png') center top no-repeat;
          }
          .apply1AttrIcon1 {
            height: 19px;
            background: url('../../assets/content3/icon-c2.png') center top no-repeat;
          }
          .apply1AttrIcon2 {
            height: 15px;
            background: url('../../assets/content3/icon-c3.png') center top no-repeat;
          }
          .apply1AttrIcon3 {
            height: 16px;
            background: url('../../assets/content3/icon-c4.png') center top no-repeat;
          }
          .apply1AttrIcon4 {
            height: 19px;
            background: url('../../assets/content3/icon-c5.png') center top no-repeat;
          }
          .apply1AttrIcon5 {
            height: 17px;
            background: url('../../assets/content3/icon-c6.png') center top no-repeat;
          }
          .apply2AttrIcon0 {
            height: 18.5px;
            background: url('../../assets/content3/icon-aaa1.png') center top no-repeat;
          }
          .apply2AttrIcon1 {
            height: 17px;
            background: url('../../assets/content3/icon-aaa2.png') center top no-repeat;
          }
          .apply2AttrIcon2 {
            height: 19px;
            background: url('../../assets/content3/icon-aaa3.png') center top no-repeat;
          }
          .apply2AttrIcon3 {
            height: 16px;
            background: url('../../assets/content3/icon-aaa4.png') center top no-repeat;
          }
          .apply2AttrIcon4 {
            height: 17px;
            background: url('../../assets/content3/icon-aaa5.png') center top no-repeat;
          }
          .apply2AttrIcon5 {
            height: 16px;
            background: url('../../assets/content3/icon-aaa6.png') center top no-repeat;
          }
          .apply3AttrIcon0 {
            height: 22px;
            background: url('../../assets/content3/icon-aaa7.png') center top no-repeat;
          }
          .apply3AttrIcon1 {
            height: 19px;
            background: url('../../assets/content3/icon-aaa8.png') center top no-repeat;
          }
          .apply3AttrIcon2 {
            height: 19px;
            background: url('../../assets/content3/icon-aaa9.png') center top no-repeat;
          }
          .apply3AttrIcon3 {
            height: 19px;
            background: url('../../assets/content3/icon-aaa10.png') center top no-repeat;
          }
          .apply3AttrIcon4 {
            height: 20px;
            background: url('../../assets/content3/icon-aaa11.png') center top no-repeat;
          }
          .apply3AttrIcon5 {
            height: 16px;
            background: url('../../assets/content3/icon-aaa12.png') center top no-repeat;
          }
          .apply4AttrIcon0 {
            height: 17px;
            background: url('../../assets/content3/icon1[2].png') center top no-repeat;
          }
          .apply4AttrIcon1 {
            height: 17px;
            background: url('../../assets/content3/icon2[1].png') center top no-repeat;
          }
          .apply4AttrIcon2 {
            height: 17px;
            background: url('../../assets/content3/icon3[1].png') center top no-repeat;
          }
          .apply4AttrIcon3 {
            height: 17px;
            background: url('../../assets/content3/icon4[1].png') center top no-repeat;
          }
          .apply4AttrIcon4 {
            height: 17px;
            background: url('../../assets/content3/icon5.png') center top no-repeat;
          }
          .apply4AttrIcon5 {
            height: 17px;
            background: url('../../assets/content3/icon6.png') center top no-repeat;
          }
          .apply5AttrIcon0 {
            height: 16px;
            background: url('../../assets/content3/icon7.png') center top no-repeat;
          }
          .apply5AttrIcon1 {
            height: 17px;
            background: url('../../assets/content3/icon8.png') center top no-repeat;
          }
          .apply5AttrIcon2 {
            height: 16px;
            background: url('../../assets/content3/icon9.png') center top no-repeat;
          }
          .apply5AttrIcon3 {
            height: 15px;
            background: url('../../assets/content3/icon10.png') center top no-repeat;
          }
          .apply5AttrIcon4 {
            height: 15px;
            background: url('../../assets/content3/icon11.png') center top no-repeat;
          }
          .apply5AttrIcon5 {
            height: 12px;
            background: url('../../assets/content3/icon12.png') center top no-repeat;
          }
          .apply6AttrIcon0 {
            height: 17px;
            background: url('../../assets/content3/icon-aaa18.png') center top no-repeat;
          }
          .apply6AttrIcon1 {
            height: 15px;
            background: url('../../assets/content3/icon-aaa19.png') center top no-repeat;
          }
          .apply6AttrIcon2 {
            height: 17px;
            background: url('../../assets/content3/icon-aaa20.png') center top no-repeat;
          }
          .apply6AttrIcon3 {
            height: 19px;
            background: url('../../assets/content3/icon-aaa21.png') center top no-repeat;
          }
          .apply6AttrIcon4 {
            height: 19px;
            background: url('../../assets/content3/icon-aaa22.png') center top no-repeat;
          }
          .apply6AttrIcon5 {
            height: 17px;
            background: url('../../assets/content3/icon-aaa23.png') center top no-repeat;
          }
          .apply7AttrIcon0 {
            height: 18px;
            background: url('../../assets/content3/icon-aaa13.png') center top no-repeat;
          }
          .apply7AttrIcon1 {
            height: 17px;
            background: url('../../assets/content3/icon-aaa14.png') center top no-repeat;
          }
          .apply7AttrIcon2 {
            height: 20px;
            background: url('../../assets/content3/icon-aaa15.png') center top no-repeat;
          }
          .apply7AttrIcon3 {
            height: 20px;
            background: url('../../assets/content3/icon-aaa16.png') center top no-repeat;
          }
          .apply7AttrIcon4 {
            height: 18px;
            background: url('../../assets/content3/icon-aaa17.png') center top no-repeat;
          }
        }
      }
      .content4 {
        border-bottom: 1px solid #e5e5e5;
        text-align: center;
        ul {
          width: 1240px;
          margin: 40px auto 30px;
          display: flex;
          li {
            flex: 1;
            p {
              font-size: 18px;
              color: #333333;
              padding: 15px 0;
            }
          }
        }
      }
      .content5 {
        margin: 90px 0 70px;
        text-align: center;
        >p {
          font-size: 30px;
          margin-bottom: 75px;
          text-align: center;
          color: #333333;
        }
        >ul {
          width: 1193px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          li {
            width: 371px;
            height: 393px;
            position: relative;
            .digest,.detail {
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              color: #fff;
              text-align: center;
              div {
                width: 85px;
                height: 85px;
                border-radius: 50%;
                background-color: #fff;
                position: relative;
                img {
                  max-width: 85%;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
              }
            }
            .digest {
              padding: 65px 55px;
              background-color: rgba(0,0,0,0.5);
              .p1 {
                font-size: 24px;
              }
              div {
                margin: 50px auto 40px;
              }
              .p2 {
                font-size: 14px;
                line-height: 20px;
              }
            }
            .detail {
              visibility: hidden;
              padding: 50px 55px 0;
              background-color: rgba(0,0,0,0.5);
              transition: background-color 0.5s;
              position: absolute;
              top: 0;
              div {
                margin: 0 auto;
                img {
                  border-radius: 50%;
                }
              }
              .p1 {
                font-size: 14px;
                padding: 15px 0 40px;
              }
              .p2 {
                font-size: 12px;
                line-height: 20px;
                text-align: left;
                transform: translateX(20px);
              }
              a {
                width: 110px;
                height: 39px;
                line-height: 39px;
                border: 1px solid #fff;
                border-radius: 30px;
                color: #fff;
                position: absolute;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
              }
            }
          }
          li:nth-child(1) {
            background: url('../../assets/content5/index1[2].jpg') no-repeat;
          }
          li:nth-child(2) {
            margin: 0 40px;
            background: url('../../assets/content5/index2[1].jpg') no-repeat;
          }
          li:nth-child(3) {
            background: url('../../assets/content5/index3[1].jpg') no-repeat;
          }
          li:hover {
            .digest {
              display: none;
            }
            .detail {
              visibility: visible;
              background-color: rgba(85,162,227, 0.5);
              .p2 {
                transform: translateX(0);
                transition: all 0.2s;
              }
            }
          }
        }
        .relatedImg {
          width: 1202px;
          height: 130px;
          margin: 45px auto 0;
          position: relative;
          ul {
            width: 100%;
            height: 128px;
            line-height: 128px;
            display: flex;
            border: 1px solid #e5e5e5;
            background-color: #fff;
            z-index: 0;
            text-align: center;
            position: absolute;
            li {
              flex: 1;
              img {
                max-width: 88%;
                max-height: 60px;
                vertical-align: middle;
              }
            }
          }
          .active {
            z-index: 1;
          }
        }
        >a {
          display: inline-block;
          width: 118px;
          height: 38px;
          line-height: 38px;
          margin: 30px 5px 0;
          box-shadow: 0px 3px 3px 1px #e2b09d;
          color: #fff;
          background-color: @themeColor;
          font-size: 12px;
          border: 1px solid @themeColor;
          border-radius: 5px;
        }
        >a:last-child {
          background-color: #fff;
          color: @themeColor;
        }
        >a:hover {
          font-weight: 700;
        }
      }
      .content6 {
        background-color: #f8f6f6;
        padding-bottom: 20px;
        >p {
          font-size: 30px;
          color: #333333;
          padding: 40px 0 75px;
          text-align: center;
        }
        .inner {
          width: 1220px;
          height: 255px;
          display: flex;
          box-sizing: border-box;
          padding: 0 25px 25px;
          margin: 0 auto;
          .left,.right {
            width: 575px;
            background-color: #fff;
            padding: 20px;
            border: 1px solid transparent;
            >p {
              font-size: 18px;
              color: #333333;
              padding-bottom: 20px;
              span a {
                float: right;
                color: #fff;
                background: @themeColor;
                width: 78px;
                height: 20px;
                border-radius: 30px;
                font-size: 12px;
                text-align: center;
                line-height: 20px;
              }
            }
            ul {
              li {
                padding: 0 0 10px 20px;
                line-height: 20px;
                background: url('../../assets/content3/icon-arrow1.png') 0px 5px no-repeat;
                a {
                  width: 100%;
                  font-size: 16px;
                  display: inline-block;
                  color: #a38585;
                }
                a:hover {
                  font-weight: 700;
                }
              }
            }
          }
          .left {
            margin-right: 20px;
          }
          .left:hover,.right:hover {
            border: 1px solid @themeColor;
          }
        }
      }
      .content7 {
        width: 100%;
        text-align: center;
        font-weight: bold;
        background: url('../../assets/logo/indexbg1.jpg') no-repeat;
        background-size: 100% 100%;
        >.p1 {
          color: #666666;
          font-size: 30px;
          margin: 0px 0px 22px 0px;
          padding: 80px 0px 0px 0px;
        }
        >.p2 {
          color: #999999;
          font-size: 18px;
        }
        >a {
          width: 156px;
          height: 40px;
          line-height: 40px;
          background: #fd6e21;
          display: block;
          border-radius: 5px;
          color: #fff;
          font-size: 16px;
          letter-spacing: 3px;
          margin: 45px auto 55px;
          transition: 0.5s all ease;
          box-shadow: 0px 3px 3px 1px #ffbfa6;
        }
        >a:hover {
          opacity: 0.5;
        }
      }
    }
  }
</style>
