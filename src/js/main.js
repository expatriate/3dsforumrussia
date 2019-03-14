document.addEventListener("DOMContentLoaded", ready);

function ready() {

  // Tabs
  $('.tab-head__item').on('click', function(e) {
    e.preventDefault();

    $('.tab-content__item').css({'display': 'none'});
    $('.tab-content__item').removeClass('active');
    $('.tab-head__item').removeClass('active');
    $(this).addClass('active');
    $('#'+$(this).data('head')).css({'display': 'block'}).addClass('active');
  });

  // Showmore
  $('.article__showmore').on('click', function(e) {
    e.preventDefault();

    $(this).css({'display': 'none'});
    $('#'+$(this).data('content')).css({'display': 'block'}).addClass('active');
  
  });

  $('.article__hide').on('click', function(e) {
    e.preventDefault();

    $('.article__showmore[data-content="'+$(this).data('content')+'"]').removeAttr('style');
     $('#'+$(this).data('content')).css({'display': 'none'}).removeClass('active');
  });

  var width = $('.tab-content__item').first().find('iframe').width();
  var padding = 40;
  if (window.innerWidth <= 720) {
    padding = 0;
  }
  $('.tab-content__item').find('iframe').attr('width', window.innerWidth - padding)
}