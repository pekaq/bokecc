<template>
  <div id="sidebar">
    <ul>
      <li class="li0">
        <a href="https://admin.bokecc.com/register.bo?https://www.bokecc.com/&utm_uri=https://www.bokecc.com/" target="_blank" rel="noopener noreferrer">
          <span></span>
          <p>免费试用</p>
        </a>
      </li>
      <li class="li1">
        <a href="javascript:;">
          <span></span>
          <p>在线咨询</p>
        </a>
        <div>
          <img src="@/assets/logo/a1.jpg" alt="">
          <p class="p1">在线咨询</p>
          <p class="p2">专业顾问帮您解答疑问</p>
        </div>
      </li>
      <li class="li2">
        <a href="javascript:;">
          <span></span>
          <p>电话咨询</p>
        </a>
        <div>
          <p>400-993-9696</p>
        </div>
      </li>
      <li class="li3">
        <a href="javascript:;">
          <span></span>
          <p>微信咨询</p>
        </a>
        <div>
          <img src="@/assets/logo/产品咨询.jpg" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //   }
  // }
}
</script>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  #sidebar {
    width: 75px;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    border: 1px solid #d0d0d0;
    border-bottom: 0;
    background-color: #fff;
    text-align: center;
    ul {
      li {
        border-bottom: 1px solid #d0d0d0;
        position: relative;
        a {
          display: block;
          width: 100%;
          height: 80px;
          box-sizing: border-box;
          padding-top: 14px;
          color: #666666;
          position: relative;
          transition: all 0.5s;
          span {
            display: inline-block;
            width: 35px;
            position: absolute;
            top: 14px;
            left: 50%;
            transform: translate(-50%);
            transition: all 0.5s;
          }
          p {
            width: 100%;
            font-size: 12px;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%);
          }
        }
        div {
          position: absolute;
          left: 100px;
          top: 0;
          z-index: 998;
          transition: all 0.5s;
          box-shadow: 0px 0px 10px 3px #f0f1f6;
        }
        div:after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translate(0, -50%);
          border-width: 13px 0 13px 15px;
          border-color: transparent #fff;
          border-style: solid;
        }
      }
      li:hover {
        a {
          color: #fff;
          background-color: @themeColor;
          span {
            background-position-y: bottom;
          }
        }
      }
      .li0 {
        a span {
          height: 29px;
          background: url('../assets/logo/a-5.png') center top no-repeat;
        }
      }
      .li1 {
        a span {
          height: 33px;
          background: url('../assets/logo/a-2.png') center top no-repeat;
        }
        div {
          background-color: #fff;
          width: 230px;
          height: 65px;
          padding: 10px 10px 0;
          img {
            float: left;
            margin-right: 20px;
          }
          p {
            text-align: left;
            line-height: 20px;
          }
          .p1 {
            font-size: 16px;
            color: #333333;
            padding-top: 5px;
          }
          .p2 {
            font-size: 14px;
            color: #999999;
            padding-top: 5px;
          }
        }
      }
      .li1:hover {
        div {
          left: -270px;
        }
      }
      .li2 {
        a span {
          height: 32px;
          background: url('../assets/logo/a-3.png') center top no-repeat;
        }
        div {
          width: 165px;
          height: 65px;
          top: 7px;
          background-color: #fff;
          p {
            line-height: 65px;
            font-size: 18px;
          }
        }
      }
      .li2:hover {
        div {
          left: -185px;
        }
      }
      .li3 {
        a span {
          height: 32px;
          background: url('../assets/logo/a-4.png') center top no-repeat;
        }
        div {
          width: 100px;
          height: 100px;
          top: -7px;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
      .li3:hover {
        div {
          left: -120px;
        }
      }
    }
  }
</style>
