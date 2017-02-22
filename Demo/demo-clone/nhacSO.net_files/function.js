// Load content jquery
if(typeof(adsState) !== "boolean"){
	var adsState = false;
}
var isLoad = true;
$(function() {
	//Pause và Play nhạc khi nhấn space
	$(document).on('keydown',function(e){
		if ($(e.target).is('input, textarea')) {
			return;   
		}

        if(e.keyCode == 32) {
            if ($('video.vjs-tech').length > 0) {
                return false;
            }
			myPeakPlayer.playTrack();
			buildInfo(myPeakPlayer.song);
			if($(".fa-volume-off").length > 0){
				myPeakPlayer.song.smObject.setVolume(0);
			}else{
				myPeakPlayer.song.smObject.setVolume($("span.volume").html());
			}
			setActivePlayTrackAfterLoadAjax();
	        return false;
	    } else if(e.keyCode == 18) { // Alt : show list bai hat
            e.preventDefault();
            $("#showPlaylist").trigger( "click" );
        } else if(e.keyCode == 37) { // left : tro ve bai hat truoc
            $("#previousSongButton").click();
        } else if(e.keyCode == 39) { // right: hat bai tiep theo
            $("#nextSongButton").click();
        }
	});

    
	$('#menu a').click(function(e) {
		$(this).parent().parent().find('a').removeClass('active');
	    $(this).addClass('active');
	});

	// THIS EVENT MAKES SURE THAT THE BACK/FORWARD BUTTONS WORK AS WELL
	var __back = false;
    window.onpopstate = function(event) {
        if (/^((?!chrome).)*safari/i.test(navigator.userAgent) && __back==false) {
            __back = true;
            return;
        }

        var url = location.pathname;
        if (localStorage.viewtype) {
            url = location.pathname + '?viewType=' + localStorage.viewtype;
        }
        if (localStorage.keyname) {
            url = location.pathname + '?keyName=' + localStorage.keyname;
        }

        loadContent(url);

        if (location.pathname == '/') {

            $("div#menu ul li a").removeClass("active");
        }
	};

    $(document).on("click", ".download", function() {
		//isLoad = false;
	});
});
function updateUrlParameter(key, value, url){
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
        else
            return url;
    }
}
function initPaginationNews() {
    $('ul#pagination').bootstrapPaginator({
        bootstrapMajorVersion: 3,
        currentPage: $('ul#pagination').attr('data-current'),
        totalPages: $('ul#pagination').attr('data-total'),
        onPageClicked: function (e, originalEvent, type, page) {
            var url = updateUrlParameter('page', page);
            $('#trigger-pagination').attr( 'href', url );
            $('#trigger-pagination').click();
        }
    });
}

function viewLyric(){
	if($('.song-lyrics-content').css('display') == 'block')
	{
	   $('.song-lyrics-content').css('display','none');
	} else {
	   $('.song-lyrics-content').css('display','block');
	}
}

function downSong(songId){
       window.open('/songs/download-song?songId='+ songId, '_blank');
       return false;
   }
function downSongHires(songId){
       window.open('/songs/download-song-hires?songId='+ songId, '_blank');
       return false;
   }
function downSongLossLess(songId){
		var userId = $('#nhacso_user_id').val();
		if (userId === '') {
			loginPopup();
		} else {

	       window.open('/songs/download-song-lossless?songId='+ songId, '_blank');
	       return false;
	    }
   }
function tabBlock(id){
	$('#'+ id +' > .tab').hide();
	$('#'+ id +' .tab:first').show();
	$('#'+ id +' > ul > li:first').addClass('active');
	$('#'+ id +' > ul > li > a').click(function(){
		$('#'+ id +' > ul > li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#'+ id +' > .tab').hide();
		$(currentTab).show();
		if($('.scroll-pane').length > 0){
			//$('.scroll-pane').jScrollPane();
		}
		$(currentTab).find('.cnt-sub-tab:first').show();
		$(currentTab).find('.sub-tab a:first').addClass('selected');
		return false;
	});
}
function loadContent(url){
	// USES JQUERY TO LOAD THE CONTENT
	$.ajax({
		type: "GET",
		url: url,
		dataType: "html",
		success: function(htmlContent){
			if(parseInt(htmlContent)!=0)
			{
				$('.wrap-page').html(htmlContent);

                initSlideBanner();

				$height = $('.playlist .figure').width();
				if($height != 0){
					$('.playlist .figure').css('height', $height);
				}

				$height = $('.playlist .figure').width();
				if($height != 0){
			    	$('.playlist .figure').css('height', $height);
			    }

			    if ($('.expand').length > 0) {
			 	   $("#livebar .wrap-livebar .expand").css("height", $(window).height() - 30);

			    }

			    $(".wrap-tool-action, .wrap-tool-share-action").removeAttr("style");
				$('.tooltip, .tooltip-share, .wrap-tool-action, .wrap-tool-share-action , #showList, #showLyric, .onplay').click(function(event) {
					  event.stopPropagation();
					});

				if ($(".description > .expand-song").length > 0) {
					$('.description > .expand-song').readmore({
					  maxHeight: 40,
					  moreLink: '<a href="javascript:void(0)" class="m-d-s">Xem thêm</a>',
					  lessLink: '<a href="javascript:void(0)" class="m-d-s">Rút gọn</a>',
					  sectionCSS: 'display: block;',
					});
				}

				if ($('.scroll-cate').length > 0) {
					$(".subcategory .scroll-cate").height($(window).height() - 160);
					$(".scroll-cate").mCustomScrollbar("update");

				}


				$(".see-more > a").hover(function(){
                    $(this).parents(".figure").find(".more-song").stop(true, false).fadeIn();

                }, function() {
                     $(this).parents(".figure").find(".more-song").stop(true, false).fadeOut();
                });

                if($('.sort-header').length > 0){

			        $('#page').scroll(function() {
						if ($(this).scrollTop() > 100) {
							$('.sort-header').slideDown();
						} else {
							$('.sort-header').slideUp();
						}
			        });
			    }

			    if ($('#my-video').length > 0) {
					initVideo("my-video");
					$("html, body").animate({ scrollTop: 0 }, "1");
				}


			    FB.XFBML.parse();


			}

			//setActivePlayTrackAfterLoadAjax();
		}
	});

	// THESE TWO LINES JUST MAKE SURE THAT THE NAV BAR REFLECTS THE CURRENT URL
	$('li').removeClass('current');
	$('a[href="'+url+'"]').parent().addClass('current');
}
function onClickTabDetail(obj,url){
	if($(obj).attr('clicked') == 0){

		$(obj).attr('clicked', 1);
		var songId = $('#Params > #songId').attr('value');
		var idContent = $(obj).attr('id-content');
		$.ajax({
			url: url + '/format/html',
			type: 'get',
			success: function(html){
				$(idContent).html(html);
			},
			error:function(){
				$(obj).attr('clicked', 0);
			}
		});
	}
	return false;
}
function loadContentCategory(url){
	// USES JQUERY TO LOAD THE CONTENT
	$.ajax({
		type: "GET",
		url: url,
		dataType: "html",
		success: function(htmlContent){
			if(parseInt(htmlContent)!=0)
			{
				$('.wrap-block').html(htmlContent);
				$('#loading').css('visibility','hidden');
			}
		}

	});

	// THESE TWO LINES JUST MAKE SURE THAT THE NAV BAR REFLECTS THE CURRENT URL
	$('li').removeClass('current');
	$('a[href="'+url+'"]').parent().addClass('current');
}
// end load ajax
// js xu ly khung search
function searchAll(e,noweb){

	var txtSearch = $('#KeyName').val();
	txtSearch = encodeURIComponent(txtSearch);
	var url = "/tim-kiem-tat-ca.html?keyName="+ txtSearch +'&is_home=1';

	if(txtSearch.length >= 2){
		$('#search_auto_complete').hide();
		$('body').append('<div id="bg-load"><div class="loader"></div></div>');

		history.pushState('', 'New URL: ' + url, url);

		$.ajax({
			url: url,
			type: 'get',
			data:{noax_web:noweb},
			success: function(html){
				$('.wrap-page').html(html);
				$("#sac_exit").trigger('click');
				//$("#search_auto_complete").css("height","93px");
				$("#page").animate({ scrollTop: 0 }, "1");
				var el = $('#KeyName').get(0);

			    var elemLen = el.value.length;

			    el.selectionStart = elemLen;
			    el.selectionEnd = elemLen;
			    el.focus();

			    $(".wrap-tool-action, .wrap-tool-share-action").removeAttr("style");
					$('.tooltip, .tooltip-share, .wrap-tool-action, .wrap-tool-share-action , #showList, #showLyric').click(function(event) {
						  event.stopPropagation();
						});

				$(".see-more > a").hover(function(){
                    $(this).parents(".figure").find(".more-song").stop(true, false).fadeIn();

                }, function() {
                     $(this).parents(".figure").find(".more-song").stop(true, false).fadeOut();
                });

                $height = $('.playlist .figure').width();
				if($height != 0){
					$('.explore .playlist .figure').css('height', $height);
				}
				$('[data-toggle="tooltip"]').tooltip();
			    $('#bg-load').remove();
			},
			error:function(){
				// window.location.href='/404.html';
			}
		});
	}else{
		alert('Độ dài ký tự phải lớn hơn 3');
		//$(".erro-search").html("<p style='color: rgb(255, 255, 255); text-align: center;'>Độ dài ký tự phải lớn hơn 3</p>");
	}
};

function runScript(e) {

	e.preventDefault();
	if (e.keyCode == 13) {

		 var txtSearch = $('#KeyName').val();
		 txtSearch = encodeURIComponent(txtSearch);
		 var url = "/tim-kiem-tat-ca.html?keyName="+ txtSearch+'&is_home=1';

		 if(txtSearch.length > 2){
			$('#search_auto_complete').hide();
			$('body').append('<div id="bg-load"><div class="loader"></div></div>');

			history.pushState('', 'New URL: ' + url, url);

			$.ajax({
				url: url,
				type: 'get',
				success: function(html){
					$('.wrap-page').html(html);
					$(".wrap-tool-action, .wrap-tool-share-action").removeAttr("style");
					$('.tooltip, .tooltip-share, .wrap-tool-action, .wrap-tool-share-action , #showList, #showLyric').click(function(event) {
						  event.stopPropagation();
						});

					$(".see-more > a").hover(function(){
	                    $(this).parents(".figure").find(".more-song").stop(true, false).fadeIn();

	                }, function() {
	                     $(this).parents(".figure").find(".more-song").stop(true, false).fadeOut();
	                });

					$height = $('.playlist .figure').width();
					if($height != 0){
						$('.explore .playlist .figure').css('height', $height);
					}
					$(".adv-right-home, .adv-left-home").hide();
					$('[data-toggle="tooltip"]').tooltip();
					$('#bg-load').remove();
					$("html, body").animate({ scrollTop: 0 }, "1");
				},
				error:function(){
					// window.location.href='/404.html';
				}
			});
		}else{
			alert('Độ dài ký tự phải lớn hơn 3');
			//$(".erro-search").html("<p style='color: rgb(255, 255, 255); text-align: center;'>Độ dài ký tự phải lớn hơn 3</p>");
		}
	}
}

// js xu ly download
function downloadMp3(obj){
    var download      = parseInt($(obj).attr('download'));
    if(download)
    {
    	window.location.href = download;
    }
};
// load ajax load content type
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function loadAjaxFunction (object) {
	// check close feature
	if($(object).hasClass('close-popup-feature')){
		 var keyFeature= "nhacso.net!@#$%^";
	     setCookie("TinhNang_NhacSo", keyFeature, 365);
	     $(".home-new-features").remove();
	}
     // end
	var url 		 = $(object).attr('href');
	var idContent    = $(object).attr('data-id-content');
	var dataBXH      = $(object).attr('data-bxh');
	var dataHref     = $(object).attr('data-href');
	var page         = $(object).attr('page');
	var isLoader     = $(object).hasClass('is-not-loadder');
	var isLoadMore   = $(object).hasClass('is-load-more');
	var isHome       = $(object).hasClass('is-home');
	var isStartalk	 = $(object).hasClass('is-startalk');
	var isVideo   	 = $(object).hasClass('is-video');
	var isNews   	 = $(object).hasClass('is-news');
	var isAnswers    = $(object).hasClass('is-answers');
	var isAds  	     = $(object).hasClass('is-ads');
	var isPlaylist   = $(object).hasClass('is-playlist');
	var isDetail   	 = $(object).hasClass('is-detail');
	var isTop   	 = $(object).hasClass('is-top');
	var isInitSlide  = $(object).hasClass('is-init-slide');
	var idInitSlide  = $(object).attr('data-init-slide');
	var classContent = $(object).attr('data-class-content');
	var type_pagination=$(object).attr('data-paginator');
	if ($('#MY_VIDEO_1').length > 0) {
		$('#MY_VIDEO_1').get(0).volume = 0.5;
	}
	if(dataBXH){
		$("#playBxh").attr('data-bxh', dataBXH);
	}

	if(isTop){
		$("html, body").animate({ scrollTop: 0 }, "1");
	}

	if(isNews && isDetail){
		$("#newsMenu").show();
	}else{
		$("#newsMenu").hide();
	}

	if($(".subcategory").length > 0)
    {
        stickyLeftPanel();
    }

	$(object).parent().parent().find('li').removeClass('active');
	$(object).parent().addClass('active');

	if(classContent)
	{
		idContent = idContent + ' .'+ classContent;
	}

	if ($(object).hasClass('is-tab')) {
		$(object).parent().parent().find('li').removeClass('active');
		$(object).parent().addClass('active');
		var url = $(object).attr('url');

		if ($(object).attr('is-loaded') == 1 && !isLoadMore) {
			return false;
		} else {
			$(object).attr('is-loaded', 1);
		}
	}
	$('#search_auto_complete').hide();
	if(!isLoader){

		$('body').append('<div id="bg-load"><div class="loader"></div></div>');
	}


	if ($(object).hasClass('is-change')) {
		$(".explore").addClass("listening");
	}

	if ($(object).hasClass('is-push-url')) {
		if($(object).hasClass('onplay'))
		{
			history.pushState('', 'New URL: ' + dataHref, dataHref);
		}
		else
		{
			history.pushState('', 'New URL: ' + url, url);
		}
	}
	if(page)
	{
		url = url + "&page="+ page;
	}
	else
		url = url;

	$.ajax({
		url: '/users/check-login',
		type: 'get',
		success: function(result){
			if(result == 0){
				$('#nhacso_user_id').val('');
				$('.lk-prf').html('<a id="step_3" href="javascript:void(0);" class="user-login" onclick="return loginPopup();"><i class="fa fa-unlock-alt"></i><span>Ðăng nhập</span></a>');
				$('.btn-create-playlist').attr("href", "javascript:void(0);");
				$('.btn-create-playlist').attr("onclick", "return loginPopup();");
			}
		}

	});


	$.ajax({
		url: url,
		type: 'get',
		success: function(html){
			if(type_pagination){
				$('.widget-song-list').html(html);
				$("html, body").animate({ scrollTop: 0 }, "1");

			}
			else if (isLoadMore) {
				$(idContent).append(html);
				$(object).attr('page', parseInt(page) + 1);
				$(".wrap-tool-action, .wrap-tool-share-action").removeAttr("style");
				$('.tooltip, .tooltip-share, .wrap-tool-action, .wrap-tool-share-action , #showList, #showLyric, .onplay').click(function(event) {
					  event.stopPropagation();
					});

				$height = $('.playlist .figure').width();
				if($height != 0){
					$('.explore .playlist .figure').css('height', $height);
				}

				$(".see-more > a").hover(function(){
                    $(this).parents(".figure").find(".more-song").stop(true, false).fadeIn();

                }, function() {
                     $(this).parents(".figure").find(".more-song").stop(true, false).fadeOut();
                });


			} else {

				$(idContent).html(html);

				$height = $('.playlist .figure').width();
				if($height != 0){
			    	$('.explore .playlist .figure').css('height', $height);
				}

				$(".see-more > a").hover(function(){

		   			 $(this).parents(".figure").find(".more-song").stop(true, false).fadeIn();
				}, function() {
					 $(this).parents(".figure").find(".more-song").stop(true, false).fadeOut();
				});


				$(".wrap-tool-action, .wrap-tool-share-action").removeAttr("style");
				$('.tooltip, .tooltip-share, .wrap-tool-action, .wrap-tool-share-action , #showList, #showLyric, .onplay').click(function(event) {
					  event.stopPropagation();
					});
				$("#showList, #showLyric, #showConfig").animate({
					left: "0"
					 }, 200, function() {$(".overlay").remove(); $("#showLyric-bt").removeClass("active");
				});
				if($('.sort-header').length > 0){

			        $('#page').scroll(function() {
						if ($(this).scrollTop() > 100) {
							$('.sort-header').slideDown();
						} else {
							$('.sort-header').slideUp();
						}
			        });
			    }

				if(isVideo && !isAds){
                    // khoi tao videojs
                    initVideo("my-video");

					$("html, body").animate({ scrollTop: 0 }, "1");
				}

				if(isStartalk){
					var dateTime = new Date($('#countdown').data('time'));
					var dateNow = new Date();

					if(dateTime <= dateNow){
						$(".time").css('display','none');
					} else{
						if($("#countdown").length > 0){
							$("#countdown").countdown({
								date: new Date($('#countdown').data('time')).toString(),
								format: "on"
							});
						}
			
					}
				}
				if(isAnswers){
					try {
						var newId = "NEWID-"+$.now();
		      			$('#contentElement').attr('id', newId);
		      			var timeStreaming = $('#timeStreaming').text();


			            var player = videojs('#'+newId);
			            player.ready(function() {
			                player.currentTime(timeStreaming);
			            });


					  	videojs_player.on('click', function(){
					   	   var myPeakPlayer = window.myPeakPlayer;
					   		   if($('#playSongButton').hasClass('active')){
					   			        myPeakPlayer.playTrack();
					   		    }
					   	});
				    	var myPeakPlayer = window.myPeakPlayer;
				    	if($('#playSongButton').hasClass('active')){
				  		        myPeakPlayer.playTrack();
				    	 }


		      		}
		      		catch(err) {

					}
				}

				if(isHome) {
                    initSlideBanner();

                    $('#menu li a').removeClass('active');


				    $height = $('.playlist .figure').width();
				    if($height != 0){
				    	$('.explore .playlist .figure').css('height', $height);
					}
					$height = $('.playlist .figure').width();
					if($height != 0){
				    	$('.playlist .figure').css('height', $height);
				    }

                    initSlideTVShow();
                    initSlidePlaylist();
				}

			}

			if ($(".subcategory").length > 0) {
    			$(".subcategory .scroll-cate").height($(window).height() - 160);
    			$(".scroll-cate").mCustomScrollbar("update");
			}
			$('[data-toggle="tooltip"]').tooltip();
            $( "#bg-load" ).remove();

            //Init popever
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


		    //

            FB.XFBML.parse();

            setActivePlayTrackAfterLoadAjax();
            if($("#wrapanwser").length > 0){
				$("#wrapanwser").emoticonize(true);
			}
            
		},
		error:function(){
			// window.location.href='/404.html';
		}
	});

	$("body").removeClass("fixScroll");
  	$("#wrapper").removeClass("vi");

	return false;
}

function loadAjaxPage(object) {
	return loadAjaxFunction(object);
}

var foo; //debug
var not_the_first_time = false;
function playVideo(url) {
	$('#MY_VIDEO_1').get(0).volume = 0.5;
    if (not_the_first_time) {
        videojs('MY_VIDEO_1').dispose();
        var video_tag = $('<video>').attr('id', 'MY_VIDEO_1').addClass('video-js vjs-default-skin');
        $('#vast-video-container').prepend(video_tag);
    } else {
        not_the_first_time = true;
    }
	$('#MY_VIDEO_1').get(0).volume = 0.5;
    var video = videojs('MY_VIDEO_1', {
        preload: 'auto',
        width: 854,
        height: 480
    });
    video.controls(true);
    video.src([
        {
            src: $('#videoDetail').val(),
            type: "video/mp4"
        }
    ])
    video.ads();
    video.vast({
        url: url
    });
    video.play();

    video.on("ended", function()
    {
        $('.video-suggest').show();
        video.pause();
    });
    video.on("play", function(){
        $('.video-suggest').hide();

    });

    foo = video; //debug
}
function checkLikeSong(obj){
	var userId = $('#nhacso_user_id').val();
	if (userId === '') {
		loginPopup();
	} else {
		var url    		= $(obj).attr('url');
		var path 		= $(obj).attr('url');
		var isLiked     = $(obj).hasClass('is-liked');
		var checkText 	= $(obj).attr('check-click');

		var objectId 	= $(obj).attr('data-object-id');
		var objectType 	= $(obj).attr('data-object-type');

		if(isLiked)
	    {
	    	var text = $(obj).find('button').html();
	    	text = text.replace('Đã thích', 'Thích');
	    	$(obj).find('button').html(text);

	    	$(obj).find('button').removeClass('btn-like active').addClass('btn-like');
			$(obj).removeClass('like');
			$(obj).removeClass('is-liked');

			var countLike = parseInt($(obj).find('span.countLike').html());
	    	countLike = countLike - 1;
	    	$('span[class=countLike]').html(countLike);

	    }else{

	    	var text = $(obj).find('button').html();
	    	text = text.replace('Thích', 'Đã thích');
	    	$(obj).find('button').html(text);

	    	$(obj).find('button').removeClass('btn-like').addClass('btn-default active');
			$(obj).addClass('like');
			$(obj).addClass('is-liked');

			var countLike = parseInt($(obj).find('span.countLike').html());
	    	countLike = countLike + 1;
	    	
	    	$('span[class=countLike]').html(countLike);

	    }
		$.ajax({
			url: url,
			type: 'get',
			success: function(result){
				if(result == 1)
				{

				}
			}
		});
	}
	return false;
}

function checkLikeSongPlayer(obj){
	var userId = $('#nhacso_user_id').val();
	if (userId === '') {
		loginPopup();
	} else {
		var url    		= $(obj).attr('url');
		var path 		= $(obj).attr('url');
		var isLiked     = $(obj).hasClass('active');
		var checkText 	= $(obj).attr('check-click');

		var objectId 	= $(obj).attr('data-object-id');
		var objectType 	= $(obj).attr('data-object-type');

		if(isLiked)
	    {
	    	$(obj).removeClass('active');
	    }else{
	    	$(obj).addClass('active');

	    }
		$.ajax({
			url: url,
			type: 'get',
			success: function(result){
				if(result == 1)
				{

				}
			}
		});
	}
	return false;
}

function likeAction(obj){
	var objectId   = $(obj).attr('object-id');
    var objectType = $(obj).attr('object-type');

	var userId = $('#nhacso_user_id').val();
	if (userId === '') {
		loginPopup();
	} else {
		var url    		= $(obj).attr('url');
		var path 		= $(obj).attr('url');
		var likeCount   = $('#like-count').text();
		var isLiked     = $(obj).hasClass('is-liked');
		if(isLiked)
	    {
			likeCount = parseInt(likeCount);
			if(likeCount > 0)
				likeCount = parseInt(likeCount) - 1;

			//$('#like-count').html(likeCount);
			var url = '/playlists/ajax-like?view_type=' + objectType +'&action_type=unlike&item_id=' + objectId;
			var _tempid = objectId.replace(/=/g, '_');
			$("#"+_tempid).find(".like-object").removeClass("like");
			$(obj).removeClass('like');
			$(obj).removeClass('is-liked');

	    }else{
	    	likeCount = parseInt(likeCount) + 1;
	    	//$('#like-count').html(likeCount);
	    	var url = '/playlists/ajax-like?view_type=' + objectType +'&action_type=like&item_id=' + objectId;
	    	var _tempid = objectId.replace(/=/g, '_');
			$("#"+_tempid).find(".like-object").addClass("like");
			$(obj).addClass('like');
			$(obj).addClass('is-liked');

	    }
		$.ajax({
			url: url,
			type: 'get',
			success: function(result){
				if(result == 1)
				{

				}
			}
		});
	}
	return false;
}
function initVideo(id){
    // pause player audio
    var myPeakPlayer = window.myPeakPlayer;
    if($('#playSongButton').hasClass('active')){
        myPeakPlayer.playTrack();
    }

	var newId = "NEWID-"+$.now();
	$("#"+id).attr('id', newId);

	videojs(newId, { "controls": true, "autoplay": true, "preload": "auto" }, function() {
		
		var k = 20;
		var intervalads = setInterval(function(){
			k--;
			if(k == 10){
				
	        	$('#adv-video').show();
	    	}
	    	if(k == 0){
	    		clearInterval(intervalads);
	        	//$('#adv-video').css("opacity", "0.2");
	        	//$('.close-1').trigger('click')
	        	 $(".close-1").css("display","none");
		   		 $( ".block-adv .thumb" ).css( "slow","none");
		        $(".block-adv .thumb").css("display","none");
		        $(".block-adv .open").css("display","block");
	    	}
		}, 1000);

		var vid = this;
		vid.on("ended", function(){
			$('#loadingVideo').show();
	        var i = 8;

	        var interval = setInterval(function(){
	              i--;
	              $('#countDown').html(i);
	              if(i == 0){
	                  clearInterval(interval);
	                  if($('.vjs-loading').css('display') !== 'none' && $('#playNext').length > 0)
	                  {
	                    //$('#playNext').click();
	                    window.location.href = $('#linkNext').val();
	                  }
	              }
	        }, 1000);
		});
    });

    $("#"+newId).removeClass('vjs-controls-disabled');
}

function openModal(id, link, idlink){
	$(idlink).attr('src', link);
    $(id).modal('show');
}

//js xu ly yeu thich
$(document).ready(function () {


	// share facebook
	$('.click_share_kt').on('click',function(){

		var object_type=$(this).attr('object_type');
		var text_share=$('#playerDisplay .songName>a').text();
		var link_share=$('#playerDisplay .songNameContainer').attr('href');
		var style_song=$('#playerDisplay .songNameContainer').attr('style');
		var global_image=$(this).attr('global_image');
		if(object_type!='song'){
			$('.not_song_kt').css('display',"block");
			var text_song='Bài hát:'+$('#playerDisplay .singerName >a:first').text(); //ten bai hat
			var artist_song=$('#playerDisplay .singerName >a:last').text();
			var link_share_song=$('#playerDisplay .singerName > a').attr('href');
			var link_share_pl=$('#playerDisplay .songName>a').prop('href');
			var artist=$(this).attr('artist');
			if(typeof artist !== "undefined"){
					$('.text_notsong_artist_p').css('display',"block");
					$('.text_notsong_artist').html($(this).attr('artist'));
			}else{
				$('.text_notsong_artist_p').css('display',"none");
			}
			$('.img-pl-share').attr('style',global_image);
			$('.img-song-share').attr('style',style_song);
			$('.artist_song').html(artist_song);
			$('.text_notsong').html(text_share);
			$('.not_song_kt .button-share').attr("onclick","javascript:window.open('https://www.facebook.com/sharer/sharer.php?u="+link_share_pl+"','','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480 ')");
			$('.text_song_kt').html(text_song);
			$('.share_song_kt ').attr("onclick","javascript:window.open('https://www.facebook.com/sharer/sharer.php?u="+link_share_song+"','','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480 ')");
		}else{
			var artist_song=$('#playerDisplay .singerName >a:first').text();
			$('.artist_song').html(artist_song); 
			$('.img-song-share').attr('style',style_song);
			$('.not_song_kt').css('display',"none");
			$('.text_song_kt').html(" Bài hát:"+text_share);
			$('.share_song_kt ').attr("onclick","javascript:window.open('https://www.facebook.com/sharer/sharer.php?u="+link_share+"','','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480 ')");
			$('.share_song_kt').trigger('click');
			$('#box-share').css('display','none');
		}
		return false;
	})


	// load ajax load more

	$(document).on("click", ".is-load-ajax-more", function(e) {
		var url 		 = $(this).attr('href');
		var viewtype  	 = $(this).attr('viewtype');
		var lastPage  	 = $(this).attr('last-page');
		var page      	 = $(this).attr('page');
		var idcontent    = $(this).attr('id-content');
		var classcontent = $(this).attr('data-class-content');

		ga("send", "pageview", url);

		$('.loading-home').show();

		if(page)
			url += '&page=' + page;
		if(classcontent)
		{
			idcontent = idcontent + ' .'+classcontent;

		}

		$.ajax({
			url: url,
			type: 'get',
			success: function(html){
				if(lastPage != page){
					$( idcontent ).append(html);
					$('.loading-home').hide();
					$('.is-load-ajax-more').attr('page', parseInt(page) + 1);
					$(".wrap-tool-action, .wrap-tool-share-action").removeAttr("style");
					$('.tooltip, .tooltip-share, .wrap-tool-action, .wrap-tool-share-action , #showList, #showLyric').click(function(event) {
						  event.stopPropagation();
						});
				} else{
					$('.is-load-ajax-more').remove();
					$('.loading-home').hide();
				}
			},
			error:function(){
				// window.location.href='/404.html';
			}
		});
		return false;
	});

	$(document).on("click", "a.is-load-ajax", function(e) {
		return loadAjaxFunction(this);
	});



});

function loginPopup() {

	$('#signinModal').find('.ifr-login').attr('src',$('#signinModal').find('iframe').attr('data-src'));
    $('#signinModal').modal('toggle');
}

function createPlaylistFromListSongs(){

	var userId = $('#nhacso_user_id').val();
	if (userId === '') {
		loginPopup();
		return;
	}

	$('body').append('<div id="bg-load"><div class="loader"></div></div>');

	var listSongs = [];
	$('#listsongs').find('.itemsong').each(function(){
		var item = $(this).attr('id');
		listSongs.push(item);
	});

	var data = {songIds:listSongs}

	var form = document.createElement("form");
	form.action = '/tao-playlist.html';
	form.method = 'post';
	form.target = '_blank';

	if (data) {
		for (var key in data) {
			var input = document.createElement("textarea");
			input.name = key;
			input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
			form.appendChild(input);
	    }
	}
	form.style.display = 'none';
	document.body.appendChild(form);
	form.submit();
	document.body.removeChild(form);
	$( "#bg-load" ).remove();
	return false;
}

function setDataLogin(data){

	$('body').append('<div id="bg-load"><div class="loader"></div></div>');

	$('#nhacso_user_id').val(data.id);

	var redirectUri = document.location.href;
	var html = '<a href="#" class="avatar" data-toggle="dropdown">\
		            <img src="'+ data.link_url + '/' + data.location + '"></a>\
		            <div class="user-lightbox">\
		        <ul class="nav">\
		            <li class="user-create-playlist"><a target="_blank" href="/tao-playlist.html">tạo playlist</a></li>\
		            <li><a class="is-push-url is-top" onclick="return loadAjaxPage(this)" data-id-content=".wrap-page" href="/tu-nhac-'+ data.id +'.html">Trang cá nhân</a></li>\
		            <li><a class="is-push-url is-top" onclick="return loadAjaxPage(this)" data-id-content=".wrap-page" href="/tu-nhac-'+ data.id +'.html?view_type=listenSong">Nghe gần đây</a></li>\
		            <li><a href="/users/edit" target="_blank">Chỉnh sửa</a></li>\
		            <li class="user-logout"><a href="/dang-xuat.html"><i class="fa fa-sign-out"></i> Đăng xuất</a></li>\
		        </ul>\
		        </div>';
    $('.login').html(html);
    $('.login').addClass('user').removeClass('login');


	resetConfig();
	setLogoutUrl();
	repareLikedStatusForSongs();
	reloadCurrentPage(redirectUri);
	getListSongListen();

	document.location.reload(true);

	$('body').removeClass('modal-open');
}

function setListUserFavorite(data){

	var profileUrl = '/tu-nhac-'+ data.id +'.html';
	var configElementHtml = '\
	<li>\
		<a onclick="return loadAjaxPage(this)" class="is-push-url is-top"\
		data-id-content=".wrap-page" href="'+ profileUrl +'?view_type=lovePlaylist">Playlist '+ data.fullName +' thích</a>\
		<i class="fa fa-chevron-right"></i>\
	</li>\
    <li>\
		<a onclick="return loadAjaxPage(this)" class="is-push-url is-top" data-id-content=".wrap-page" \
			href="'+ profileUrl +'?view_type=loveAlbum">Album '+ data.fullName +' thích</a>\
		<i class="fa fa-chevron-right"></i>\
	</li>\
    <li><a onclick="return loadAjaxPage(this)" class="is-push-url is-top" data-id-content=".wrap-page" \
			href="'+ profileUrl +'?view_type=loveVideo">Video '+ data.fullName +' thích</a>\
		<i class="fa fa-chevron-right"></i> \
	</li>\
    <li><a onclick="return loadAjaxPage(this)" class="is-push-url is-top" data-id-content=".wrap-page" \
    	href="'+ profileUrl +'?view_type=loveSong">Bài hát '+ data.fullName +' thích</a>\
    	<i class="fa fa-chevron-right"></i> \
    </li>';


	return configElementHtml;
}

function resetConfig(){
	$(".config").on({
		click : function(e){
			e.preventDefault();
			$(this).toggleClass("active");
			if ($(this).hasClass("active") ) {
				$("#showPlaylist, .icon-lyric").removeClass("active");
				$("#showConfig").animate({
					left: "200"
					 }, 200, function() {
						 if($(".overlay").length > 0){}else{$("#container").append("<div class='overlay'></div>");}

						$("#showList, #showLyric").animate({
							left: "0"
							 }, 200, function() { $("#showLyric-bt").removeClass("active");
						});
				});
				$('body').on({
					'mousewheel': function(e) {
						if (e.target.id == 'el') return;
						e.preventDefault();
						e.stopPropagation();
						}
					});
			} else {
				$("#showList, #showLyric , #showConfig").animate({
					left: "0"
					 }, 200, function() {$(".overlay").remove(); $(".config").removeClass("active");
				});
				$('body').unbind("mousewheel");
			}
			return false;
		}
	});
}

function reloadCurrentPage(redirectUri){

	$.ajax({
		url: redirectUri,
		type: 'get',
		success: function(html){
			$('.wrap-page').html(html);
			$(".wrap-tool-action, .wrap-tool-share-action").removeAttr("style");
			$('.tooltip, .tooltip-share, .wrap-tool-action, .wrap-tool-share-action , #showList, #showLyric').click(function(event) {
				  event.stopPropagation();
				});

			$("#showList, #showLyric, #showConfig").animate({
				left: "0"
				 }, 200, function() {$(".overlay").remove(); $("#showLyric-bt").removeClass("active");
			});

			$("html, body").animate({ scrollTop: 0 }, "1");

		    if ($('#slide_banner').length > 0) {
                initSlideBanner();
		    }

		    if ($('#cakhuc_noibat').length > 0) {
		    	$('#cakhuc_noibat').slick({
	              infinite: false,
	              speed: 300,
	              slidesToShow: 4,
	              slidesToScroll: 4,
	              variableWidth: true
	            });
		    }

		    $height = $('.playlist .figure').width();
		    if($height != 0){
		    	$('.explore').css('height', $height);
			}
			$height = $('.playlist .figure').width();
			if($height != 0){
		    	$('.playlist .figure').css('height', $height);
		    }

			if($('#list-content').length > 0 ) {
				$('#list-content').jScrollPane();
			}

			if ($(".expand-song").length > 0) {
				$('.expand-song').readmore({
					maxHeight: 200,
					moreLink: '<a href="javascript:void(0)" class="m-d-s"><i class="fa fa-chevron-down"></i></a>',
					lessLink: '<a href="javascript:void(0)" class="m-d-s"><i class="fa fa-chevron-up"></i></a>',
					sectionCSS: 'display: block;',
				});
			}

		     $( "#bg-load" ).remove();
		     $( ".modal-backdrop" ).remove();
		     FB.XFBML.parse();
		},
		error:function(){
			// window.location.href='/404.html';
		}
	});
	return false;
}

function closeLoginPopup(){
	$('.popup-login').remove();
}

function repareLikedStatusForSongs(){

	$.ajax({
	    dataType: "json",
		url: '/songs/load-all-user-liked-songs',
		success: function(data){
			updateClassLikedObjects(data);
		}
	});

}

/**
 * Cập nhật url đăng xuất
 * @author hienpt
 */
function setLogoutUrl(){

	$.ajax({
	    dataType: "json",
		url: '/users/get-logout-url',
		success: function(rs){
			$('.logout').attr('href',rs);
		}
	});

}

/**
 * Load lại danh sách song đang hát khi login
 * @param object obj
 */
function reloadListSongs(obj){

	var objectType = obj.objType;
	var dataId 	   = obj.objId;
	var songId 	   = obj.songId;

	var url = '';
	if(objectType == 'album'){
		url = '/albums/ajax-get-detail-album';
	}
	if(objectType == 'song'){
		url = '/songs/ajax-get-detail-song';
	}
	if(objectType == 'playlist'){
		url = '/playlists/ajax-get-detail-playlist';
	}

	$.ajax({
	    dataType: "json",
		url: url,
		data:{dataId: dataId},
		success: function(result){
			if(objectType == 'album'){
				var songsArray = [];
				var listSong = result.list_song;
				var lyric = '';
				// add data song
				if(listSong.length > 0){
					for ( var i = 0; i < listSong.length; i++) {
						if(listSong[i].lyric != null){
							lyric = listSong[i].lyric.lyric_content;

							lyric = lyric.replace(/\\n/g, "<br />");
						}
						songsArray.push({objectId: result.id, objectType: 'album', name: listSong[i].name, url:listSong[i].linkUrl+'/'+listSong[i].location , singer:result.list_song[i].singers[0].alias , bgSong: result.img_data, lyric: lyric });
					}
				 }
				 myPeakPlayer.addSongs(songsArray);
				// add scroll list song
				var api = $('.style-song').jScrollPane({}).data('jsp');
				 api.getContentPane().html(myPeakPlayer.getHTMLPlaylist('listsongs','','itemsong'));
			     api.reinitialise();

			}else if(objectType == 'song'){
				myPeakPlayer.addSong(result.song_name, result.url_song, result.singer, result.img_url, result.song_id, result.lyric);
			    // creat scroll list song
			    var api = $('.style-song').jScrollPane({}).data('jsp');
				   api.getContentPane().html(myPeakPlayer.getHTMLPlaylist('listsongs','','itemsong'));
			       api.reinitialise();
			}else if(objectType == 'playlist'){
				var songsArray = [];
				var listSong = result.list_song;
				// add data song
				if(listSong.length > 0){
					for ( var i = 0; i < listSong.length; i++) {
						if(listSong[i].lyric != null){
							lyric = listSong[i].lyric.lyric_content;

							lyric = lyric.replace(/\\n/g, "<br />");
						}
						songsArray.push({objectId: result.id, objectType: 'playlist', name: listSong[i].name, url:listSong[i].linkUrl+'/'+listSong[i].location , singer:result.list_song[i].singers[0].alias , bgSong: result.list_song[i].singers[0].linkUrl+'/'+ result.list_song[i].singers[0].location, lyric: lyric});
					}
				}
				myPeakPlayer.addSongs(songsArray);
				// add scroll list song
				var api = $('.style-song').jScrollPane({}).data('jsp');
				api.getContentPane().html(myPeakPlayer.getHTMLPlaylist('listsongs','','itemsong'));
			    api.reinitialise();
			}

			$('#listsongs').find('li.itemsong').each(function(){
				if($(this).attr('songid') == songId){
					$(this).addClass('active');
				}
			});
			// set attribute
			// click list song at showlist
			listSongList('notAddListen');

		}
   });
}

function onHideShowList(obj){

	$('.more').hide();
}
function onShowList(obj, datahref, title){

	var objectId = $(obj).attr('data-id');



	var active 	 = $(obj).parent().attr('data-active');
				   $(obj).parent().attr('data-active', 1);
	if(active == 0){
		var now = (new Date()).getTime();
		var cache = $.jStorage.get(objectId);
		var expires = cache ? cache.expires : 0;
		if(cache && now < expires){
			var result ='<span><span>'+title+'</span></span>'+ cache.value;
			$('#item'+objectId).html(result).show('fast');
			
		}else{
			var	datahref = datahref;
			$('#item'+objectId).empty();
			$.ajax({
				url: datahref,
				success: function(html){
					var result ='<span><span>'+title+'</span></span>'+html;
					$('#item'+objectId).html(result).show('fast');
					
					var day = 1000 * 60 * 60 * 3;
					$.jStorage.set(objectId, { value : html , expires : now + day } );
				}
			});

		}

		
	}else{
		$('#item'+objectId+' span span').html(title);
		$('#item'+objectId).show('fast');
	}
	

}
function outShowList(obj){
	var objectId = $(obj).attr('data-id');
	$("#item"+objectId).stop(true, false).fadeOut();
   	//$(obj).parents(".figure").find(".more-song").stop(true, false).fadeOut();

}

function onHideShowBGList(obj){

	$('.more').hide();
}
function onShowBGList(obj, datahref){
	
	var objectId = $(obj).attr('data-id');
	var	datahref = datahref;
	$('#item'+objectId).empty();
		$.ajax({
			url: datahref,
			success: function(html){
				$('#item'+objectId).html(html).show('fast');

			}
		});

}
function outShowBGList(obj){
	var objectId = $(obj).attr('data-id');
	$("#item"+objectId).stop(true, false).fadeOut();
   	//$(obj).parents(".figure").find(".more-song").stop(true, false).fadeOut();

}
/**
 * Cập nhật url đăng xuất
 * @author PhongDT7
 */
function getListSongListen(){

	var	url = '/songs/ajax-list-song-listen';

	$.ajax({
		url: url,
		type: 'get',
		dataType: "html",
		success: function(html){
			$('#listenUser').html(html);
		}
	});

}

function disableScroll(){
	$("body").addClass("fixScroll");
	$("#wrapper").addClass("vi");
}
function releaseScroll(){

	$("body").removeClass("fixScroll");
	$("#wrapper").removeClass("vi");
}

function addRelay(obj){
	var comment = $(obj).parent().parent().find('.comment-reply');
    if(comment.css('display') == "none")
    {
        comment.show();
    }else
        comment.hide();
        
}

function closeAds(obj){
	$(".close-1").css("display","none");
    $( ".block-adv .thumb" ).css( "slow","none");
        $(".block-adv .thumb").css("display","none");
        $(".block-adv .open").css("display","block");
        
}
function openAds(obj){
	$( ".block-adv .thumb" ).css("display","block")
        $(".block-adv .thumb").css("display","block");
        $(".close-1").css("display","block");
        $(".block-adv .open").css("display","none");
        
}
function addSong(obj) {
    if($(obj).is(":checked"))
    {
        var url = $(obj).attr('data-url');
        $.get(url, function(data, status){
              $.bootstrapGrowl("Thêm bài hát vào Playlist thành công!", {
                  type: 'info',
                  align: 'center',
                  width: 'auto',
                  allow_dismiss: true
              });
        });

    } else {

    }
}
function showDescAlbum(obj) {

    $('.cut-desc').css("display","none");
    $('.full-desc').css("display","block");

}
function hideDescAlbum(obj) {

    $('.full-desc').css("display","none");
    $('.cut-desc').css("display","block");

}

function malert(msg, title, callback, sbcallback) {
    title = title || 'Thông báo';
    callback = callback || function (e) {};

    if ($("#modal_alert").attr('id') != 'modal_alert') {
        var html = ''+
        '<div class="modal fade" id="modal_alert" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
            '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                    '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                        '<h4 class="modal-title" id="myModalLabel">Thông báo</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                        '<p>Thành công!</p>' +
                    '</div>' +
                    '<div class="modal-footer">' +
                        '<button type="button" class="btn btn-success">Tôi đồng ý</button>' +
                        '<button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

        $( "body" ).append(html);
    }

    $("#modal_alert .btn-success").unbind( "click" );
    if (sbcallback) {
        $("#modal_alert .modal-footer").show();
        $("#modal_alert .btn-success").bind( "click", sbcallback );
    } else {
        $("#modal_alert .modal-footer").hide();
    }

    $("#myModalLabel").html(title);
    $(".modal-body").html('<p>'+msg+'</p>');

    $('#modal_alert').modal('show');
    $('#modal_alert').on('hidden.bs.modal', callback);
}


function addTagsToList(obj) {
      
        var sumTag    = $('#tags').val();
        var viewType  = $('#viewType').val();
        var countTag  = sumTag.split(",");

        if(countTag.length >= 3){
            $.bootstrapGrowl("Thêm nhiều nhất là 3 tag", {
                type: 'success',
                align: 'right',
                width: 300, 
                offset: {from: 'top', amount: 50},
                allow_dismiss: true
            });
            return false;
        }

        if($('#tags').val() == '')
        {
            $('#tags').val($(obj).attr('data-id'));
        }else{
        	if(countTag.length < 3){
            	$('#tags').val($('#tags').val()+','+$(obj).attr('data-id'));
            }
        }

        if($('#tags_name').val() == '')
        {
            $('#tags_name').val($(obj).attr('data-alias'));
        }else{
        	if(countTag.length < 3){
            	$('#tags_name').val($('#tags_name').val()+'+'+$(obj).attr('data-alias'));
            }
        }

        var tagsId ='';
        if(sumTag != ''){
            var tagsId = '/'+sumTag;
        }
        // update lai data
        sumTag    = $('#tags').val();
        
        
        var tags_name = $('#tags_name').val().replace(/ /g, "+");

        var urlAjax = '/kham-pha-playlist/'+tags_name;
        history.pushState('', 'New URL: ' + urlAjax, urlAjax);

        $.bootstrapGrowl("Thêm tag " + $(obj).attr('data-title') + ".", {
            type: 'success',
            align: 'right',
            width: 300, 
            offset: {from: 'top', amount: 50},
            allow_dismiss: true
        });


        var tagsIds = '<a onclick="removeTagsToList(this);" data-id="'+$(obj).attr('data-id')+'" data-title="'+$(obj).attr('data-title')+'" data-alias="'+$(obj).attr('data-alias')+'" href="javascript:void(0)">'+$(obj).attr('data-title')+'<i class="fa fa-times" data-toggle="tooltip" data-placement="top" data-original-title="Xóa chủ đề này"></i></a>';
       
        $('#tagsIds').append(tagsIds);
       
        var dataHref  = '/playlists/ajax-list-playlist-by-tags?tags_name='+tags_name+'&tags_id='+sumTag+'&view_type='+viewType;
        var urlTags   = '/playlists/ajax-relation-tags?tags_id='+ sumTag +'&view_type='+ $('#viewType').val();

        $.ajax({
            url: urlTags ,
            type: 'get',
            success: function(htmlTags){
            	$("#list_tag" ).removeAttr( 'style' );
                $("#list_tag").html(htmlTags);
                
                $("#list_tag").removeClass("slick-initialized slick-slider");

                $('#list_tag').slick({
                    infinite: true,
                    speed: 500,
                    centerMode: true,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                });

                $(".see-more > a").hover(function(){
                    $(this).parents(".figure").find(".more-song").stop(true, false).fadeIn();

                }, function() {
                     $(this).parents(".figure").find(".more-song").stop(true, false).fadeOut();
                });

            }
        });

        $.ajax({
                url: dataHref ,
                type: 'get',
                success: function(html){
              
                    html=$.parseJSON(html);
                    $("#playlist-tags").html(html.html_text);
                    $("#countPlaylist").html(html.count_playlist);
                    $(".see-more > a").hover(function(){
                        $(this).parents(".figure").find(".more-song").stop(true, false).fadeIn();

                    }, function() {
                         $(this).parents(".figure").find(".more-song").stop(true, false).fadeOut();
                    });
                    $height = $('.playlist .figure').width();
                    $('.explore .playlist .figure').css('height', $height); 
                    //history.pushState('', 'New URL: ' + dataHref, dataHref);
                    $( "#bg-load" ).remove();
                }
            });
        if(tags_name != "")
        {
        	$('#highlightLink').attr('href', '/kham-pha-playlist/'+tags_name+'?view_type=highlight');
        	$('#latestLink').attr('href', '/kham-pha-playlist/'+tags_name+'?view_type=latest');

        	$('#listenLink').attr('href', '/kham-pha-playlist/'+tags_name+'?view_type=listen');
        }else{
        	$('#highlightLink').attr('href', '/kham-pha-playlist.html?view_type=highlight');
        	$('#latestLink').attr('href', '/kham-pha-playlist.html?view_type=latest');

        	$('#listenLink').attr('href', '/kham-pha-playlist.html?view_type=listen');
        }
        

        $('#loadMoreLink').attr('href', '/playlists/ajax-list-playlist-by-tags-id?tags_id='+sumTag+'&view_type='+ $('#viewType').val());
        $('#loadMoreLink').attr('page', 2);


    }
    function openAddLyric(id, obj){
    	var songname = $(obj).attr('data-song-name');
    	$("#song_id").val(id);
    	$("#name-song-detail").html(songname);
    	$('#song-notes').modal('show');

    }
    function addLyric(obj){

	    var userId = $('#nhacso_user_id').val();
	    if (userId === '') {
	        loginPopup();
	    }else{

	    var lyric_content   = $( "#lyric_content" ).val();
	    var song_id         = $( "#song_id" ).val();


	    if(lyric_content == '' || !lyric_content)
	    {
	      alert("Vui lòng lời bài hát");
	      return false;
	    }
	    if(song_id == '' || !song_id)
	    {
	      alert("Bài hát đã có lời");
	      return false;
	    }


	    var url = '/songs/add-lyric-song';
	    var data = $("#addLyric").serialize();

	    $('body').append('<div id="bg-load" style="z-index: 9999; background-color: rgb(0, 0, 0); position: fixed; height: 100%; width: 100%; opacity: 0.5; top: 0; left: 0;"><div class="loader"></div></div>');

	    $.ajax({
	        url: url,
	        type: 'post',
	        data: data,
	        success: function(rs){
	            if(rs == 0){
	              $( "#bg-load" ).remove(); 
	          
	                  $.bootstrapGrowl("Thêm không thành công", {
	                      type: 'danger',
	                      align: 'right',
	                      width: 300, 
	                      offset: {from: 'top', amount: 50},
	                      allow_dismiss: true
	                  });


	                  $(obj).attr('data-clicked',0);
	            }
	            else{
	              $( "#bg-load" ).remove(); 
	                  $.bootstrapGrowl("Thêm thành công", {
	                      type: 'success',
	                      align: 'right',
	                      width: 300, 
	                      offset: {from: 'top', amount: 50},
	                      allow_dismiss: true
	                  });


	                  $('#lyric_content').val('');
	                  $('#song-notes').modal('toggle');
	                  //window.location.href = rs;
	            }
	     
	        },error: function(){
	          $( "#bg-load" ).remove(); 
	        }
	      });
	      return false;
	    }
	}

	function showDownLoad(obj){
		if($(obj).parent().parent().hasClass('show')){
	        $(obj).parent().parent().parent().find('li').removeClass('show')
	    }else {
        	$(obj).parent().parent().parent().find('li').removeClass('show');
        	$(obj).parent().parent().addClass('show')
        }
	}

    function removeTagsToList(obj) {

        $.bootstrapGrowl("Bỏ tag " + $(obj).attr('data-title') + ".", {
            type: 'danger',
            align: 'right',
            width: 300, 
            offset: {from: 'top', amount: 50},
            allow_dismiss: true
        });

        var dataId 		= $(obj).attr('data-id');
        var dataTitle 	= $(obj).attr('data-alias');
        var viewType  	= $('#viewType').val();
        $(obj).remove();
        
        var tags_id = $('#tags').val();
        var arrTagsId = tags_id.split(",");

        var tags_name = $('#tags_name').val();
        var arrTagsName = tags_name.split("+");
        
        
        var resultId = arrTagsId.filter(function(elem){
           return elem != dataId; 
        });
        
        var resultName = arrTagsName.filter(function(elem){
           return elem != dataTitle;

        });

        $('#tags').val(resultId.toString());
        resultName = resultName.join('+');
        $('#tags_name').val(resultName);
        var sumTag = $('#tags').val();
        var tags_name = $('#tags_name').val().replace(/ /g, "+");

        var tagsId ='';
        if(sumTag != ''){
            var tagsId = '/'+sumTag;
        }

        var tagsName ='';
        if(tags_name != ''){
            var tagsName = tags_name;
        }
        var urlAjax = '/kham-pha-playlist/'+tagsName;
        history.pushState('', 'New URL: ' + urlAjax, urlAjax);

        var countTag = sumTag.split(",");

        var dataHref = '/kham-pha-playlist.html?tags_name='+tags_name+'&tags_id='+sumTag;

        var urlTags = '/playlists/ajax-relation-tags?tags_id='+ sumTag +'&view_type='+ $('#viewType').val();
        $.ajax({
            url: urlTags ,
            type: 'get',
            success: function(htmlTags){
            	$("#list_tag").removeAttr('style');
                $("#list_tag").html(htmlTags);
                
                $("#list_tag").removeClass("slick-initialized slick-slider");

                $('#list_tag').slick({
                    infinite: true,
                    speed: 500,
                    centerMode: true,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                });

                $(".see-more > a").hover(function(){
                    $(this).parents(".figure").find(".more-song").stop(true, false).fadeIn();

                }, function() {
                     $(this).parents(".figure").find(".more-song").stop(true, false).fadeOut();
                });

            }
        });
        var dataHref  = '/playlists/ajax-list-playlist-by-tags?tags_name='+tags_name+'&tags_id='+sumTag+'&view_type='+viewType;    

        $.ajax({
            url: dataHref ,
            type: 'get',
            success: function(html){

                html=$.parseJSON(html);
                $("#playlist-tags").html(html.html_text);
                $("#countPlaylist").html(html.count_playlist);
                
                $(".see-more > a").hover(function(){
                    $(this).parents(".figure").find(".more-song").stop(true, false).fadeIn();

                }, function() {
                     $(this).parents(".figure").find(".more-song").stop(true, false).fadeOut();
                });
                $height = $('.playlist .figure').width();
                $('.explore .playlist .figure').css('height', $height); 
                //history.pushState('', 'New URL: ' + dataHref, dataHref);
                $( "#bg-load" ).remove();
            }
        });

        if(tags_name != "")
        {
        	$('#highlightLink').attr('href', '/kham-pha-playlist/'+tags_name+'?view_type=highlight');
        	$('#latestLink').attr('href', '/kham-pha-playlist/'+tags_name+'?view_type=latest');

        	$('#listenLink').attr('href', '/kham-pha-playlist/'+tags_name+'?view_type=listen');
        }else{
        	$('#highlightLink').attr('href', '/kham-pha-playlist.html?view_type=highlight');
        	$('#latestLink').attr('href', '/kham-pha-playlist.html?view_type=latest');

        	$('#listenLink').attr('href', '/kham-pha-playlist.html?view_type=listen');
        }

        $('#loadMoreLink').attr('href', '/playlists/ajax-list-playlist-by-tags-id?tags_id='+sumTag+'&view_type='+ $('#viewType').val());
        $('#loadMoreLink').attr('page', 2);
        


    }
    

$(document).on( {
    mouseenter: function(){
        onShowList($(this), $(this).attr('data-list-href'), $(this).attr('title'));
    },
    mouseleave: function(){
        outShowList($(this));
    }
}, ".js-forward, .js-play");

$(document).on("click", ".js-remove-pl", function( e ) {
    e.preventDefault();
    var obj = this;
    var msg = '- Playlist <strong>"'+$(obj).attr('data-title')+'"</strong> của bạn sẽ xóa khỏi hệ thống, bạn có chắc điều này ?</p><p>- Playlist hiện có <span class="bg-danger">&nbsp;'+$(obj).attr('data-songs')+'&nbsp;</span> bài hát và  <span class="bg-danger">&nbsp;'+$(obj).attr('data-view')+'&nbsp;</span> lượt nghe.';
    malert(msg, 'Thông báo từ hệ thống', null, function (){
        $('#modal_alert').modal('hide');
        $.post( "/users/remove-playlist", {id: $(obj).attr('data-id')}, function( data ) {
            if (data == 1) {
                malert("Xóa thành công!", null, function (e) {
                    $(obj).parent().parent().remove();
                    $('.modal-backdrop').remove();
                });
            } else {
                malert("Xóa không công!");
            }
        });
    });
});

$(document).on('click', '.downloadlossless', function(){
	downSongLossLess($(this).attr('data-id'));
});
$(document).on('click', '.download320', function(){
	downSong($(this).attr('data-id'));
});