import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { name: '产品', link: 'http://localhost:8080/class/80' },
      { name: '云直播', link: 'http://localhost:8080/class/80', description: '企业级视频直播平台' },
      { name: '云点播', link: 'http://localhost:8080/class/67', description: '安全稳定云点播平台' },
      { name: '云课堂', link: 'http://localhost:8080/class/81', description: '专注在线云课堂' },
      { name: '获得学院', link: 'http://localhost:8080/class/589', description: '企业数字化学习平台' },
      { name: '获得直播', link: 'http://localhost:8080/class/590', description: '企业营销获客直播首选' },
      { name: '网校系统', link: 'http://localhost:8080/class/82', description: '助力企业机构线上转型' },
      { name: '云加速', link: 'http://localhost:8080/class/83', description: '提供视频应用加速服务' }
    ],
    industrys: [
      { name: '行业方案', link: 'https://www.bokecc.com/class/423' },
      { name: '教育行业', link: 'https://www.bokecc.com/class/84', description: '大幅提升教学效果' },
      { name: '金融行业', link: 'https://www.bokecc.com/class/427', description: '赋能金融行业转型' },
      { name: '健康医疗', link: 'https://www.bokecc.com/class/428', description: '打通医疗业务闭环' },
      { name: '政府企业', link: 'https://www.bokecc.com/class/429', description: '助力政企数字化转型' },
      { name: '互联网', link: 'https://www.bokecc.com/class/430', description: '助推行业开拓线上版图' }
    ],
    scenes: [
      { name: '场景方案', link: 'https://www.bokecc.com/class/424' },
      { name: '在线课堂', link: 'https://www.bokecc.com/class/431', description: '快速搭建在线教学平台' },
      { name: '活动直播', link: 'https://www.bokecc.com/class/432', description: '引流变现，实现业绩增长' },
      { name: '在线网校', link: 'https://www.bokecc.com/class/433', description: '搭建独立品牌的在线招生与学习平台' },
      { name: '企业培训', link: 'https://www.bokecc.com/class/434', description: '降本增效，创造培训价值' },
      { name: '视频会议', link: 'https://www.bokecc.com/class/435', description: '让互动沟通零距离' }
    ],
    industryCase: [
      { name: '教育行业', link: 'https://www.bokecc.com/class/475' },
      { name: '金融行业', link: 'https://www.bokecc.com/class/476' },
      { name: '健康医疗', link: 'https://www.bokecc.com/class/477' },
      { name: '政府企业', link: 'https://www.bokecc.com/class/478' },
      { name: '互联网', link: 'https://www.bokecc.com/class/479' }
    ],
    resourceCenter: [
      { name: '行业前沿', link: 'https://www.bokecc.com/class/415' },
      { name: '产品上新', link: 'https://www.bokecc.com/class/416' }
    ],
    about: [
      { name: '关于获得', link: 'https://www.bokecc.com/class/6' },
      { name: '获得简介', link: 'https://www.bokecc.com/class/8' },
      { name: '渠道合作', link: 'https://www.bokecc.com/class/557' },
      { name: '企业动态', link: 'https://www.bokecc.com/class/418' },
      { name: '招贤纳士', link: 'https://www.bokecc.com/class/419' },
      { name: '联系获得', link: 'https://www.bokecc.com/class/10' },
      { name: '技术资质', link: 'https://www.bokecc.com/class/469' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
