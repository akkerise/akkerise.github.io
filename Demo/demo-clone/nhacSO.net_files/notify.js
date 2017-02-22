$(function() {
    var socket = io(hostNotify, {
        'reconnectionDelay': 60000,
        'reconnectionDelayMax':65000,
        'reconnectionAttempts':2,
        'query':'token='+socketio_token
    });
    socket.on('connect', function() {
        // call the server-side function 'adduser' and send one parameter (value of prompt)
        var user_channel = $('#user_channel').val();
        if (user_channel) {
            socket.emit('kenh', user_channel, function (status) {
                // data will be 'woot'
                console.log('thuc hien add kenh: '+ user_channel +' to server '+status);
            });
        }
    });
    // listener, whenever the server emits 'updatechat', this updates the chat body
    socket.on('add_message', function (message) {
        var msg = jQuery.parseJSON(message);

        $.bootstrapGrowl(msg.title + '<a href="'+msg.link+'"> Xem</a>', {
            type: 'success',
            align: 'right',
            width: 300,
            offset: {from: 'bottom', amount: 50},
            allow_dismiss: true,
            delay: 5000
        });

        playNotify();
    });
    // listener, whenever the server emits 'noti', this updates the view noti
    socket.on('noti', function (message) {
        // play audio notify
        playNotify();

        var msg = jQuery.parseJSON(message);
        $.bootstrapGrowl('<a href="'+msg.link+'">'+msg.title+'</a>', {
            type: 'success',
            align: 'right',
            width: 300,
            offset: {from: 'bottom', amount: 50},
            allow_dismiss: true,
            delay: 5000
        });

        var tmp = $('.notification span.badge').text();
        if (tmp=='') tmp = 0;
        $('.notification span.badge').html( parseInt(tmp) + 1);
        //tmp = '('+$('.notification span.badge').text()+') ' + document.title;
        //document.title = tmp;
    });
});

function playNotify() {
    // play audio notify
    if ( $('#noti_audio').length == 0) {
        $('body').append('<audio id="noti_audio" src="'+STATIC_URL+'/NhacSo5.1/html/music/button-1.mp3" autoplay></audio>');
    } else {
        $('#noti_audio')[0].play();
    }
}
function notifyUser(obj){
    var	url = '/notify/index?type=home';

    $.ajax({
        url: url,
        type: 'get',
        dataType: "html",
        success: function(html){
            $('#listNotify').html(html);
            $('.notification span.badge').html( '' );
        }
    });
}

//$(document).on( "click", ".notifyitem", function( e ) {
//    //e.preventDefault();
//    var id = $(this).attr('data-id');
//
//    var urlactive = '/notify/active?id='+id;
//
//    $.ajax({
//        url: urlactive,
//        type: 'post',
//        success: function(id){
//            if(id != 0){
//                $("#notify").html(id);
//            }
//            else
//            {
//                $("#notify").html('');
//            }
//        }
//    });
//});