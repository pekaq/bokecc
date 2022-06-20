<template>
  <div>
    <div class="box1" :class="getBackgroundImg()">
      <div class="inner">
        <div class="left">
          <div>
            <slot name="leftArticle"></slot>
            <a href="https://admin.bokecc.com/register.bo?utm_uri=https://www.bokecc.com/class/80" :class="{aHover: select === 0}">免费试用</a>
            <a href="javascript:;" :class="{aHover: select === 1}" @mouseenter="elHover()" @mouseleave="elLeave()">在线咨询</a>
          </div>
        </div>
        <div class="right">
          <slot name="rightImg"></slot>
        </div>
      </div>
    </div>
    <div class="box2">
      <a :href="item.link" v-for="(item, index) in products" :key="index" :class="{box2Active: box2Index === index}">
        <p>{{item.name}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: this.$store.state.products.slice(1),
      box2Index: this.currentActive,
      select: 0
    }
  },
  props: [
    'currentActive'
  ],
  methods: {
    getBackgroundImg () {
      switch (this.currentActive) {
        case 0: return ['currentBackground0']
        case 1: return ['currentBackground1']
        case 2: return ['currentBackground2']
        case 5: return ['currentBackground5']
        case 6: return ['currentBackground6']
      }
    },
    elHover () {
      this.select = 1
    },
    elLeave () {
      this.select = 0
    }
  }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  div {
    .currentBackground0 {
      background: url('../../assets/products/product1/attr-80-img2.jpg') no-repeat;
    }
    .currentBackground1 {
      background: url('../../assets/products/product2/attr-67-img2.jpg') no-repeat;
    }
    .currentBackground2 {
      background: url('../../assets/products/product3/attr-81-img2.jpg') no-repeat;
    }
    .currentBackground5 {
      background: url('../../assets/products/product6/attr-82-img2.jpg') no-repeat;
    }
    .currentBackground6 {
      background: url('../../assets/products/product7/attr-83-img2.jpg') no-repeat;
    }
    .box1 {
      background-size: 100% 100%;
      @media screen and (min-width:1240px) {
        .inner {
          height: 477px;
        }
      }
      @media screen and (max-width:1240px) {
        .inner {
          height: 367px;
          .left div {
            bottom: 55px !important;
          }
        }
      }
      .inner {
        width: 1150px;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        .left {
          width: 57%;
          position: relative;
          div {
            position: absolute;
            bottom: 145px;
            animation: leftArticle 0.5s linear;
            .p1 {
              font-size: 30px;
              font-weight: bold;
              letter-spacing: 3px;
              padding-bottom: 10px;
            }
            .p2 {
              color: #666;
              font-size: 16px;
              line-height: 36px;
            }
            a {
              display: inline-block;
              font-size: 20px;
              box-shadow: 0px 0px 10px 2px #f8e8e8;
              width: 180px;
              height: 53px;
              line-height: 53px;
              text-align: center;
              transition: all 0.5s;
              border: 1px solid #dfdfe4;
              color: #666666;
              background-color: #fff;
              margin: 50px 30px 0 0;
            }
            .aHover {
              border: 1px solid @themeColor;
              color: #fff;
              background-color: @themeColor;
            }
          }
          @keyframes leftArticle {
            from {
              transform: scale(0);
            }
            to {
              transform: scale(1);
            }
          }
        }
        .right {
          width: 43%;
          box-sizing: border-box;
          padding: 55px 0;
          animation: imgAnimation .5s linear;
          img {
            height: 100%;
          }
        }
        @keyframes imgAnimation {
          from {
            transform: translateY(250px);
          }
          to {
            transform: translateY(0);
          }
        }
      }
    }
    .box2 {
      display: flex;
      text-align: center;
      width: 100%;
      height: 80px;
      border: 1px solid #d2d2d2;
      border-right: 0;
      box-sizing: border-box;
      a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 80px;
        border-right: 1px solid #d2d2d2;
        flex: 1;
        box-sizing: border-box;
        transition: all 0.2s;
        color: #666666;
        p {
          font-size: 18px;
        }
      }
      a:hover {
        color: @themeColor;
        background-color: #eeeeee;
      }
      .box2Active {
        color: @themeColor;
        background-color: #eeeeee;
      }
    }
  }
</style>
