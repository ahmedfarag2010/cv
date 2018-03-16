$(document).ready(function() {
  $('.collapse').on('click', function() {
    $('.collapse__menu').toggleClass('active');
        $('.header__menu').toggleClass('active');
    });
});