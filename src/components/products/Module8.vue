<template>
  <div class="box">
    <slot name="text_slot"></slot>
    <a href="https://admin.bokecc.com/register.bo?utm_uri=https://www.bokecc.com/class/80">申请免费试用</a>
  </div>
</template>

<style lang="less" scoped>
  @themeColor: #fd6e20;
  .box {
    width: 100%;
    height: 293px;
    background: url('../../assets/products/typebg1.jpg') no-repeat;
    background-size: 100% 100%;
    .p1 {
      letter-spacing: 17px;
      padding: 75px 0px 10px 0px;
      font-size: 30px;
      color: #333333;
      text-align: center;
    }
    .p2 {
      letter-spacing: 12px;
      text-align: center;
      font-size: 22px;
      color: #666666;
      padding: 0px 0px 50px 0px;
    }
    a {
      display: block;
      width: 118px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      background: @themeColor;
      border: 1px solid @themeColor;
      border-radius: 5px;
      margin: 0 auto;
      transition: all 0.5s;
    }
    a:hover {
      color: @themeColor;
      background: #fff;
    }
  }
</style>
