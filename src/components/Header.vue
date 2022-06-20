<template>
  <header>
    <div class="nav">
      <h1>
        <a href="http://localhost:8080/">
          <img src="@/assets/logo/logo6.png" alt="抱歉，图片丢失了！">
        </a>
      </h1>
      <ul>
        <li v-for="(item, index) in navs" :key="item.name" @mouseenter="navHover(index)" @mouseleave="navLeave()" :class="{active: currentIndex == index}">
          <a :href="item.link">{{item.name}}</a>
        </li>
      </ul>
      <div class="user">
        <a href="https://admin.bokecc.com/register.bo" target="_blank" rel="noopener noreferrer" class="free">免费试用</a>
        <a href="https://admin.bokecc.com/login.bo" target="_blank" rel="noopener noreferrer" class="login">用户登录</a>
        <a href="javascript:;">400-993-9696</a>
      </div>
      <div class="nav1" :class="{isShow1: currentIndex === 1}" @mouseenter="selectsHover(1)" @mouseleave="selectsLeave()">
        <a :href="item.link" v-for="item in products" :key="item.name">
          <p>{{item.name}}</p>
          <p>{{item.description}}</p>
        </a>
      </div>
      <div class="nav2" :class="{isShow2: currentIndex === 2}" @mouseenter="selectsHover(2)" @mouseleave="selectsLeave()">
        <div class="industry">
          <p>行业解决方案</p>
          <a :href="item.link" v-for="item in industrys" :key="item.name">
            <p>{{item.name}}</p>
            <p>{{item.description}}</p>
          </a>
        </div>
        <div class="scene">
          <p>场景解决方案</p>
          <a :href="item.link" v-for="item in scenes" :key="item.name">
            <p>{{item.name}}</p>
            <p>{{item.description}}</p>
          </a>
        </div>
      </div>
      <div class="nav3" :class="{isShow3: currentIndex === 3}" @mouseenter="selectsHover(3)" @mouseleave="selectsLeave()">
        <a :href="item.link" v-for="item in industryCase" :key="item.name">
          <p>{{item.name}}</p>
        </a>
      </div>
      <div class="nav6" :class="{isShow6: currentIndex === 6}" @mouseenter="selectsHover(6)" @mouseleave="selectsLeave()">
        <a :href="item.link" v-for="item in resourceCenter" :key="item.name">
          <p>{{item.name}}</p>
        </a>
      </div>
      <div class="nav7" :class="{isShow7: currentIndex === 7}" @mouseenter="selectsHover(7)" @mouseleave="selectsLeave()">
        <a :href="item.link" v-for="item in about" :key="item.name">
          <p>{{item.name}}</p>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        { name: '首页', link: 'http://localhost:8080/' },
        { name: '产品', link: 'http://localhost:8080/class/80' },
        { name: '解决方案', link: 'https://www.bokecc.com/class/2' },
        { name: '客户案例', link: 'https://www.bokecc.com/class/422' },
        { name: '服务支持', link: 'https://www.bokecc.com/class/555' },
        { name: '市场活动', link: 'https://www.bokecc.com/class/474' },
        { name: '资源中心', link: 'https://www.bokecc.com/class/406' },
        { name: '关于获得', link: 'https://www.bokecc.com/class/6' }
      ],
      currentIndex: null,
      products: this.$store.state.products.slice(1),
      industrys: this.$store.state.industrys.slice(1),
      scenes: this.$store.state.scenes.slice(1),
      industryCase: this.$store.state.industryCase,
      resourceCenter: this.$store.state.resourceCenter,
      about: this.$store.state.about.slice(1)
    }
  },
  methods: {
    navHover (index) {
      this.currentIndex = index
    },
    navLeave () {
      this.currentIndex = null
    },
    selectsHover (index) {
      this.currentIndex = index
    },
    selectsLeave () {
      this.currentIndex = null
    }
  },
  mounted () {
    (function () {
      const header = document.getElementsByTagName('header')[0]
      window.onscroll = function () {
        const windowScrollHeight = document.documentElement.scrollTop
        if (windowScrollHeight >= 300) {
          header.className = 'headerFixed'
        } else {
          header.className = ''
        }
      }
    })()
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  .active {
    border-bottom: 2px solid @themeColor;
  }
  .isShow1 {
    height: 560px !important;
  }
  .isShow2 {
    height: 440px !important;
  }
  .isShow3 {
    height: 250px !important;
  }
  .isShow6 {
    height: 100px !important;
  }
  .isShow7 {
    height: 300px !important;
  }
  header {
    width: 100%;
    min-width: 1240px;
    height: 70px;
    background-color: #fff;
    z-index: 999;
    .nav {
      width: 1240px;
      height: 70px;
      margin: 0 auto;
      position: relative;
      h1 {
        max-width: 145px;
        height: 60px;
        margin-left: 25px;
        line-height: 60px;
        float: left;
        img {
          max-width: 100%;
          max-height: 100%;
          vertical-align: middle;
        }
      }
      ul {
        display: inline-block;
        margin-left: 70px;
        li {
          height: 70px;
          line-height: 70px;
          padding: 0 12px;
          box-sizing: border-box;
          float: left;
          a {
            font-size: 16px;
            color: #000000;
          }
        }
      }
      .user {
        height: 70px;
        margin-right: 25px;
        float: right;
        >a {
          height: 34px;
          line-height: 34px;
          margin: 18px 13px;
          color: #000000;
          display: inline-block;
        }
        .free {
          padding: 0 15px 0 35px;
          border-radius: 17px;
          background: @themeColor url('../assets/logo/icon-gift1.png') no-repeat 13px 7px;
          color: #fff;
        }
        .login {
          height: 30px;
          line-height: 30px;
          margin: 20px 0;
          padding: 0 15px 0 35px;
          color: @themeColor;
          background: url('../assets/logo/icon-person1.png') no-repeat 13px 7px;
          border: 2px solid @themeColor;
          border-radius: 17px;
        }
      }
      .nav1,.nav2,.nav3,.nav6,.nav7 {
        z-index: 999;
      }
      .nav1 {
        width: 200px;
        height: 0;
        position: absolute;
        left: 265px;
        top: 70px;
        background-color: #fff;
        transition: height 0.5s;
        overflow: hidden;
        a {
          display: block;
          height: 79px;
          border-bottom: 1px solid #e5e5e5;
          margin: 0 15px;
          p:nth-child(1) {
            font-size: 16px;
            color: #000000;
            padding: 22px 0 10px 18px;
          }
          p:nth-child(2) {
            font-size: 14px;
            color: #666666;
            padding-left: 18px;
          }
        }
        a:hover p {
          color: @themeColor;
        }
      }
      .nav2 {
        width: 520px;
        height: 0;
        transition: height 0.5s;
        overflow: hidden;
        position: absolute;
        left: 335px;
        top: 70px;
        display: flex;
        box-sizing: border-box;
        .industry,.scene {
          background-color: #fff;
          >p {
            font-size: 16px;
            line-height: 24px;
          }
          a {
            display: block;
            height: 79px;
            border-bottom: 1px solid #e5e5e5;
            margin: 0 40px;
            p:nth-child(1) {
              font-size: 16px;
              color: #000000;
              padding: 22px 0 10px 25px;
            }
            p:nth-child(2) {
              font-size: 12px;
              color: #666666;
              padding-left: 25px;
            }
          }
          a:hover p {
            color: @themeColor;
          }
        }
        .industry {
          width: 240px;
          >p {
            background: url('../assets/logo/attr-423-icon.png') 30px 16px no-repeat;
            padding: 15px 0 0 62px;
          }
        }
        .scene {
          width: 280px;
          >p {
            background: url('../assets/logo/attr-424-icon.png') 10px 16px no-repeat;
            padding: 15px 0 0 42px;
          }
          a {
            margin: 0 40px 0 20px;
          }
        }
      }
      .nav3,.nav6,.nav7 {
        width: 120px;
        height: 0px;
        overflow: hidden;
        background-color: #fff;
        position: absolute;
        top: 70px;
        left: 425px;
        transition: height 0.5s;
        a {
          display: block;
          height: 49px;
          line-height: 49px;
          padding-left: 20px;
          margin: 0 10px;
          color: #000000;
          font-size: 16px;
          border-bottom: 1px solid #e5e5e5;
        }
        a:hover p {
          color: @themeColor;
        }
      }
      .nav6 {
        left: 685px;
      }
      .nav7 {
        left: 775px;
      }
    }
  }
  .headerFixed {
    position: fixed;
    top: 0;
    border-bottom: 1px solid @themeColor;
  }
</style>
