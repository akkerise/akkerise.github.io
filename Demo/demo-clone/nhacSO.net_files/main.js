jQuery(document).ready(function($) {

  $('body').on('click', function (e) {
      $('[data-toggle="popover"]').each(function () {
          //the 'is' for buttons that trigger popups
          //the 'has' for icons within a button that triggers a popup
          if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
              $(this).popover('hide');
          }
      });
  });

    // applying photobox on a `gallery` element which has lots of thumbnails links.
    // Passing options object as well:
    //-----------------------------------------------


  $('#gallery img').each(function(){
      var url_this=$(this).attr('src');
      if ($(this).parents('figure.image').length) {
        var title_imagexx=$(this).parents('figure.image').find('figcaption').text();

        $(this).attr('title',title_imagexx);
      }
      $( this ).wrap( "<a class='image_photoboxx' href='"+url_this+"'></a>" );
    }) .promise().done( function(){
          $('.image_photoboxx').append('<i class="fa fa-arrows-alt"></i>'); 
          var hhh=typeof photobox;
          try{
            $('#gallery').photobox('a.image_photoboxx',{ time:0 }); 
          }catch(err){};
    })



 

 $(".playlist-hl .play-pri").click(function(e){
    e.preventDefault();
    $(".song-list-sp").css("display", "block");
 });
 $("#show-list-song").click(function(e){
      e.preventDefault();
      $("#show-list-song").toggleClass("arrow-top");
      $('.song-list-sp').slideToggle(0);
 });
 $(".btn-close-showlist").click(function(e){
   // $("#showList").css("bottom", "-450px");
    $("#showPlaylist").removeClass('active');
    $("#showList").animate({
                    bottom: "-450"
                }, 200);
 });

  $(".sup-popup .btn-default").click(function(){
    $(".box-search .popup").css("display", "none");
  });

  $('.like-pl').click(function(event){
        event.preventDefault();
        event.stopPropagation();
         $(".share-area").slideToggle("fast");
  });
  $(".share-area").on("click", function (event) {
        event.stopPropagation();
    });

  $('.flac').click(function(e){
    e.preventDefault();
  });


//  $(document).mouseup(function (e)
// {
//     var container = $("#box-share");

//     if (!container.is(e.target) // if the target of the click isn't the container...
//         && container.has(e.target).length === 0) // ... nor a descendant of the container
//     {
//         container.hide();
//         return false;
//     }
// });

// $('.song-lyrics-more > a').click(function() {
//     if ($('.song-lyrics-height').hasClass('open')) {
//       $('.song-lyrics-height').removeClass('open');
//       $(".song-lyrics-more > a").text("Xem thêm");

//     } else {

//       $('.song-lyrics-height').addClass('open');
//       $(".song-lyrics-more > a").text("Rút gọn");
//     }
//   });



  // $('.desc-album-more > a').click(function(e) {
  //   e.preventDefault();
  //   if ($('.desc-album').hasClass('open')) {
  //     $('.desc-album').removeClass('open');
  //     $(".desc-album-more > a").text("Xem thêm");

  //   } else {
  //     $('.desc-album').addClass('open');
  //     $(".desc-album-more > a").text("Rút gọn");
  //   }
  // });
  //event.preventDefault();
  // $('.cut-desc > a').click(function(){
  //   $('.cut-desc').css("display","none");
  //   $('.full-desc').css("display","block");
  // });
  // $('.full-desc > a').click(function(){
  //   $('.full-desc').css("display","none");
  //   $('.cut-desc').css("display","block");
  // });

    $('.short-info > p > a').click(function(e){
      e.preventDefault();
      $('.short-info ').css("display","none");
      $('.full-info').css("display","block");
    });

    $('.full-info > a').click(function(e){
      e.preventDefault();
      $('.full-info').css("display","none");
      $('.short-info').css("display","block");
    });

  var pop = $('i', this.el).popover({
    trigger: 'focus',
    html : true, 
    container: 'body'
    , template: '<div class="popover popover-download"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p>ddfdf</p></div></div></div>'
  });

  var pop1 = $('a.flac', this.el).popover({
    html : true, 
    container: 'body'
    , template: '<div class="popover popover-lossless"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p>ddfdf</p></div></div></div>'
  });

  $('[data-toggle="popover"]').popover({
    html : true, 
    container: 'body',
        title: function() {
          return 'Thêm vào Playlist';
        }
  });

  $('[data-toggle="popover_download"]').popover({
          html : true, 
          container: 'body',  
              title: function() {
                return 'Download';
              }
  });

  $('[data-toggle="popover_mobile"]').popover({
          html : true, 
          container: 'body',  

  });


  $('.btn-info-album').click(function(){
    $(".desc-album").slideToggle();
  });
  $(window).scroll(function (event) {
        if ($(window).scrollTop() != 0) {
            $('#back-to-top').fadeIn();
            $('#back-to-top').css("opacity", "1");
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

  var a= ($(".sub-menu-1 .column").size());
  if(a==2){
    $(".sub-menu-1").css("width", "300");
  }
  if(a==3){
    $(".sub-menu-1").css("width", "450");
  }
  var b= ($(".sub-menu-2 .column").size());
  if(b==3){
    $(".sub-menu-2").css("width", "450");
  }
  if(b==2){
    $(".sub-menu-2").css("width", "300");
  }
  var c= ($(".sub-menu-3 .column").size());
  if(c==3){
    $(".sub-menu-3").css("width", "450");
  }
  if(c==2){
    $(".sub-menu-3").css("width", "300");
  }

  var d= ($(".main-sub-menu-1 .column").size());
  if(d==2){
    $(".main-sub-menu-1").css("width", "300");
  }
  if(d==3){
    $(".main-sub-menu-1").css("width", "450");
  }
  var e= ($(".main-sub-menu-2 .column").size());
  if(e==3){
    $(".main-sub-menu-2").css("width", "450");
  }
  if(e==2){
    $(".main-sub-menu-2").css("width", "300");
  }
  var f= ($(".main-sub-menu-3 .column").size());
  if(f==3){
    $(".main-sub-menu-3").css("width", "450");
  }
  if(f==2){
    $(".main-sub-menu-3").css("width", "300");
  }


  if ($(".list-song-create").length > 0) {
    $(".list-song-create").css("height", $(window).height() - 340);
  }
  $(".block-adv .open").click(function(){
    event.preventDefault();
    $( ".block-adv .thumb" ).css("display","block")
        $(".block-adv .thumb").css("display","block");
        $(".close-1").css("display","block");
        $(".block-adv .open").css("display","none");
    
  });
  $(".block-adv .close-1").click(function(){
    event.preventDefault();
    $(".close-1").css("display","none");
    $( ".block-adv .thumb" ).css( "slow","none");
        $(".block-adv .thumb").css("display","none");
        $(".block-adv .open").css("display","block");
  });
  
  // $('.comment-acitons .link-reply').click(function() {

  //   // var txt = "<div class='comment-reply'><form class='form-horizontal'><div class='form-group'><div class='col-xs-12'><textarea class='form-control' rows='2'></textarea></div></div><div class='form-group'><div class='col-lg-2 col-lg-offset-10 col-xs-3 col-xs-offset-9'><button class='btn btn-default btn-block'>Gửi trả lời</button></div></div></form></div>";

  //   // if ($(this).parents('.comment-acitons').hasClass('active')) {
  //   //   $(this).parents('.comment-acitons').removeClass('active');
  //   //   $(this).parents('.comment-acitons').find('.comment-reply').remove();

  //   // } else {
  //   //   $(this).parents('.comment-acitons').addClass('active');
  //   //   $(this).parents('.comment-acitons').append(txt);

  //   // }

  //   var comment = $(this).parent().parent().find('.comment-reply');
  //   if(comment.css('display') == "none")
  //   {
  //       comment.show();
  //   }else
  //       comment.hide();
        
  // });

  // $(".song-detail .dropdown-menu").click(function(e) {
  //   e.stopPropagation();
  // });

  $('.btn-cpl .btn-default').click(function(event) {
    event.preventDefault();
    $('.btn-cpl').hide();
    $('.link-cpl').show();
  });

  $('.link-cpl').click(function(event) {
    event.preventDefault();
    $('.btn-cpl').show();
    $('.link-cpl').hide();
  });
  $('.your-element').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);
  });

  initSlideBanner();
  initSlideTVShow();
  initSlidePlaylist();

  $("#song-list").mCustomScrollbar({
    scrollButtons: {
      mouseWheelPixels: 800,
      enable: true
    },
    theme: "dark-thick",
  });
  $(".text-song").mCustomScrollbar({
    scrollButtons: {
      enable: true
    },
    theme: "dark-thick",
  });
   $(".style-song").mCustomScrollbar({
    scrollButtons: {
      enable: true
    },
    theme: "dark-thick",
  });

    $('.list-song .song .song-down').click(function(e){
      if($(this).parent().parent().hasClass('show')){
        $(this).parent().parent().parent().find('li').removeClass('show')
      }
      else {
        $(this).parent().parent().parent().find('li').removeClass('show');
        $(this).parent().parent().addClass('show')
          }
      });

   $('#page').click(function (e)
   {
    var container = $(".list-song>li.show");
    var container1 = $(".song-content button.show");
    if (!container.is(e.target) 
     && container.has(e.target).length === 0 && !container1.is(e.target) 
     && container1.has(e.target).length === 0 ) 
    {
     $(".list-song .song .song-down").parent().parent().parent().find('li').removeClass('show');
     $(".song-content .btn-group .type-download").parent().parent().find('button').removeClass('show');
    }
   });

   $('.song-content .btn-download').click(function(){
      if($(this).hasClass('show')){
        $(this).removeClass('show');
      }
      else {
        $(this).addClass('show')
      }
   });

  // $('.playlist-play').hover(function() {
  //   $(this).parents(".global-actions").find(".more").stop(true, false).fadeIn('fast');
  // }, function() {
  //   $(this).parents(".global-actions").find(".more").stop(true, false).fadeOut('fast');
  // });

  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
  })


 

 
   

  // $("#KeyName").keyup(function() {

  //   var a = $('#KeyName').val().trim();

  //   if (a.length > 0) {
  //     $('#search_auto_complete').show().height($(window).height() - 110);
  //     disableScroll();
  //     $(".sac-result").height($(window).height() - 220);
  //     $(".sac-result").mCustomScrollbar({
  //       scrollButtons: {
  //         enable: true
  //       },
  //       theme: "dark-thick",
  //     });

  //   } else {
  //     $('#search_auto_complete').hide();
  //     releaseScroll();
  //   }

  //   $('#sac_exit').click(function() {
  //     $('#search_auto_complete').hide();
  //     $('#KeyName').val('');
  //     a = $('#KeyName').val().trim();
  //     releaseScroll();
  //   });

  //   $("#KeyName").focus(function() {
  //     if (a.length > 0) {
  //       $('#search_auto_complete').show();
  //     } else {
  //       $('#search_auto_complete').hide();
  //     }
  //   });

  //   $("#sac_title").text(a);

  // });
  
  $("#KeyName").keyup(function() {
    var a = $('#KeyName').val().trim();
    if (a.length > 0) {
      $('#search_auto_complete').show().height($(window).height() - 125);
      disableScroll();
      $(".sac-result").width($(window).width() -40);
      $(".sac-result").mCustomScrollbar({
          axis:"x",
          scrollInertia: 0,
          mouseWheelPixels: 50,
          scrollButtons: {
            enable: true
          },
          advanced:{  
            updateOnBrowserResize:true,   
            updateOnContentResize:true   
          },
          theme:"dark-thick",
          advanced:{autoExpandHorizontalScroll:true}
        });
    } else {
      $('#search_auto_complete').hide();
      releaseScroll();
    }

    $('#sac_exit').click(function() {
      $('#search_auto_complete').hide();
      $(".adv-right-home, .adv-left-home").show();
      $('#KeyName').val('');
      a = $('#KeyName').val().trim();
      releaseScroll();
    });

    $("#KeyName").focus(function() {
      if (a.length > 0) {
        $('#search_auto_complete').show();
      } else {
        $('#search_auto_complete').hide();
      }
    });

    $("#sac_title").text(a);

  });
  $(window).resize(function() {
    // $('#search_auto_complete').width($(window).width() - 200);
    // $(".sac-result").width($(window).width() - 400);
    var h2 = $(window).height() -195; 
    $('.sac-result').css("height", h2);
    $('.sac-result').css({"margin-top" : "75px"});
    $(".sac-result").mCustomScrollbar({
          axis:"x",
          scrollInertia: 0,
          mouseWheelPixels: 50,
          advanced:{  
            updateOnBrowserResize:true,   
            updateOnContentResize:true   
          },
          scrollButtons: {
            enable: true
          },
          theme:"dark-thick",
        });
  })
  $( ".box-search .dark-form .form-control" ).focus(function() {
      $(".box-search .dark-form .btn-default").css({"color" : "#ded8d8"})
  });


	active_scroll_left_panel();
  active_scroll_social_new();
  active_scroll_banner300600_new();
  getHeight();
  getHeight1(); 
});

function initSlideBanner() {
    if ($('#slide_banner').hasClass( "slick-initialized" )) return false;
    $('#slide_banner').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    setTimeout(function explode(){
        $('#slide_banner').css('opacity','1');
    }, 1000)
}

function initSlideTVShow() {
    if ($('#slide_show').hasClass( "slick-initialized" )) return false;
    $('#slide_show').slick({
        autoplay: false,
        variableWidth: true,
        dots: true,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 3
    });

    setTimeout(function explode(){
        $('#slide_show').css('opacity','1');
    }, 1000);
}

function initSlidePlaylist() {
    if ($('#slide_playlist').hasClass( "slick-initialized" )) return false;
    $('#slide_playlist').slick({
        autoplay: false,
        variableWidth: true,
        dots: true,
        slidesToShow: 6,
        speed: 500,
        slidesToScroll: 6
    });
    setTimeout(function explode(){
        $('#slide_playlist').css('opacity','1');
    }, 1000);
}

function getHeight() {
  var h = $(window).height() - 175;
  $(".left-adv").css("height", h);
  $(".right-adv").css("height", h);
}
function getHeight1(){
  var h1 = $(window).height() -205;
  $('.sac-result').css("height", h1);

}

function active_scroll_left_panel() {
    $(document).scroll(function () {
        if($(".subcategory").length > 0)
        {
            stickyLeftPanel();
        }  
    });
    
    if($(".subcategory").length > 0)
    {
        stickyLeftPanel();
    }
}

function stickyLeftPanel() {
    var hH = $('.content-full, .content-left').offset().top;
    var tH = $(".subcategory").height();
    var scroll = $(window).scrollTop();

    var rH = $('.content-full, .content-left').height();
    if (scroll > hH && rH > tH) {
        var _top = rH - scroll - tH + hH;
        if (_top > 0) _top = 0;

        $(".subcategory").css({
            "position": "fixed",
            "top": _top + "px"
        });
    } else {
        $(".subcategory").css({
            "position": ""
        });
    }
    $(".subcategory .scroll-cate").height($(window).height() - 100);
    $(".scroll-cate").mCustomScrollbar("update");
}

function disableScroll() {
  $("body").addClass("fixScroll");
  $("#wrapper").addClass("vi");
}

function releaseScroll() {
  $("body").removeClass("fixScroll");
  $("#wrapper").removeClass("vi");
}

function active_scroll_social_new() {
    $(document).scroll(function () {
        if($(".stickem").length > 0)
        {
            stickySocialNew();
        }
    });

    if($(".stickem").length > 0)
    {
        stickySocialNew();
    }
}
function stickySocialNew() {
    var hH = $('.news-detail').offset().top;
    var tH = $(".stickem").height();
    var scroll = $(window).scrollTop();

    var rH = $('.news-detail').height();
    if (scroll > hH && rH > tH) {
        var _top = rH - scroll - tH + hH;
        if (_top > 0) _top = 10;

        $(".stickem").css({
            "position": "fixed",
            "top": _top + "px"
        });
    } else {
        $(".stickem").css({
            "position": ""
        });
    }
}


function active_scroll_banner300600_new() {
    $(document).scroll(function () {
        if($(".stick-banner-300600").length > 0)
        {
            stickyBannerNew();
        }
    });

    if($(".stick-banner-300600").length > 0)
    {
        stickyBannerNew();
    }
}
function stickyBannerNew() {
    var hH = $('.content-left').offset().top + $('.sidebar-news .scroll-sidebar').height();
    var tH = $(".stick-banner-300600").height();
    var scroll = $(window).scrollTop();

    var rH = $('.content-left').height() - $('.sidebar-news .scroll-sidebar').height();
    if (scroll > hH && rH > tH) {
        var _top = rH - scroll - tH + hH;
        if (_top > 0) _top = 10;

        $(".stick-banner-300600").css({
            "position": "fixed",
            "top": _top + "px"
        });
    } else {
        $(".stick-banner-300600").css({
            "position": ""
        });
    }
}

