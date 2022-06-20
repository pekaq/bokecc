<template>
  <main>
    <div class="box">
      <div class="left">
        <slot name="article_slot"></slot>
        <slot name="div_slot"></slot>
        <a href="https://admin.bokecc.com/register.bo?utm_uri=https://www.bokecc.com/class/80">申请免费试用</a>
      </div>
      <div class="right">
        <slot name="img_slot"></slot>
      </div>
    </div>
  </main>
</template>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  main {
    background-color: #f9f9f9;
    .box {
      padding: 60px 0;
      display: flex;
      width: 1240px;
      margin: 0 auto;
      .left {
        width: 725px;
        box-sizing: border-box;
        padding: 40px 0 0 75px;
        .p1 {
          font-size: 30px;
          color: #333333;
          padding-bottom: 45px;
        }
        .p2 {
          font-size: 16px;
          color: #666;
          line-height: 30px;
          padding-bottom: 18px;
        }
        .p2:before {
          display: inline-block;
          content: "";
          width: 8px;
          height: 8px;
          line-height: 30px;
          vertical-align: top;
          transform: translateY(10px);
          margin-right: 20px;
          background: #bfbfbf;
        }
        .p3,.div1 {
          font-size: 16px;
          color: #666;
          line-height: 30px;
        }
        .p4 {
          font-size: 16px;
          color: #000;
          padding: 0 0 30px 0;
        }
        .divslot {
          height: 60px;
          padding: 35px 0;
          display: flex;
          .div1 {
            width: 100px;
            height: 60px;
            line-height: 30px;
            font-weight: bold;
          }
        }
        >a {
          color: @themeColor;
          font-size: 14px;
          font-weight: bold;
          padding: 15px 30px 0 0;
          transition: all 0.5s;
          background: url('../../assets/products/product1/icon-arrow7.png') right bottom no-repeat;
        }
        >a:hover {
          opacity: 0.5;
        }
      }
      .right {
        width: 407px;
        height: 406px;
        padding-left: 23px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
