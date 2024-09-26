const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.documentElement.style.setProperty('--js-header-height', headerHeight + 'px');
//console.log("Высота хедера " + headerHeight + " пикселей");

$(document).ready(function() {
  let partnersSlider = new Swiper('.partners-slider', {
    slidesPerView: 'auto',
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
    },
  });

  // модалка

  $('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('modal-open');
    $('.modal').toggleClass('is-visible');
  });

  // якоря
  $("a[href*='#']").on('click', function(e) {
    e.preventDefault();
    var anchor = $(this);
    var target = $(anchor.attr('href'));

    if (target.length) {
      var offsetTop = target.offset().top - 100;

      // Анимация скролла
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: offsetTop,
          },
          777
        );
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
      $('html, body').animate(
        {
          scrollTop: offsetTop,
        },
        1000,
        'linear'
      );
    }
    return false;
  });

  // мобильное меню
  $('.menu-humb').on('click', function() {
    $(this).toggleClass('active');
    $('.menu-mob').toggleClass('active');
    $('.header-bottom .container').toggleClass('menu_active');
    $('.header-wrapper').toggleClass('bgk-hr');
    $('body').toggleClass('no-scroll');
  });

  // прокрутка к анкорам
  $('a.scroll-to').on('click', function(e) {
    e.preventDefault();
    let anchor = $(this).attr('href');
    if ($('.menu-humb').hasClass('active')) {
      $('body').removeClass('no-scroll');
      $('.header-bottom .container').removeClass('menu_active');
      $('.menu-mob').removeClass('active');
      $('.menu-mob').removeClass('active');
      $('.header-wrapper').removeClass('bgk-hr');
      setTimeout(() => {
        $('.menu-humb').removeClass('active');
      }, 700);
    }

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 150,
        },
        700
      );
  });




// Логика для отслеживания направления прокрутки
let lastScrollTop = 0;
let imageStar = document.querySelector('.image-star img');
let upImage = document.querySelector('.up-image img'); // Вторая картинка
let imageWrapper = document.querySelector('.relay-block__texture'); // Обертка для картинок
let isRotatedRight = false;  // Флаг для отслеживания состояния вращения image-star

// Обработчик скролла
function handleScroll() {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop && !isRotatedRight) {
    // Скроллим вниз
    imageStar.classList.add('rotate-right');
    imageStar.classList.remove('rotate-left');
    upImage.classList.add('rotate-up-right'); // Вращение up-image на -25 градусов
    upImage.classList.remove('rotate-up-left');
    isRotatedRight = true;
  } else if (currentScrollTop < lastScrollTop && isRotatedRight) {
    // Скроллим вверх
    imageStar.classList.add('rotate-left');
    imageStar.classList.remove('rotate-right');
    upImage.classList.add('rotate-up-left'); // Возврат up-image в исходное положение
    upImage.classList.remove('rotate-up-right');
    isRotatedRight = false;
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Запоминаем последнее значение скролла
}

// Сразу инициализируем обработчик скролла
window.addEventListener('scroll', handleScroll);

// Объединение логики hover для обертки картинок
imageWrapper.addEventListener('mouseover', function() {
  imageStar.classList.add('rotate-right'); // Вращение вправо при наведении
  upImage.classList.add('rotate-up-right'); // Вращение на -25 градусов при наведении

  // Убираем классы сразу же для возможности повторного срабатывания
  setTimeout(() => {
    imageStar.classList.remove('rotate-right');
    upImage.classList.remove('rotate-up-right');
  }, 0); // Сразу же убираем классы
});

imageWrapper.addEventListener('mouseout', function() {
  if (isRotatedRight) {
    imageStar.classList.add('rotate-right');
    upImage.classList.add('rotate-up-right');
  } else {
    imageStar.classList.add('rotate-left');
    upImage.classList.add('rotate-up-left');
  }
});

});

const blockRight = document.querySelector('.dj-block__right');
const imgStar = document.querySelector('.image-starr');
const imgUp = document.querySelector('.up-img');
const wrap = document.querySelector('.dj-block__wrap');

window.addEventListener('scroll', () => {
  const wrapRect = wrap.getBoundingClientRect();

  // Проверяем, виден ли wrap на 20%
  if (wrapRect.top <= window.innerHeight * 0.2 && wrapRect.bottom >= window.innerHeight * 0.2) {
    const scrollPercentage = (wrapRect.top + wrapRect.height) / window.innerHeight; // Расчет процента скролла
    const rotation = 180 * (1 - scrollPercentage); // Угол вращения
    
    
    const scale = 1 + (0.2 * (1 - scrollPercentage));

    imgStar.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    imgUp.style.transform = `translate(-50%, -50%) scale(${scale})`;
  } else {
    resetTransformations();
  }
});

blockRight.addEventListener('mouseenter', () => {
  imgStar.style.transform = `translate(-50%, -50%) rotate(180deg)`;
  
  // Ограничиваем scale при наведении до 1.1
  imgUp.style.transform = `translate(-50%, -50%) scale(1.1)`;
});

blockRight.addEventListener('mouseleave', resetTransformations);

function resetTransformations() {
  imgStar.style.transform = `translate(-50%, -50%) rotate(0deg)`;
  imgUp.style.transform = `translate(-50%, -50%) scale(1)`;
}

