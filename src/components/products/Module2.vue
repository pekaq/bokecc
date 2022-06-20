<template>
  <div>
    <slot name="title_slot"></slot>
    <ul id="module2Ul">
      <li v-for="(item, index) in templateImgArr" :key="index">
        <img :src="item" alt="img" :title="templateTextArr[index]">
        <p>{{templateTextArr[index]}}</p>
      </li>
    </ul>
    <button>了解更多应用场景</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      templateImgArr: this.imgArr,
      templateTextArr: this.textArr
    }
  },
  props: ['imgArr', 'textArr']
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  div {
    width: 1240px;
    border-bottom: 1px solid #eeeeee;
    margin: 0 auto;
    >p {
      font-size: 30px;
      color: #333333;
      text-align: center;
      padding: 80px 0 55px;
    }
    ul {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      li {
        position: relative;
        width: 226px;
        height: 144px;
        overflow: hidden;
        >img {
          width: 100%;
          height: 100%;
          transition: all 0.5s;
        }
        >p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 14px;
        }
      }
      li:hover {
        >img {
          transform: scale(1.25);
        }
      }
    }
    >button {
      width: 120px;
      height: 38px;
      color: @themeColor;
      border: 1px solid @themeColor;
      background-color: #fff;
      margin: 45px auto;
      display: block;
      cursor: pointer;
      transition: all 0.5s;
    }
    >button:hover {
      color: #fff;
      background-color: @themeColor;
    }
  }
</style>
