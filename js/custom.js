$(function() {
  // When the user scrolls down 20px from the top of the document, show the button
  $('[data-toggle="tooltip"]').tooltip();   
  window.onscroll = function() {scrollFunction()};
  scrollFunction();
  
  $(window).on("resize", function() {
    var win = $(this);
    if (win.width() < 768) {
      $('#carouselExampleIndicators').removeClass('carousel-fades');
      $('.service_by3').addClass('d-none');
    } else {
      $('.service_by3').removeClass('d-none');  
    }
  });


  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      // downscroll code
      $('.fade').addClass('fade-in');
    }
    lastScrollTop = st;
  });

  var showMore = '<span> Show More <i class="fa fa-angle-down"></i> </span>';
  var showLess = '<span> Show Less <i class="fa fa-angle-up"></i> </span>';

  $('#service1').on('show.bs.collapse', function () {
    $(this).addClass('animation-1');
    $('#service2, #service3').collapse('hide');
    $('#showS1').html(showLess);
  });
  $('#service2').on('show.bs.collapse', function () {
    $(this).addClass('animation-1');
    $('#service3, #service1').collapse('hide');
    $('#showS2').html(showLess);
  });
  $('#service3').on('show.bs.collapse', function () {
    $(this).addClass('animation-1');
    $('#service1, #service2').collapse('hide');
    $('#showS3').html(showLess);
  });
  $('#service1').on('hidden.bs.collapse', function () {
    $('#showS1').html(showMore);
  });
  $('#service2').on('hidden.bs.collapse', function () {
    $('#showS2').html(showMore);
  });
  $('#service3').on('hidden.bs.collapse', function () {
    $('#showS3').html(showMore);
  });

});

function topFunction() {
  $('html, body').animate({scrollTop:0}, 800);
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#btnScrollToTop').css('display', 'block');
  } else {
    $('#btnScrollToTop').css('display', 'none');
  }
}