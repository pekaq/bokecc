<template>
  <main>
    <ul>
      <li v-for="(item, index) in templateMsgArr" :key="index" :class="{li2: index%2 === 1}" @mouseenter="liHover(index)" @mouseleave="liLeave()">
        <a :href="item.link">{{item.text}}</a>
      </li>
    </ul>
    <div>
      <p class="p1" ref="p1Position"></p>
      <p class="p2" :class="{p2Rotate: p2Bottom%2 === 1}" ref="p2Position"></p>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      templateMsgArr: this.msgArr,
      p2Bottom: null
    }
  },
  props: ['msgArr'],
  methods: {
    liHover (index) {
      if (index % 2 === 1) {
        this.p2Bottom = index
      }
      this.$refs.p1Position.style.display = 'block'
      this.$refs.p2Position.style.display = 'block'
      this.$refs.p1Position.style.left = index * 240 + 3 + 'px'
      this.$refs.p2Position.style.left = index * 240 + 'px'
    },
    liLeave () {
      this.p2Bottom = null
      this.$refs.p1Position.style.display = 'none'
      this.$refs.p2Position.style.display = 'none'
    }
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  main {
    width: 100%;
    height: 340px;
    background: url('../../assets/products/product1/product3.jpg') no-repeat;
    background-size: 100% 100%;
    position: relative;
    ul {
      width: 1200px;
      position: absolute;
      top: 145px;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      li {
        width: 240px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        position: relative;
        a {
          display: inline-block;
          padding-right: 20px;
          color: #fff;
          font-size: 16px;
        }
        a:before {
          content: '';
          display: block;
          width: 18px;
          height: 18px;
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          top: 45px;
          left: 111px;
        }
        a:hover {
          color: @themeColor;
          background: url('../../assets/products/product1/icon-arrow7.png') right center no-repeat;
        }
      }
      .li2 {
        transform: translateY(100px);
        a:before {
          top: -55px;
        }
      }
    }
    ul:after {
      content: "";
      z-index: -1;
      display: block;
      position: absolute;
      top: 53px;
      width: 100%;
      height: 3px;
      background: #fff;
    }
    >div {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      p {
        display: none;
        position: absolute;
      }
      .p1 {
        width: 227px;
        height: 4px;
        background: url('../../assets/products/product1/icon-slide2.png') no-repeat;
        top: 188px;
        left: 3px;
      }
      .p2 {
        width: 241px;
        height: 17px;
        background: url('../../assets/products/product1/icon-slide3.png') right top no-repeat;
        top: 163px;
        left: 0px;
      }
      .p2Rotate {
        transform: rotate(180deg);
        top: 199px;
        background-position-x: left;
      }
      .p1:after {
        content: '';
        display: block;
        z-index: 5;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: @themeColor;
        position: absolute;
        top: -2px;
        right: -13px;
      }
    }
  }
</style>
