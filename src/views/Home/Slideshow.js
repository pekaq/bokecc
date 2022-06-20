export default function Slideshow () {
  window.onload = function () {
    const slide = document.getElementById('slide')
    const imgs = slide.getElementsByTagName('div')[0].getElementsByTagName('img')
    const spans = slide.getElementsByTagName('p')[0].getElementsByTagName('span')
    const animation0 = document.getElementById('animation0')
    const animation1 = document.getElementById('animation1')
    const animation2 = document.getElementById('animation2')
    const animationArr = [animation0, animation1, animation2]
    let n = 0
    let slideLeft = -1
    let hideEl = null
    // 自适应填充高度函数
    function slideFitHeight () {
      const h = imgs[0].offsetHeight
      const w = imgs[0].offsetWidth
      // 不全部设定位置，第一次轮播出现白色背景
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.left = w * (i - n) + 'px'
      }
      slide.style.height = h + 'px'
    }
    // 左右滑动动画处理函数
    function handleAnimation (hideEl, showEl, width, slideLeft) {
      hideEl.style.left = width * slideLeft + 'px'
      showEl.style.display = 'block'
      showEl.style.animation = 'slideAnimation 0.5s linear'
      setTimeout(() => {
        hideEl.style.display = 'none'
        hideEl.style.left = '0'
      }, 1000)
    }
    // 轮播图方法
    function autoPlay () {
      const w = imgs[0].offsetWidth
      n++
      // 设置轮播图位置
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.transition = 'left 1s'
        imgs[i].style.left = w * (i - n) + 'px'
      }
      // 轮播图复位
      if (n >= imgs.length - 1) {
        setTimeout(() => {
          for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.transition = 'left 0s'
            imgs[i].style.left = w * i + 'px'
          }
        }, 1000)
        n = 0
      }
      // 设置轮播图对应焦点
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.backgroundColor = '#fff'
      }
      spans[n].style.backgroundColor = '#fd6e20'
      // animation动画重新播放
      switch (n) {
        case 0:
          // 辨别自动轮播和手动轮播
          if (hideEl === null) {
            // 自动轮播
            hideEl = animation2
          }
          handleAnimation(hideEl, animation0, w, slideLeft)
          break
        case 1:
          if (hideEl === null) {
            hideEl = animation0
          }
          handleAnimation(hideEl, animation1, w, slideLeft)
          break
        case 2:
          if (hideEl === null) {
            hideEl = animation1
          }
          handleAnimation(hideEl, animation2, w, slideLeft)
          break
      }
      // 复位隐藏元素和左滑属性
      hideEl = null
      slideLeft = -1
    }
    // 初始化轮播图高度
    slideFitHeight()
    // 设置定时器
    let slideTimer = setInterval(autoPlay, 4000)
    // 轮播图对应焦点点击处理
    slide.getElementsByTagName('p')[0].onclick = function (e) {
      e = e || window.event
      if (e.target.nodeName === 'SPAN') {
        // console.log(e.target.getAttribute('index'))
        const index = e.target.getAttribute('index')
        if (index > n) {
          console.log('左滑')
          slideLeft = -1
        } else if (index < n) {
          console.log('右滑')
          slideLeft = 1
        }
        hideEl = animationArr[n]
        n = index - 1
        // 清除原定时器
        clearInterval(slideTimer)
        // 更新点击动画展示
        autoPlay()
        // 重置定时器
        slideTimer = setInterval(autoPlay, 4000)
      }
    }
    // animation动画结束后清除
    animationArr.forEach(item => {
      item.addEventListener('animationend', function () {
        item.style.animation = ''
      })
    })
    // 浏览器窗口尺寸变化时更新轮播图高度
    window.onresize = function () {
      slideFitHeight()
    }
  }
}
