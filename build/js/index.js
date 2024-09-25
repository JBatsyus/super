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
  
  

  // mob menu
  $('.humb').on('click', function () {
    $('.body').toggleClass('open-menu');
  });


  
  /// mask
  $(function () {
    $(".input-phone").mask("+7 (999) 999 99 99");
  });
  ///
});







