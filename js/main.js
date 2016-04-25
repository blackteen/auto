$(document).ready(function(){
 $('.spoiler_links').click(function(){
  $(this).parent().children('div.spoiler_body').slideToggle();
 	$(this).toggleClass('active')
  return false;
 });
});

$('.callback').magnificPopup({
  type:'inline',
  midClick: true 
});

$('.registration').magnificPopup({
  type:'inline',
  midClick: true 
});

$('.log-in-pop').magnificPopup({
  type:'inline',
  midClick: true 
});

$('.language-select').click(function(){
$(this).toggleClass('open');
})

$('.language-select li').click(function(){
var setLang = $('.language-select').data('location'),
    dataLangSelect = $(this).data('lang')
      $('.language-select').data('location', dataLangSelect);
      $('.language-select li').removeClass('active');
      $(this).toggleClass('active');
})
