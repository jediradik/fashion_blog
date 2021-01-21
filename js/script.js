$(function () {
  $('.slider__inner').slick({
    arrows: false,
    dots: true
  });

  $('.burger-menu').on('click', function () {
    $('.burger-menu').toggleClass('burger-menu__active');
    $('.header-top__menu').toggleClass('header-top__menu-active');
  });
});