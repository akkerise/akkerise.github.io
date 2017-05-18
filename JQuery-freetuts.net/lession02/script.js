/**
 * Created by akke on 2/23/17.
 */
$(document).ready(function(){
    var ul = $('#list');
    var li = $(ul).find('li');
    var content = $(ul).text();
    // alert(li.length);
    
    console.log(li);
    for(var i = 0 ; i < li.length; i++){
        content += $(li[i]).text();
    }
    $('#result').html(content);
    // $('a[title="css"]').css('color','red');
    $('a[title!="css"]').css('color','red');
    
});

// Attribute
