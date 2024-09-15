
(function () {

  $(function () {
    // 延时执行焦点图动画
    $("#alloyCarousel .item").addClass('done');

    // 设置头部交互动效
    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop();
      scrollTop > 0
        ? $('body > .header').addClass('scrolled')
        : $('body > .header').removeClass('scrolled');
    })
  })

})()



//点击切换背景颜色
let bg = document.querySelector('h1')
let b = document.querySelector('body')




let flag = true
bg.addEventListener('click', function () {

  if (flag) {
    let color = ['#ffffff', '#26282c']

    localStorage.setItem('bgcolor', JSON.stringify(color))
    setTimeout(() => {
      location.reload()
    }, 1000);
    flag = false


  } else {

    let color = ['black', '#ffffff',]

    localStorage.setItem('bgcolor', JSON.stringify(color))
    setTimeout(() => {
      location.reload()
    }, 1000);
    flag = true
  }
})
let colors = JSON.parse(localStorage.getItem('bgcolor')) || []



b.style.color = colors[0]
b.style.background = colors[1]
