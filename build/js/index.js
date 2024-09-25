const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.documentElement.style.setProperty('--js-header-height', headerHeight + "px");
//console.log("Высота хедера " + headerHeight + " пикселей");

$(document).ready(function () {
  let partnersSlider = new Swiper(".partners-slider", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 60,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      768: {
        spaceBetween: 100,
      },
    }
  });

 // модалка 


 $('.modal-toggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('modal-open');
  $('.modal').toggleClass('is-visible');
});


// якоря
  $("a[href*='#']").on("click", function(e) {
    e.preventDefault();
    var anchor = $(this);
    var target = $(anchor.attr('href'));
    
    if (target.length) {
        var offsetTop = target.offset().top - 100;
        
        // Анимация скролла
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 777);
    }
    return false;
});

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var link = $(this).attr('href');
    var el = $(document).find(link);
    
    if (el.length) {
        var offsetTop = el.eq(0).offset().top - 100;
        
        // Анимация скролла
        $('html, body').animate({
            scrollTop: offsetTop
        }, 1000, 'linear');
    }
    return false;
});


});







