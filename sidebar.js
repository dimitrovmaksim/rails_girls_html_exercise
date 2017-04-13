$(function() {

    $('.toggle').hide();

  $(window).resize(function(){
    $('.toggle').slideUp('fast');
  });

  $('.button').click(function(e) {
    e.stopPropagation();
    $('.toggle').slideToggle()
  });

    $(document).click(function() {
      $('.toggle').slideUp();
    });

  $('.toggle').click(function(e){
    e.stopPropagation();
  });
});
