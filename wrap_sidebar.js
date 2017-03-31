$(window).on("load", function() {
  let viewWidth = $(window).width();
  if (viewWidth < 600) {
    $('#fixed').removeClass("sidebar-fixed");
    $('.sidebar-wrapper').addClass("wrap-sidebar");
  } else {
    $('#fixed').addClass("sidebar-fixed");
    $('.sidebar-wrapper').removeClass("wrap-sidebar");
  }
});

$(window).on("resize", function() {
  let viewWidth = $(window).width();
  if (viewWidth < 600) {
    $('#fixed').removeClass("sidebar-fixed");
    $('.sidebar-wrapper').addClass("wrap-sidebar");
  }
  else {
    $('#fixed').addClass("sidebar-fixed");
    $('.sidebar-wrapper').removeClass("wrap-sidebar");

  }
});
