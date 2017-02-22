/*
 PeakPlayer - A Music Player For Everyone
 Website - http://www.peakplayer.com
 Author - Sajjad Ashraf
 Contact - https://twitter.com/sajjad26
 */
(function(){
    window.peakPlayer = function(options, songsArray){
        // the constructor function of peakPlayer
        this.defaults = {
            autoPlay: false,
            loop: true,
            volume: 70,
            songClass: "oneSound",
            random: false
        }
        this.numberOfPlay = 0;
        this.idPrefix = "song-";
        this.songs = [];
        this.songsIndex = [];
        this.song = false;
        this.lastSong = false;
        this.songIndex = 0;
        this.mute = false;
        this.loop = true;
        this.random = false;
        this.htmlListSong = '';
        this.options = options || this.defaults;
        // now setting soundManager options
        this.sm = this.getSoundManager();
        this.setSoundManager(this.sm);
        if(typeof songsArray !== 'undefined'){
            this.addArraySongs(songsArray);
        }else{
            if(typeof this.parsePageSongs === 'function') this.parsePageSongs("oneSong");
        }
    };

    /* These are core methods which absolutely required for peakPlayer to function properly */
    var myAudio, myContext, myAnalyser, mySource, myFbc_array, myCanvas, myCtx = null;
    var myCheck = true;

    peakPlayer.prototype = {
        reboot : function () {
            this.songs.length = 0;
            this.songs = [];
            this.songsIndex = [];
            this.song = false;

            if (typeof this.sm.reboot === 'function') {
                this.sm.reboot();
                this.sm.beginDelayedInit();
            }
            this.numberOfPlay = 0;
        },
        getSoundManager : function(){
            if(window.soundManager){
                return window.soundManager;
            }
            return false;
        },
        setSoundManager : function(sm){
            if(sm){
                sm.url = "http://st.nhacso.net/NhacSo5.1/html/js/soundmanager/swf/xdomain/";
                sm.flashVersion = 9;
                sm.debugMode = false;
                sm.consoleOnly = true;
                sm.preferFlash = false;
                sm.html5PollingInterval = 50;
                sm.flashPollingInterval = 1000;
                sm.waitForWindowLoad = true;
                sm.flash9Options.useEQData = true;
                sm.flash9Options.usePeakData = true;
                sm.usePolicyFile = true;
            }
        },
        addSongsObject : function(data){
            var song = {};
            var self = this;
            var songs = data.songs;
            var objectId   = data.object_id;
            var objectType = data.object_type;
            var objectName = data.object_name;

            var loop = songs.length;
            for(var i = 0; i < loop; i++){
                if(!this.searchSong(songs[i].link_mp3)){
                    var id = songs[i].id;
                    if(id)
                        id = id.replace(/=/g, '_');
                    if (objectType=='playlist') {
                        song.link_playlist = data.link_playlist;
                    }

                    song.islike = songs[i].islike;
                    song.id   = id;
                    song.encodeId = songs[i].id;
                    song.songId   = songs[i].song_id;
                    song.name = songs[i].name;
                    song.url  = songs[i].link_mp3;
                    song.link_image  = songs[i].link_image;
                    song.link_image_thumb  = songs[i].link_image_thumb;
                    song.singer      = songs[i].singer;
                    song.lyric       = songs[i].lyric;
                    song.lyric_add   = songs[i].lyric_add;
                    song.link_detail = songs[i].link_detail;
                    song.title = objectName;
                    song.link_album = songs[i].link_album;

                    song.objectId = objectId;
                    song.objectType = objectType;

                    song.index = id;
                    song.smObject = false;
                    // check total song

                    this.songs.push(song);
                    song = {};
                }
            }
        },
        addSongs : function(songsArray){
            var song = {};
            var self = this;
            var index = this.getMaxSongIndex();
            if (index !== 0)
                index ++;

            var loop = songsArray.length;
            for(var i = 0; i < loop; i++){
                if(!this.searchSong(songsArray[i].url)){
                    song.name = songsArray[i].name;
                    song.url = songsArray[i].url;
                    song.singer = songsArray[i].singer;
                    song.bgSong = songsArray[i].bgSong;
                    song.lyric = songsArray[i].lyric;
                    song.songId = songsArray[i].songId;
                    song.index = index;
                    song.id = this.idPrefix + index;
                    song.smObject = false;

                    if (songsArray[i].objectId !== undefined
                        && songsArray[i].objectType !== undefined) {
                        song.objectId = songsArray[i].objectId;
                        song.objectType = songsArray[i].objectType;
                    }

                    if (songsArray[i].encodeId !== undefined) {
                        song.encodeId = songsArray[i].encodeId;
                    }

                    if (songsArray[i].urlDetail !== undefined) {
                        song.urlDetail = songsArray[i].urlDetail;
                    }

                    if (songsArray[i].singerUrlDetail !== undefined) {
                        song.singerUrlDetail = songsArray[i].singerUrlDetail;
                    }

                    this.songs.push(song);
                    song = {};
                    this.songsIndex[index] = index;
                    index++;
                }
            }
        },
        addSong : function(songName, songUrl, _singer,_bgSong,_songId,_lyric){
            if(typeof songName !== 'undefined' && typeof songUrl !== 'undefined' && typeof _singer !== 'undefined' && typeof _bgSong !== 'undefined' && typeof _songId !== 'undefined' && typeof _lyric !== 'undefined'){
                this.addSongs([{
                    name : songName,
                    url : songUrl,
                    singer : _singer,
                    bgSong : _bgSong,
                    lyric : _lyric,
                    songId : _songId
                }]);
                return true;
            }
            return false;
        },
        removeSong : function (url) {
            var index = this.searchSong(url, true);
            if (index > -1) {
                var song = this.songs[index];
                var indexSongsIndex = this.songsIndex.indexOf(song.index);

                if (indexSongsIndex > -1) {
                    this.songsIndex.splice(indexSongsIndex, 1);
                }

                this.songs.splice(index, 1);
            }
        },
        searchSong : function(url, giveIndex){
            for (var i = this.songs.length - 1; i >= 0; i--) {
                if(this.songs[i].url === url){
                    if(typeof giveIndex !== 'undefined' && giveIndex === true) return i;
                    return true;
                }
            };
            return false;
        },
        searchSongId : function(songId, giveIndex){
            for (var i = this.songs.length - 1; i >= 0; i--) {
                if(this.songs[i].id === songId){
                    if(typeof giveIndex !== 'undefined' && giveIndex === true) return i;
                    return true;
                }
            };
            return false;
        },
        setSong : function(songIndex){
            if(songIndex !== this.song.index){

                this.lastSong = this.song;

                this.song = this.songs[songIndex];
            }
        },
        getSoundIndex : function(songUrl, songsArray){
            var arrayLength = songsArray.length;
            for(var i = 0; i < arrayLength; i++){
                if(songsArray[i].url.toString() === songUrl.toString()){
                    return songsArray[i].index;
                }
            }
            return false;
        },
        playSong : function(oneSongIndex){
            var self = this;
            if(typeof oneSongIndex === 'undefined'){
                if(this.song && this.song.smObject){
                    oneSongIndex = this.song.index;
                }else{
                    oneSongIndex = 0;
                }
            }
            /*
             if no song is played yet
             or
             the index passed is the index of a different song than the playing song
             */
            this.setSong(oneSongIndex);
            if((false === this.song) || (false !== this.song && false === this.song.smObject)){
                // if this song is not played yet
                if(false !== this.lastSong && false !== this.lastSong.smObject){
                    this.stopSong(this.lastSong);
                }

                this.song.smObject = this.sm.createSound({
                    id: self.song.id,
                    url: self.song.url,
                    volume: self.options.volume,


                    whileplaying: function(){
                        if(typeof self.whilePlaying === 'function'){
                            var elapsedTime = self.secondsToTime(this.position/1000);
                            var totalTime = self.secondsToTime(this.durationEstimate/1000);
                            var progress = (this.position / this.durationEstimate) * 100;

                            self.whilePlaying(this, {"elapsedTime": elapsedTime,  "totalTime": totalTime}, progress);
                            // try {

                            //     var songObject = self.song.smObject;

                            //     var id = songObject.id;
                            //     id = id.replace("__", "==");
                            //     var canvas_class = "canvas-" + id;

                            //     if(myAudio == null){
                            //         songObject._a.crossOrigin="anonymous";
                            //         //Link Test Clear when ok
                            //         //songObject._a.src = "http://my.static.nhacso.net/Nhacso2015New/music/AnhKhongDoiQua-KarikOnlyC-2855777_hq.mp3"
                            //         //songObject._a.src = "http://st02.freesocialmusic.com/mp3/2015/08/05/1030050034/14387139991_175.mp3";
                            //         myAudio = songObject._a;

                            //         /* Check cros */
                            //         var audio2 = myAudio.cloneNode();
                            //         myContext = new AudioContext();
                            //         myAnalyser = myContext.createAnalyser();
                            //         mySource = myContext.createMediaElementSource(audio2);
                            //         mySource.connect(myAnalyser);
                            //         myAnalyser.connect(myContext.destination);
                            //         myFbc_array = new Uint8Array(320);
                            //         myAnalyser.getByteFrequencyData(myFbc_array);
                            //         if( myFbc_array[150] == 0) myCheck = false;
                            //         /* End check */
                            //         //Test
                            //         //myCheck = true;

                            //         if(myCheck){
                            //             myContext = new AudioContext();
                            //             myAnalyser = myContext.createAnalyser();
                            //             mySource = myContext.createMediaElementSource(myAudio);
                            //             mySource.connect(myAnalyser);
                            //             analyser.connect(myContext.destination);
                            //         }
                            //     }
                            //     else if(myAudio !== null && myCheck && document.getElementsByClassName(canvas_class)[0] !== null){
                            //         myCanvas = document.getElementsByClassName(canvas_class)[0];
                            //         myCtx = myCanvas.getContext('2d');
                            //         myFbc_array = new Uint8Array(128);
                            //         myAnalyser.getByteFrequencyData(myFbc_array);
                            //         myCtx.clearRect(0, 0, myCanvas.width, myCanvas.height); // Clear the canvas
                            //         var bars = 90;
                            //         var bar_width = 1;

                            //         for (var i = 0; i < bars; i++) {
                            //           bar_x = i * (bar_width + 1 ) + 70;
                            //           bar_height = -(myFbc_array[i] / 2.5) / 2;
                            //           myCtx.fillStyle = "#fff";
                            //           myCtx.fillRect(bar_x, myCanvas.height - 33, bar_width, bar_height);
                            //           myCtx.fillRect(bar_x, myCanvas.height - 30, bar_width, bar_height * (-0.3));
                            //         }
                            //     } else if(!myCheck && document.getElementsByClassName(canvas_class)[0] !== null) {
                            //         myCanvas = document.getElementsByClassName(canvas_class)[0];
                            //         myCtx = myCanvas.getContext('2d');
                            //         myCtx.clearRect(0, 0, myCanvas.width, myCanvas.height); // Clear the canvas
                            //         var bars = 90;
                            //         var bar_width = 1;
                            //         //var grd = myCtx.createLinearGradient(0,0,170,0);
                            //         //grd.addColorStop(0,'#fff');
                            //         //grd.addColorStop(1,"#f1f1f1");
                            //         for (var i = 0; i < bars; i++) {
                            //           bar_x = i * (bar_width + 1 ) + 70;
                            //           var height = getRandomInt(100,300);
                            //           if(i < 20)
                            //             height = getRandomInt(50,100 * i / 5);
                            //           if(i > (bars - 20))
                            //             height = getRandomInt(50,(100 * ((bars - i) / 5)));
                            //           bar_height = -(height / 2.5) / 3;
                            //           //myCtx.fillStyle = grd;\
                            //           myCtx.globalAlpha = 1;
                            //           myCtx.fillStyle = "#fff";

                            //           myCtx.fillRect(bar_x, myCanvas.height - 33, bar_width, bar_height);
                            //           myCtx.fillRect(bar_x, myCanvas.height - 30, bar_width, bar_height * (-0.3));
                            //         }
                            //     }
                            // } catch(err) {
                            //     //console.log(err.message);
                            // }

                        }
                    },
                    whileloading: function(){
                        if(typeof self.whilePlaying === 'function'){
                            var percentageLoaded = (this.bytesLoaded / this.bytesTotal) * 100;
                            self.whileLoading(this, percentageLoaded);
                        }
                        if(this.readyState === 2){
                            // loading has failed
                            // removing this song from playlist
                            self.songs.splice(self.song.index, 1);
                            self.onPlayOrPause();
                            self.loadingFailed(this);
                        }
                    },
                    onfinish: function(){
                        self.onPlayOrPause();
                        if(typeof self.onFinish === 'function') self.onFinish(this);
                    },
                    onid3: function(){
                        self.onid3(this);
                    },
                    onbufferchange: function(){
                        if(this.readyState === 2){
                            // loading has failed
//                            alert("loading failed");
                            // removing this song from playlist
                            self.songs.splice(self.song.index, 1);
                            self.onPlayOrPause();
                            self.loadingFailed(this);
                        }
                    }
                });

                this.song.smObject.play();
            }else if(false !== this.song && false !== this.song.smObject){
                // if this song is already played atleast once
                if(false !== this.lastSong && false !== this.lastSong.smObject){
                    this.stopSong(this.lastSong);
                }
                this.song.smObject.togglePause();
            }else{
                /* THIS PLACE IS HAUNTED */
                /* NO TRESPASSING */
                /* WHAT HAVE YOU DONE, YOU WERE NEVER SUPPOSED TO COME HERE */
                /* ^_^ */
                /* console.log("i don't know whay to do"); */
            }
            this.onPlayOrPause();
            if(typeof this.performThemeRelatedTasks === 'function') this.performThemeRelatedTasks(oneSongIndex);



            //var pane = $('.style-song');
            //pane.jScrollPane();
            //var api = pane.data('jsp');
            //var index = $("#listsongs .itemsong.active").index() * 29;
            //$(".list-song").customScrollbar("scrollToX", index);
            //console.log($("#listsongs .itemsong.active").index());
            //api.scrollTo(parseInt(0), parseInt(index));
        },
        stopSong: function(songObject){
            songObject.smObject.stop();
            songObject.smObject.setPosition(0);
        },
        loadingFailed: function(songObject){
            this.nextTrack();
        },
        onPlayOrPause : function(){
            if(this.mute){
                this.song.smObject.setVolume(0);
            }else{
                this.song.smObject.setVolume(100);
            }
            if(this.song.smObject.paused){
                if(typeof this.onPause === 'function') this.onPause(this.song);
            }else{
                if(typeof this.onPlay === 'function') this.onPlay(this.song);
            }

        },
        playTrack : function(name, url, singer, bgSong, songId, lyric){
            if(typeof name !== 'undefined' && typeof url !== 'undefined' && typeof singer !== 'undefined' && typeof bgSong !== 'undefined' && typeof songId !== 'undefined' && typeof lyric !== 'undefined'){

                var song = {
                    name : name,
                    url: url,
                    singer: singer,
                    bgSong: bgSong,
                    lyric: lyric,
                    songId : songId
                };
//                this.addArraySongs([song]);
                this.playSong(this.searchSong(url, true));
            }else if(typeof name !== 'undefined' && typeof url === 'undefined' && typeof _url === 'undefined'){
                this.playSong(name);
            } else{
                this.playSong();
            }
            this.song.smObject.setVolume($("span.volume").html());

        },
        playTrackSongId : function(songId){
            if (typeof songId !== 'undefined') {
                songId = songId.replace(/=/g, '_');
                var song = this.song;
                if (song.id === songId) {
                    this.playSong();
                } else {
                    this.sm.unload(song.id);
                    this.playSong(this.searchSongId(songId, true));
                }
            } else {
                this.playSong();
            }
            this.song.smObject.setVolume($("span.volume").html());
            buildInfo(this.song);

            /**
             * push ga
             */
                // if (this.numberOfPlay % 3 === 0) {
                // 	ga('send', 'pageview', this.song.link_detail);
                // }
            this.numberOfPlay ++;
        },
        nextTrack : function(){
            myPeakPlayer.playTrackSongId(this.getNextSongIndex());
            if($(".fa-volume-off").length > 0){
                this.song.smObject.setVolume(0);
            }else{
                this.song.smObject.setVolume($("span.volume").html());
            }
        },
        previousTrack : function(){
            myPeakPlayer.playTrackSongId(this.getPreviousSongIndex());
            if($(".fa-volume-off").length > 0){
                this.song.smObject.setVolume(0);
            }else{
                this.song.smObject.setVolume($("span.volume").html());
            }
        },
        onid3 : function(songObject){},

        getPlaylist: function(){
            return this.songs;
        },

        getCurrentSong: function(){
            return this.song;
        },

        seekToPosition : function(seekToPosition, seekWidth){
            seekToPosition = (seekToPosition/seekWidth) * 100;
            var newPosition = (this.song.smObject.durationEstimate/100)*seekToPosition;
            this.song.smObject.setPosition(newPosition);
        },
        toggleMute: function(seekVolume){
            if(this.song.smObject.volume < seekVolume){
                this.song.smObject.setVolume(seekVolume);
                this.mute = false;
            }else{
                this.song.smObject.setVolume(0);
                this.mute = true;

            }
        },
        volumeControl: function(seekVolume){
            this.song.smObject.setVolume(seekVolume);
            setCookie("Volume_NhacSo", seekVolume, 60);
        },
        toggleLoop: function(){
            if(this.options.loop){
                this.options.loop = false;
            }else{
                this.options.loop = true;
            }
        },
        toggleRandom: function(){
            if(this.options.random){
                this.options.random = false;
            }else{
                this.options.random = true;
            }
        },
        getMaxSongIndex : function () {
            var maxSongIndex = 0;
            var songsIndex = this.songsIndex;
            songsIndex.sort(function(a, b){return b-a});
            $.each(songsIndex, function (key, value) {
                if (maxSongIndex < value) {
                    maxSongIndex = value;
                    return false;
                }
            });
            return maxSongIndex;
        },
        getMinSongIndex : function () {
            var minSongIndex = 0;
            var songsIndex = this.songsIndex;
            songsIndex.sort(function(a, b){return a-b});
            $.each(songsIndex, function (key, value) {
                if (minSongIndex > value) {
                    minSongIndex = value;
                    return false;
                }
            });
            return minSongIndex;
        },
        getNextSongIndexModify : function (songIndex) {
            var nextSongIndex = this.getMinSongIndex();
            var songsIndex = this.songsIndex;
            songsIndex.sort(function(a, b){return a-b});
            $.each(songsIndex, function (key, value) {
                if (songIndex < value) {
                    nextSongIndex = value;
                    return false;
                }
            });
            for (var i = this.songs.length - 1; i >= 0; i--) {
                if (this.songs[i].index == nextSongIndex) {
                    return i;
                }
            }
            return 0;
        },
        getPreviousSongIndexModify : function (songIndex) {
            var previousSongIndex = this.getMaxSongIndex();
            var songsIndex = this.songsIndex;
            songsIndex.sort(function(a, b){return b-a});
            $.each(songsIndex, function (key, value) {
                if (songIndex > value) {
                    previousSongIndex = value;
                    return false;
                }
            });
            for (var i = this.songs.length - 1; i >= 0; i--) {
                if (this.songs[i].index == previousSongIndex) {
                    return i;
                }
            }
            return 0;
        },
        getNextSongIndex : function(){
            var songId;
            if(this.song.smObject) {
                var song = this.song;
                var songId = song.id;
            } else {
                songId = $('#listsongs li').first();
                songId = songId.attr('id');
            }

            var songNext = $('#listsongs li[id="' + songId + '"]').next();
            var songIdNext = songNext.attr('id');
            if (songIdNext === undefined) {
                if (this.options.loop === false) {
                    return 0;
                }
                var songNext = $('#listsongs li').first();
                var songIdNext = songNext.attr('id');
            }
            return songIdNext;
        },
        getRandomSongIndex : function(){
            var randomIndex = Math.floor(Math.random()*this.songs.length);
            while(this.song.index === randomIndex){
                randomIndex = Math.floor(Math.random()*this.songs.length);
            }
            return randomIndex;
        },
        getPreviousSongIndex : function(){
            if(this.song.smObject){
                var song = this.song;
                var songId = song.id;
                var songNext = $('#listsongs li[id="' + songId + '"]').prev();
                var songIdNext = songNext.attr('id');
                if (songIdNext === undefined) {
                    var songNext = $('#listsongs li').last();
                    var songIdNext = songNext.attr('id');
                }
                return songIdNext;
            }
        },
        secondsToTime : function (secs){
            // var hours = Math.floor(secs / (60 * 60));
            var divisor_for_minutes = secs % (60 * 60);
            var minutes = Math.floor(divisor_for_minutes / 60);
            var divisor_for_seconds = divisor_for_minutes % 60;
            var seconds = Math.floor(divisor_for_seconds);
            if(seconds > 59){
                minutes++;
                seconds = 0;
            }
            if(seconds < 10){
                seconds = "0" + seconds;
            }
            if(minutes < 10){
                minutes = "0" + minutes;
            }

            var obj = {
                //"h": hours,
                "m": minutes,
                "s": seconds
            };
            return obj;
        },
        buildHtmlItem: function (song, objectId, objectType) {

            var innerHTML = "";
            var tempSinger = "";
            for (var i = 0; i < song.singer.length; i++) { 
                if(i != 0){
                    tempSinger +=", ";
                }
     
                tempSinger += "<span>"+song.singer[i].alias + "<span>";
            }
            var singer = song.singer[0];

            innerHTML = '<div class="playing"  object-id="' + song.id + '" onclick="playItem(this)" ><span></span></div>' +
            '<a href="javascript:void(0)" onclick="return removeSongPerList(this)" class="icon-remove" title="Xóa khỏi danh sách"><i class="flaticon-cancel30"></i></a>' +
            '<h3 object-id="' + song.id + '" onclick="playItem(this)">' + song.name + ' - ' + tempSinger + '</h3>' +
            '<div class="group-icon"> ' +
            '<a href="javascript:void(0)" title="Tải nhạc" onclick="downSong(\'' + song.id + '\')">' +
            '<i class="flaticon-cloud302"></i>' +
            '</a>' +
            '</div>';

            return innerHTML;
        },
        buildHtmlItems: function (songs, objectId, objectType) {
            var html = '';
            var isIncludeUrl = false;
            if(!$('#listsongs').length) {
                isIncludeUrl = true;
                html += '<ul id="listsongs">';
            }


            for(var i = 0; i < songs.length; i++ ){
                var song = songs[i];
                html += '<li class="itemsong" data-position="'+i+'" object-id="'+ objectId +'" object-type="'+ objectType +'" id="'+ song.id.replace(/=/g, '_') +'">';
                html += this.buildHtmlItem(song, objectId, objectType);
                html += '</li>';
            }
            if (isIncludeUrl)
                html += '</ul>';
            return html;
        },
        getHTMLPlaylist: function( playlistId, playlistClass, songClass){
            playlistId = playlistId || "";
            playlistClass = playlistClass || "";
            songClass = songClass || "";

            var songs = this.getPlaylist();
            var listItems = [];
            var ul = document.createElement("ul");
            ul.id = 'listsongs';

            //var objectUserLikes = $.parseJSON($('#nhacso_object_user_likes').val());
            //var songUserLikes = objectUserLikes.song;
            for(var i = 0; i < songs.length; i++ ){
                var song = songs[i];
                //var isLiked = $.inArray(song.songId, songUserLikes);

                //var classIsLiked = '';
                //if (isLiked !== -1)
                //classIsLiked = 'like';
                var li = document.createElement("li");
                li.className = 'itemsong';

                if (this.song.id === song.id)
                    li.className = 'itemsong';

                var singer = " Không xác định. ";

                if(song.singer[0])
                    singer = song.singer[0];

                li.innerHTML = this.buildHtmlItem(song, song.objectId, song.objectType);

                li.setAttribute("object-id", song.objectId);
                li.setAttribute("object-type", song.objectType);
                li.id = songs[i].id;
                ul.appendChild(li);
            }
            return ul;
        }
    };

})();

function findBaseName(url) {
    return url.substring(url.lastIndexOf('/') + 1);
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function remove_unicode(str)
{
    str= str.toLowerCase();
    str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str= str.replace(/đ/g,"d");
    str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");

    str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1-
    str= str.replace(/^\-+|\-+$/g,"");

    return str;
}

function buildInfo(song) {

    var namePlayer = $('#namePlayer').val();
    var objectType = $('#objectTypeCheck').val();

    var tempSinger = "";
    for (var i = 0; i < song.singer.length; i++) { 
        if(i != 0){
            tempSinger +=', ';
        }

        tempSinger += '<a class="is-load-ajax is-push-url is-top is-detail" data-id-content=".wrap-page"  href="' + song.singer[i].urlDetail + '">' + song.singer[i].alias + '</a>';
    }

    var singer = song.singer[0];

    if(song.objectType == 'song'){
        var nameHtml = '<a class="is-load-ajax is-push-url is-top is-detail" data-id-content=".wrap-page"  href="' + song.link_detail + '">' + song.name + '</a>';
        var singerHtml = tempSinger;
    } else if(song.objectType == 'playlist'){
        var singerHtml = '<a class="is-load-ajax is-push-url is-top is-detail" data-id-content=".wrap-page"  href="' + song.link_detail + '">' + song.name + '</a> - ' +tempSinger;
        var nameHtml = '<a class="is-load-ajax is-push-url is-top is-detail" data-id-content=".wrap-page" href="'+song.link_playlist+'" style="text-transform:capitalize;">' + objectType +' : ' + namePlayer+'</a>';
    } else if(song.objectType == 'bxh'){
        var singerHtml = '<a class="is-load-ajax is-push-url is-top is-detail" data-id-content=".wrap-page"  href="' + song.link_detail + '">' + song.name + '</a> - ' +tempSinger;
        var title = song.title;
        if(title == 'Bảng Xếp Hạng Âu Mỹ')
            var nameHtml = '<a onclick="return loadAjaxPage(this)" class="is-push-url" data-id-content=".wrap-page" href="/bang-xep-hang/aumy/song/tuan.html" style="text-transform:capitalize;">' + title +'</a>';
        else if(title == 'Bảng Xếp Hạng Việt Nam')
            var nameHtml = '<a onclick="return loadAjaxPage(this)" class="is-push-url" data-id-content=".wrap-page" href="/bang-xep-hang/vietnam/song/tuan.html" style="text-transform:capitalize;">' + title +'</a>';
        else if(title == 'Bảng Xếp Hạng Hàn Quốc')
            var nameHtml = '<a onclick="return loadAjaxPage(this)" class="is-push-url" data-id-content=".wrap-page" href="/bang-xep-hang/hanquoc/song/tuan.html" style="text-transform:capitalize;">' + title +'</a>';
    } else{
        var singerHtml = '<a class="is-load-ajax is-push-url is-top is-detail" data-id-content=".wrap-page"  href="' + song.link_detail + '">' + song.name + '</a> - ' +tempSinger;
        var nameHtml = '<a class="is-load-ajax is-push-url is-top is-detail" data-id-content=".wrap-page"  href="'+song.link_album+'" style="text-transform:capitalize;">' + objectType +' : ' + namePlayer+'</a>';
    }

    var htmlLike = '';
    switch(song.isLike) {
        case true:
            htmlLike = '<a title="Yêu thích" class="like-pl" object-id="' + song.id + '" object-type="song" href="javascript:void(0)" onclick="return checkLikeSongPlayer(this)" url="/playlists/ajax-like?view_type=song&action_type=unlike&item_id='+song.id+'" data-object-id="'+song.id+'" data-object-type="song" class="like-object"><i class="fa fa-heart" ></i></a>';
            break;
        default:
            htmlLike = '<a title="Yêu thích" class="like-pl" object-id="' + song.id + '" object-type="song" href="javascript:void(0)" onclick="return checkLikeSongPlayer(this)" url="/playlists/ajax-like?view_type=song&action_type=like&item_id='+song.id+'" data-object-id="'+song.id+'" data-object-type="song" class="like-object"><i class="fa fa-heart" ></i></a>';
            break;
    }




    var imageName = findBaseName(song.link_image);
    var imagePath = song.link_image.replace(imageName, '');
    var bgImage = imagePath + imageName;
    $(".songName").html(nameHtml);
    $(".singerName").html(singerHtml);
    $(".songlike").html(htmlLike);

    $('a#more-player').attr('data-url-singer', singer.urlDetail);
    $('a#more-player').attr('data-url-album', song.link_album);
    $('a#more-player').attr('data-object', song.objectType);
    $('a#more-player').attr('data-url-song', song.link_detail);
    $('.songNameContainer').css('background-image', 'url(' + bgImage + ')');
    $('.songNameContainer').attr('href', song.link_detail);
    // $(".songName").html(nameHtml);

    var objectUserLikes = $.parseJSON($('#nhacso_object_user_likes').val());
    var songUserLikes = objectUserLikes.song;


    if (typeof song.songId === 'undefined') {
        song.songId = song.song_id
    }
    var isLiked = $.inArray(parseInt(song.songId), songUserLikes);

    $('.like-player a').removeClass('like');
    if (isLiked !== -1) {
        $('.like-player a').addClass('like');
    }
    $('.like-player a').attr('object-id', song.id);
    $('.like-player a').attr('object-type', 'song');

    $('#showLyric h2').html(nameHtml);
    $('#showLyric .name-singer').html(singerHtml);
    var lyricContent = '';

    if(song.lyric != null){
        lyricContent = song.lyric.replace(/\\n/g, "<br />");
    }
    if(song.lyric != ''){
        $('#lyric-detail').html(lyricContent);
    }
    if(song.lyric_add != ''){
        $('#lyric-detail').html(song.lyric_add);
    }
    
    $('#showLyric .scroll-pane .lyric-song').html(lyricContent);
}