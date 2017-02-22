$(document).ready(function() {
    $('#loop').toggleClass("active");


    $("#page, #search_auto_complete").click(function(e) {

        if(!$("#showPlaylist").hasClass('active-3s')){
            $("#showPlaylist").removeClass('active');
            $("#showList").animate({
                    bottom: "-450"
                }, 200);
        }
    });


});

if ( typeof window.myPeakPlayer == 'undefined' ) {
    var options = {
        autoPlay : true,
        loop : true,
        random : false
    };

    window.myPeakPlayer = new peakPlayer(options);
}

(function($) {

    $.fn.shuffle = function() {

        var allElems = this.get(), getRandom = function(max) {
            return Math.floor(Math.random() * max);
        }, shuffled = $.map(allElems, function() {
            var random = getRandom(allElems.length), randEl = $(
                allElems[random]).clone(true)[0];
            allElems.splice(random, 1);
            return randEl;
        });

        this.each(function(i) {
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

})(jQuery);

function getUrlGetDataPlayer(objectId, objectType) {
    switch (objectType) {
        case 'song':
            var url = '/songs/ajax-get-detail-song';
            break;
        case 'playlist':
            url = '/playlists/ajax-get-detail-playlist';
            break;
        case 'album':
            url = '/albums/ajax-get-detail-album';
            break;
        case 'bxh':
            url = '/charts/ajax-get-chart-au-my';
            break;
        case 'top100':
            url = '/charts/ajax-get-chart-top100';
            break;
        case 'favorite-songs':
            url = '/users/ajax-get-' + objectType;
            break;
    }

    return url;
}
function buildHtml(data, appendType, objectId, objectType) {
    var html = '';

    if (typeof appendType === 'undefined') {
        html = myPeakPlayer.getHTMLPlaylist();
        $('ul[id=listsongs]').parent().html(html);
    } else if (appendType === 'first') {
        html = myPeakPlayer.buildHtmlItems(data.songs, objectId, objectType);
        html = $('ul[id=listsongs]').html() + html;
        $('ul[id=listsongs]').html(html);
    } else{
        html = myPeakPlayer.buildHtmlItems(data.songs, objectId, objectType);
        $('ul[id=listsongs]').append(html);
    }
    $('div[class=style-song]').mCustomScrollbar({
        theme:"dark-3"
    });

    var totalSong = $('#listsongs li.itemsong').length;

    $('#showList span.total-song').html(totalSong);
    $('#peakPlayer .total-song-player').html(totalSong);

    var objectLink = "", temp;
    if (typeof objectId !== 'undefined' && typeof objectType !== 'undefined') {
        if (objectType == "album") {
            temp = data.first_song;
            objectLink = temp.link_album;
        } else if (objectType == "playlist") {
            objectLink = data.link_playlist;
        } else {
            temp = data.first_song;
            objectLink = temp.link_detail;
        }
        objectName = data.object_name;
        temp = objectType + "-" + objectId.replace(/=/g, '_');
        if(typeof $("#objectTypeCheck").val() == 'undefined'){
            $("body").append(
                "<input type='hidden' id='objectTypeCheck' value='"
                + data.object_type + "'>");
        }else{
            $("#objectTypeCheck").attr('value', data.object_type);
        }
        if(typeof $("#namePlayer").val() == 'undefined'){
            $("body").append(
                "<input type='hidden' id='namePlayer' value='"
                + objectName + "'>");
        }else{
            $("#namePlayer").attr('value', objectName);
        }
        if ($("#" + temp).attr('id') == undefined) {
            $("body").append(
                "<input type='hidden' id='" + temp + "' value='"
                + objectLink + "'>");
        }
    }

    $(".albumNamePlayer").text(data.object_name);
    $(".albumNamePlayer").attr('href', objectLink);
    $(".albumTypePlayer").text(objectType);

    var singer = data.first_song.singer[0];
    var linkVideoDetail = data.first_song.link_video_detail;
    
    if(singer != undefined){
        $(".albumSingerPlayer").text(singer.alias);
        $(".albumSingerPlayer").attr('href', singer.urlDetail);
    }
    
    if (linkVideoDetail != "") {
        $("#videoDetailUrl").attr('onclick', "return loadAjaxPage(this)");
        $("#videoDetailUrl").attr('href', linkVideoDetail);
    } else {
        $("#videoDetailUrl").attr('onclick', "javascript(0)");
    }
}

function checkActiveElement(objectType, object) {


    switch (objectType) {
        case 'song':
            var obj = $(object);
            // if (!obj.hasClass('itemsong') && !obj.hasClass('element-play')) {
            // 	obj = $(object).parent().parent();
            // }
            break;
        case 'playlist':
            var obj = $(object);
            break;
        case 'album':
            var obj = $(object);//.parent().parent().parent().parent().parent();
            // if (!obj.hasClass('element-play')) {
            // 	obj = $(object).parent().parent();
            // }

            // if (!obj.hasClass('element-play')) {
            // 	obj = $(object).parent();
            // }
            break;
        default:
            obj = $(object);
            break;
    }

    return obj;
}

function addResetPlayer(object) {
    

    if($(object).hasClass('active')){
        
    }else{

        //bật lên
        // $("#showList").animate({
        //   bottom: "46"
        // }, 200);
        $("#showPlaylist").addClass('active-3s')

        //đêm ngược 3s tắt
        var i = 3;
        var interval = setInterval(function(){

            i--;       
            if(i == 0){
                clearInterval(interval);
                $("#showList").animate({
                    bottom: "-450"
                }, 200);
                $("#showPlaylist").removeClass('active-3s')
            }
            
        }, 1000);           
    }
    

    if($("a[data-original-title = 'Nghe ngay']").length > 0){

        if($(object).attr('object-id') !== myPeakPlayer.song.objectId && (
            (
            $("a[data-original-title = 'Nghe ngay']")[0].getAttribute('object-id')!== myPeakPlayer.song.objectId
            )  ||
            (
            $("a[data-original-title = 'Nghe ngay']:first").children("i")[0].getAttribute('object-id') !== myPeakPlayer.song.objectId
            )
            )){

            var btn_play =  $("a[data-original-title = 'Nghe ngay']")[0];
            btn_play.classList.remove('active');
        }
    }

    //ga('send', 'pageview', $(object).attr('data-href'));

    $(".overlay-trans").remove();
    // close popup
    $('.wrap-tool-action').hide();
    var objectType = $(object).attr('object-type');
    $('.click_share_kt').attr('object_type',objectType);
    var objectId = $(object).attr('object-id');
    var dataName = $(object).attr('data-name');
    var dataArtists = $(object).attr('data-artists');
    if(typeof dataArtists!=='undefined'){
        $('.click_share_kt').attr('artist',dataArtists);
    }else{
         $('.click_share_kt').removeAttr('artist');
    }   

    var global_image=$('.song-header .global-image >span').attr('style');

    if(typeof global_image!=='undefined'){
        $('.click_share_kt').attr('global_image',global_image);
    }else{
       if($(object).hasClass('element-play')==true){
            var global_image=$(object).parent().parent().find('.global-figure >a >span').attr('style');
            $('.click_share_kt').attr('global_image',global_image);
        }
        else{
         $('.click_share_kt').attr('global_image',"background-image: url(http://st.cdn.nhacso.net/images/ads/nhacso.png?w=400&mode=scale)");
        }
       
    }
    var objList = checkActiveElement(objectType, object);
    var appendType = $(object).attr('append-type');

    if (objectType !== 'bxh' && objList.hasClass('active')) {

        objList.removeClass('active');
        myPeakPlayer.playTrackSongId();
        objList.addClass('is-pause');
        buildInfo(myPeakPlayer.song);

        /**
         * set active when play
         */
        setActivePlayTrackAfterLoadAjax();
    } else if (objectType !== 'bxh' && objList.hasClass('is-pause')) {
        objList.addClass('active');
        objList.removeClass('is-pause');
        myPeakPlayer.playTrackSongId();
        buildInfo(myPeakPlayer.song);
        /**
         * set active when play
         */
        setActivePlayTrackAfterLoadAjax();
    } else {

        //ga('send', 'pageview', $(object).attr('data-href'));
        if (typeof appendType === 'undefined') {
            window.myPeakPlayer.reboot();
        }
        var url = getUrlGetDataPlayer(objectId, objectType);
        if (objectType == 'top100') {
            var dataCategory = $(object).attr('data-category');
            var data = {
                category_id : dataCategory
            };
        }
        else if (objectType == 'bxh') {
            var dataBxh = $(object).attr('data-bxh');
            var dataDate = $(object).attr('data-date');
            var dataWeek = $(object).attr('data-week');
            var dataMonth = $(object).attr('data-month');
            var dataYear = $(object).attr('data-year');
            var data = {
                dataDate : dataDate,
                dataWeek : dataWeek,
                dataMonth : dataMonth,
                dataYear : dataYear,
                objectType : dataBxh
            };
        } else {

            var objectId = $(object).attr('object-id');
            var data = {
                dataId : objectId
            };

        }


        //if(objectId){
        $.get(url, data, function(data) {
            data = $.parseJSON(data);

            if (data.is_private == 1) {
                $.bootstrapGrowl("Nội dung đang tạm ngưng theo yêu cầu của đơn vị sở hữu bản quyền", {
                    type: 'danger',
                    align: 'right',
                    width: 300,
                    offset: {from: 'top', amount: 50},
                    allow_dismiss: true
                });
                return false;
            }

            $('a#more-player').attr('data-url-playlist', data.link_playlist);
            /**
             * add song
             */
            myPeakPlayer.addSongsObject(data);

            /**
             * build html
             */
            buildHtml(data, appendType, objectId, objectType);
            var elementName = $('#listsongs li.itemsong');
            $(elementName).each(function(i) {
                if (i > 199) {
                    $(this).remove();
                    var totalSong = $('#listsongs li.itemsong').length;
                    $('#showList span.total-song').html(totalSong);
                    $('#peakPlayer .total-song-player').html(totalSong);
                }

            });
            if (appendType == 'last') {
                var totalSong = $('#listsongs li.itemsong').length;
                if (totalSong > 199) {
                    //Dùng thư viện thông báo 
                   $.bootstrapGrowl("Danh sách nghe của bạn chỉ 200 bài hát.", {
                        type: 'danger',
                        align: 'right',
                        width: 300,
                        offset: {from: 'bottom', amount: 50},
                        allow_dismiss: true
                    });
                } else {
                    $.bootstrapGrowl("Đã thêm vào danh sách.", {
                        type: 'success',
                        align: 'right',
                        width: 300,
                        offset: {from: 'bottom', amount: 50},
                        allow_dismiss: true
                    });
                }
            }
            /**
             * init again button
             */
            initButton();

            /**
             * play first song
             */

            if (!$(object).hasClass('play-next') && (myPeakPlayer.song == false || appendType != 'last') ) {

                var firstSong = data.first_song;
                myPeakPlayer.playTrackSongId(firstSong.id);

                btnLikePlayer(object);

                /**
                 * set active when play
                 */
                setActivePlayTrackAfterLoadAjax();
            }

        });
        //}
    }
    $('#random').removeClass('active');

    return false;
}

function btnLikePlayer(object) {

    var htmlLike = $(object).parent().find('span.like-no-text').html();

    $('.like-player').html(htmlLike);
    $('.like-player').find('a').addClass('like-pl');
}

function playItem(object) {

    $(".overlay-trans").remove();
    var objectId = $(object).attr('object-id');
    objectId = objectId.replace(/=/g, '_');
    var item = $('#listsongs li[id="' + objectId + '"]');
    var idVideo = $('#mainContainer video').attr('id');
    var video = $('#'+idVideo);

    if (video.length >= 1) {
        var myVideoJs = videojs(idVideo);
        if (myVideoJs.play) {
            myVideoJs.pause();
        }
    }

    if (item.length > 0) {
        myPeakPlayer.playTrackSongId(objectId);
        setActivePlayTrackAfterLoadAjax();
    } else {
        addResetPlayer(object);
    }
    // if($(".fa-volume-off").length > 0){
    // 	myPeakPlayer.song.smObject.setVolume(0);
    // }else{
    // 	myPeakPlayer.song.smObject.setVolume($("span.volume").html());
    // }

    return false;

    var idDataRunning = $('#listsongs li:first').attr('object-id');
    var typeDataRunning = $('#listsongs li.first').attr('object-type');

    var idDataList = $(object).attr('data-id');
    var checkData = $(object).attr('data-check-list');

    if (checkData !== undefined) {
        if (objectId == idDataRunning) {
            myPeakPlayer.playTrackSongId(objectId);
            setActivePlayTrackAfterLoadAjax();
        } else {
            addResetPlayer(object);
        }
    } else {
        myPeakPlayer.playTrackSongId(objectId);
        setActivePlayTrackAfterLoadAjax();
    }

    $('#random').removeClass('active');

}

function removeSongPerList(object) {
    if ($('#listsongs li.itemsong').length == 1) {
        return false;
    }
    $(object).parent().remove();
    var totalSong = $('#listsongs li.itemsong').length;
    $('#showList span.total-song').html(totalSong);
    $('#peakPlayer .total-song-player').html(totalSong);

    return false;
}
function removeAllPlayer() {
    var noticeClear = confirm('Bạn có chắc chắn xóa tất cả bài hát trong danh sách?');
    if (noticeClear == true) {
        if ($('#listsongs li.itemsong').length == 1) {
            return false;
        }
        var total = $('#listsongs li.itemsong').length;
        var objCurrent = myPeakPlayer.getCurrentSong();
        var elementName = $('#listsongs li.itemsong');

        $(elementName).each(function(i) {
            var idItem = $(this).attr('id');
            if (objCurrent.id !== idItem) {
                $(this).remove();
            }
        });
        myPeakPlayer.songs.length = 1;
        myPeakPlayer.songs[0] = objCurrent;
        myPeakPlayer.song = objCurrent;
        var totalSong = $('#listsongs li.itemsong').length;
        $('#showList span.total-song').html(totalSong);
        $('#peakPlayer .total-song-player').html(totalSong);
    }
    return false;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// set active
function setActivePlayTrack(objectId, objectType, isPlayer, isPlay, elementName) {
    if (objectId === undefined) {
        objectId = '';
    }
    objectId = objectId.replace(/_/g, '=');
    if (elementName === undefined) {
        elementName = '.element-play';
    }

    $(elementName).each(
        function() {
            var currentObjectId = $(this).attr('object-id');
            var currentObjectType = $(this).attr('object-type');
            if (isPlayer === true) {
                if (isPlay) {
                    $(this).removeClass('active');
                    $(this).removeClass('is-pause');
                    if (currentObjectId == objectId
                        && currentObjectType == objectType) {
                        $(this).addClass('active');
                    }
                } else {
                    $(this).removeClass('active');
                    if (currentObjectId == objectId
                        && currentObjectType == objectType) {
                        $(this).addClass('is-pause');
                    }
                }
            } else {
                if (currentObjectId != objectId
                    && currentObjectType == objectType) {
                    $(this).removeClass('active');
                }
            }
        })
}
function setActivePlayTrackAfterLoadAjax() {
    var object = $('#listsongs li.active');
    var objectId = object.attr('object-id');
    var objectType = object.attr('object-type');
    var songId = object.attr('id');
    if (objectType == undefined) {
        var song = myPeakPlayer.song;
        objectId = song.objectId;
        objectType = song.objectType;
        songId = song.id;
    }

    var isPlay = false;
    if (myPeakPlayer.song.smObject
        && typeof myPeakPlayer.song.smObject.paused === 'boolean') {
        var isPlay = !myPeakPlayer.song.smObject.paused;
    }
    //
    var isRemoveElement = true;
    if ($('.playlist-details').length > 0 || $('.song-details').length > 0) {
        isRemoveElement = false;
    }

    var url = '';
    var tempId = '';
    if (objectId) {
        tempId = objectType + "-" + objectId.replace(/=/g, '_');
        url = $("#" + tempId).val();
    }

    if (objectType === 'playlist' || objectType === 'album') {
        setActivePlayTrack(objectId, objectType, true, isPlay);

        if (url != '' && url != undefined) {
            var temp = url.split("st=");
            url = temp[0];
            if (url.indexOf("?") == -1)
                url += "?";
            url += "st=" + songId;
        }

    } else {
        setActivePlayTrack(songId, 'song', true, isPlay);
    }

    if (url != '' && url != undefined) {
        // tam thoi khoa lai cho mo ta moi
        // history.pushState('', 'New URL: ' + url, url);
    }

    if ($('.playlist-details').length > 0 || $('.song-details').length > 0) {
        setActivePlayTrack(songId, 'song', true, isPlay, '.element-play-list');
    }
}

function initButton() {
    soundManager._writeDebug("initButton");

    $("#playSongButton").unbind("click");
    $("#playSongButton").on({
        click : function(e) {
            e.preventDefault();
            var song = myPeakPlayer.song;
            myPeakPlayer.playTrackSongId();

            var idVideo = $('#mainContainer video').attr('id');
            var video = $('#'+idVideo);

            if (video.length >= 1) {
                var myVideoJs = videojs(idVideo);
                if (myVideoJs.play) {
                    myVideoJs.pause();
                }
            }
            if($(".fa-volume-off").length > 0){
                myPeakPlayer.song.smObject.setVolume(0);
            }else{
                myPeakPlayer.song.smObject.setVolume($("span.volume").html());
            }

            // set active
            setActivePlayTrackAfterLoadAjax();
        }
    });

    $(".pause-song").unbind("click");
    $(".pause-song").on({
        click : function(e) {
            e.preventDefault();
            myPeakPlayer.playTrack();
            if($(".fa-volume-off").length > 0){
                myPeakPlayer.song.smObject.setVolume(0);
            }else{
                myPeakPlayer.song.smObject.setVolume($("span.volume").html());
            }
        }
    });

    $("#nextSongButton").unbind("click");
    $("#nextSongButton").on({
        click : function(e) {
            e.preventDefault();
            $('.element-play').removeClass('active');

            myPeakPlayer.nextTrack();

            var idVideo = $('#mainContainer video').attr('id');
            var video = $('#'+idVideo);

            if (video.length >= 1) {
                var myVideoJs = videojs(idVideo);
                if (myVideoJs.play) {
                    myVideoJs.pause();
                }
            }

            setActivePlayTrackAfterLoadAjax();
        }
    });

    $("#previousSongButton").unbind("click");
    $("#previousSongButton").on({
        click : function(e) {
            e.preventDefault();
            $('.element-play').removeClass('active');
            myPeakPlayer.previousTrack();

            //$('.style-song').jScrollPane({}).data('jsp');
            var idVideo = $('#mainContainer video').attr('id');
            var video = $('#'+idVideo);

            if (video.length >= 1) {
                var myVideoJs = videojs(idVideo);
                if (myVideoJs.play) {
                    myVideoJs.pause();
                }
            }
            setActivePlayTrackAfterLoadAjax();
        }
    });

    $("#loop").unbind("click");
    $("#loop").on({
        click : function(e) {
            e.preventDefault();
            myPeakPlayer.toggleLoop();
            $(this).toggleClass("active");
        }
    });

    $("#random").unbind("click");
    $("#random").on({
        click : function(e) {
            e.preventDefault();
            if (!$(this).hasClass('active')) {
                myPeakPlayer.htmlListSong = $('#listsongs').html();
                $('#listsongs li').shuffle();
            } else {
                if (myPeakPlayer.htmlListSong.length > 0) {
                    $('#listsongs').html(myPeakPlayer.htmlListSong);
                }
            }
            myPeakPlayer.toggleRandom();
            $(this).toggleClass("active");
        }
    });

    $("#volume").unbind("click");
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("#volume").mouseover(function() {
            $(this).find(".wrap-volume").css("top", -105);
        }).mouseout(function() {
            $(this).find(".wrap-volume").css("top", 120);
        });
    } else {
        $("#volume").mouseover(function() {
            $(this).find(".wrap-volume").css("top", -105);
        }).mouseout(function() {
            $(this).find(".wrap-volume").css("top", 120);
        });
    }

    $("#volume i.fa").unbind("click");
    $("#volume i.fa").on({
        click : function(e){
            e.preventDefault();
            if($(this).hasClass("fa-volume-off")){
                $(this).addClass("fa-volume-up").removeClass("fa-volume-off");
                myPeakPlayer.toggleMute($('.volume').text());
                slider.slider({
                    //Config
                    range: "min",
                    min: 1,
                    value: $('.volume').text(),
                    orientation: "vertical",
                    start: function(event,ui) {},

                    //Slider Event
                    slide: function(event, ui) { //When the slider is sliding
                        var value  = slider.slider('value'),
                            volume = $('.volume');
                        volume.text(ui.value);
                        myPeakPlayer.volumeControl(ui.value);
                        if (value <= 8) {
                            $("#volume").find("i.fa").addClass("fa-volume-off").removeClass("fa-volume-up");
                        }
                        else if (value <= 100) {
                            $("#volume").find("i.fa").addClass("fa-volume-up").removeClass("fa-volume-off");
                        }
                    },

                    stop: function(event,ui) {}

                });
            }else{
                if($(this).hasClass('disable')){
                    return false;
                }
                $(this).addClass("fa-volume-off").removeClass("fa-volume-up");
                myPeakPlayer.toggleMute(0);
                slider.slider({
                    //Config
                    range: "min",
                    min: 1,
                    value: 0,
                    orientation: "vertical",
                    start: function(event,ui) {},

                    //Slider Event
                    slide: function(event, ui) { //When the slider is sliding
                        var value  = slider.slider('value'),
                            volume = $('.volume');
                        volume.text(ui.value);
                        myPeakPlayer.volumeControl(ui.value);
                        if (value <= 8) {
                            $("#volume").find("i.fa").addClass("fa-volume-off").removeClass("fa-volume-up");
                        }
                        else if (value <= 100) {
                            $("#volume").find("i.fa").addClass("fa-volume-up").removeClass("fa-volume-off");
                        }
                    },

                    stop: function(event,ui) {}

                });
            }

        }
    });
    var slider  = $('#slider');
    //Call the Slider
    var volume_data = 100;
    if($("span.volume").length > 0)
        volume_data = $("span.volume").html();

    slider.slider({
        //Config
        range: "min",
        min: 1,
        value: volume_data,
        orientation: "vertical",

        start: function(event,ui) {},

        //Slider Event
        slide: function(event, ui) { //When the slider is sliding
            var value  = slider.slider('value'),
                volume = $('.volume');
            volume.text(ui.value);
            myPeakPlayer.volumeControl(ui.value);
            if (value <= 8) {
                $("#volume").find("i.fa").addClass("fa-volume-off").removeClass("fa-volume-up");
            }
            else if (value <= 100) {
                $("#volume").find("i.fa").addClass("fa-volume-up").removeClass("fa-volume-down");
            }
        },

        stop: function(event,ui) {}

    });

    $("#loadBar").unbind("click");
    $("#loadBar").on({
        click : function(e) {
            e.preventDefault();
            var seekToPosition = e.pageX - 10 - $(this).parent().position().left;
            var seekWidth = $(this).parent().width();
            myPeakPlayer.seekToPosition(seekToPosition, seekWidth);
        }
    });
    $("#showPlaylist").unbind("click");
    $("#showPlaylist").on({
        click : function(e){
            e.preventDefault();
            $(this).toggleClass("active");
            if ($(this).hasClass("active") ) {
                $(".config, .icon-lyric").removeClass("active");
                $("#showList").animate({
                    bottom: "46"
                }, 200, function() {

                });
            } else {
                $("#showConfig").hide();
                $("#showList").animate({
                    bottom: "-450"
                }, 200, function() {
                    $("#showPlaylist").removeClass("active");
                });
            }

        }
    });

    $("#progressBar").unbind("click");
    $("#progressBar").on({
        click : function(e) {
            e.preventDefault();
            var seekToPosition = e.pageX - $(this).parent().position().left;
            var seekWidth = $(this).parent().width();
            myPeakPlayer.seekToPosition(seekToPosition, seekWidth);
        }
    });

    $("#container").click(function(){
        $("#showList, #showLyric, #showConfig").animate({
            display: "none"
        }, 200, function() {$(".overlay").remove(); $("#showPlaylist, .config, .icon-lyric").removeClass("active");
        });
        $('body').unbind("mousewheel");
    });
}

function initDataPlayer(objectId, objectType, isPlay, songId) {
    songId = songId || '';
    var itemActive = $('#listsongs li.active');
    var objectIdActive = itemActive.attr('object-id');
    var objectTypeActive = itemActive.attr('object-type');
    var appendType = itemActive.attr('append-type');

    if (objectId === objectIdActive && objectType === objectTypeActive) {
        return false;
    }
    if (typeof isPlay === 'undefined') {
        isPlay = false;
    }
    var url = getUrlGetDataPlayer(objectId, objectType);
    if(objectId){
        $.get(url, {
            dataId : objectId
        }, function(data) {
            data = $.parseJSON(data);
            window.myPeakPlayer.reboot();
            /**
             * add song
             */
            myPeakPlayer.addSongsObject(data);

            /**
             * build html
             */
            buildHtml(data, appendType, objectId, objectType);

            /**
             * init again button
             */
            initButton();
            /**
             * Build info
             */
            var firstSong = data.first_song;
            /**
             * cap nhat first song theo param
             */
            if (songId != '') {
                songId = songId.replace(/_/g, '=');
                $.each(data.songs, function(index, value) {
                    if (value.id == songId) {
                        firstSong = value;
                    }
                });
            }

            buildInfo(firstSong);

            if (isPlay) {
                myPeakPlayer.playTrackSongId(firstSong.id);
                setActivePlayTrackAfterLoadAjax();
            }
        });
    }
}
$(document).ready(function() {
    // Set promotion
    var isInitPlayerPromotion = $('#is_init_player_promotion').val();
    if (isInitPlayerPromotion != 0) {

        var objectId = $('#Params #objectId').val();
        var objectType = $('#Params #objectType').val();

        initDataPlayer(objectId, objectType);
    }

    initButton();

    myPeakPlayer.onPlay = function(currentSong) {
        soundManager._writeDebug("myPeakPlayer.onPlay - new player");

        if( $("h3[class~='name-" + currentSong.encodeId +"']").length > 0){
            $("h3[class~='name-" + currentSong.encodeId +"'] span").html(currentSong.name);
        }
        if( $("h4[class~='artist-" + currentSong.encodeId +"']").length > 0){

            var listSinger = '';
            for (var i = 0; i < currentSong.singer.length; i++) {
                listSinger = listSinger + currentSong.singer[i].alias;
                if(i < currentSong.singer.length - 1)
                    listSinger = listSinger + ', ';
            };
            $("h4[class~='artist-" + currentSong.encodeId +"'] span").html(listSinger);
        }
        var lyric = currentSong.lyric;
        lyric_add = currentSong.lyric_add;

        if(lyric == ''){
            $("#lyric-detail").html(lyric_add);
        }

        if(lyric == ''){
            lyric = "Lời bài hát đang cập nhật";
        }
        $("#lyric").html(lyric);
        $("#songTitle").html(currentSong.name);


        if( $("span[class~='lyric-name-" + currentSong.encodeId +"']").length > 0){
            $("span[class~='lyric-name-" + currentSong.encodeId +"']").html(currentSong.name);
            
            // if(lyric == ''){
            //     $("#lyric-detail").html(lyric);
            // }
            

        }
      
        try{
            if($("a[data-original-title = 'Nghe ngay']").length > 0){
                if( $("a[data-original-title = 'Nghe ngay']")[0].getAttribute('object-id') == currentSong.objectId || $("a[data-original-title = 'Nghe ngay']:first").children("i")[0].getAttribute('object-id') == currentSong.objectId){
                    var btn_play =  $("a[data-original-title = 'Nghe ngay']")[0];
                    btn_play.classList.add('active');

                    $("#song-player-bg").css("background-image","url(" + currentSong.link_image + ")");
                    $("#global-image > a > span").css("background-image","url(" + currentSong.link_image + ")");

                    $("#popup-singer-image").css("background-image","url(" + currentSong.singer[0].image_singer+ ")");
                    $("#popup-singer-link").attr('href',currentSong.singer[0].urlDetail);

                    $("#popup-singer-name").text(currentSong.singer[0].alias);
                    $("#popup-singer-name").attr('href',currentSong.singer[0].urlDetail);

                } else {
                    var btn_play =  $("a[data-original-title = 'Nghe ngay']")[0];
                    btn_play.classList.remove('active');
                }
            }

            $("ul[class=list-song] > li").removeClass('active');
            if($("li[data-object-id='" + currentSong.encodeId + "']").length > 0){
                $("li[data-object-id='" + currentSong.encodeId + "']")[0].classList.add('active');
            }

            $("#listsongs > li").removeClass('active');

            if($("li[id='" + currentSong.id + "']").length > 0){
                var songPlaying = $("li[id='" + currentSong.id + "']")[0];
                songPlaying.classList.add('active')
            }

            try{
                $("#song-list").mCustomScrollbar("scrollTo",$(".list-song > li[class^=active]"));
            } catch(err){}

            try{
                $("#play-list-song").mCustomScrollbar("scrollTo",$("li[class='itemsong active']"));
            } catch(err){}

        } catch(err) {}

        $("#volume i.fa").removeClass("disable");
        $("#playSongButton i").removeClass('flaticon-play128');
        $("#playSongButton i").addClass('fa fa-play fa-2x fa-pause');
        $("#playSongButton").addClass('active');
        $(".songName").text(currentSong.name);

        // ban len server update list bai hat da nghe
        var urlListen = '/songs/add-song-id-to-last-listened-for-user';
        $.ajax({
            url : urlListen,
            type : 'get',
            data : {
                dataId : currentSong.encodeId
            }
        });
    };

    myPeakPlayer.onPause = function(currentSong) {

        $("ul[class=list-song] > li").removeClass('active');
        $("ul[id=listsongs] > li").removeClass('active');

        $("#playSongButton i").removeClass('fa fa-play fa-2x fa-pause');
        $("#playSongButton i").addClass('flaticon-play128');
        $("#playSongButton").removeClass('active');

        try{
            if($("a[data-original-title = 'Nghe ngay']")[0].getAttribute('object-id') == currentSong.objectId || $("a[data-original-title = 'Nghe ngay']:first").children("i")[0].getAttribute('object-id') == currentSong.objectId){
                $("a[object-id='" + currentSong.objectId + "']")[0].classList.remove('active');
                $("a[data-original-title = 'Nghe ngay']:first").removeClass('active');

                $("a[data-original-title = 'Nghe ngay']:first").addClass('is-pause');
            }

        } catch(err) {}
    };

    myPeakPlayer.onFinish = function(currentSong) {
        this.nextTrack();
    };

    myPeakPlayer.whilePlaying = function(songObject, timeObject, songProgress) {

        var w = songProgress * 9.2;
        try{
            $("#processSong").css("width",w + "px");
        }catch(err){}

        $("#timeElapsed").text(timeObject.elapsedTime.m + ":" + timeObject.elapsedTime.s);
        $("#totalTime").text(timeObject.totalTime.m + ":" + timeObject.totalTime.s);
        $("#progressBar").css("width", songProgress + "%");
    };

    myPeakPlayer.whileLoading = function(songObject, percentageLoaded) {
        if(percentageLoaded < 5)
            percentageLoaded = 10;
        $("#loadBar").css("width", percentageLoaded + "%");
    };
    // endtinh
});

function updateClassLikedObjects(objIds) {
    objIds = objIds || [];

    var alike, id;
    $('li.itemsong > div.group-icon').each(function() {
        alike = $(this).find("a:last");

        id = alike.attr('object-id');
        try{
            id = id.replace(/_/g, '=');
        }catch(err){}


        if ($.inArray(id, objIds) != -1) {
            alike.attr('class', 'like');
        }
    });

    // update like cho player
    alike = $("#songInfo .infoSong .like-player > a");
    id = alike.attr('object-id');
    try{
        id = id.replace(/_/g, '=');
    }catch(err){}

    if ($.inArray(id, objIds) != -1) {
        alike.addClass('like');
    }
}