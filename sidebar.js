$(function() {
  $('.button').click(function(e) {
    e.stopPropagation();
    $('.sidebar-wrapper').toggleClass('toggle-sidebar');
  });

    $(document).click(function() {
      $('.sidebar-wrapper').addClass('toggle-sidebar');
    });

  $('.sidebar-wrapper').click(function(e){
    e.stopPropagation();
  });
});
