<template>
  <main>
    <div class="box">
      <slot name="title_slot"></slot>
      <ul id="module5Ul">
        <li v-for="(item, index) in templateTextArr1" :key="index">
          <div>
            <img :src="templateImgArr[index]" alt="">
          </div>
          <p class="p1">{{item}}</p>
          <p class="p2">{{templateTextArr2[index]}}</p>
        </li>
      </ul>
      <a href="https://admin.bokecc.com/register.bo?utm_uri=https://www.bokecc.com/class/80">申请免费试用</a>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      templateImgArr: this.imgArr,
      templateTextArr1: this.textArr1,
      templateTextArr2: this.textArr2
    }
  },
  props: ['imgArr', 'textArr1', 'textArr2']
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  main {
    margin: 0 auto;
    width: 1240px;
    box-sizing: border-box;
    .box {
      padding: 70px 20px;
      >p {
        text-align: center;
        font-size: 2.5em;
        font-weight: bold;
        color: #333333;
        padding: 0 0 45px 0;
      }
      ul {
        text-align: center;
        height: 560px;
        li {
          width: 300px;
          height: 280px;
          float: left;
          div {
            margin: 0 auto 15px;
            width: 120px;
            height: 140px;
            background: url('../../assets/products/product1/icon-arrow8.png') center top no-repeat;
            position: relative;
            transition: all 1s;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          p {
            width: 255px;
            margin: 0 auto;
          }
          .p1 {
            font-size: 18px;
            color: #333333;
          }
          .p2 {
            font-size: 14px;
            color: #666666;
            line-height: 24px;
            padding-top: 20px;
          }
        }
        li:hover {
          div {
            transform: scale(1.2);
          }
        }
      }
      >a {
        display: block;
        margin: 20px auto 0;
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
  }
</style>
