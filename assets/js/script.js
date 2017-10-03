$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAnhW_F8bVM-bjgYA2HT5avdS9GmnfKQL0",
        authDomain: "vueresource-cf1f1.firebaseapp.com",
        databaseURL: "https://vueresource-cf1f1.firebaseio.com",
        projectId: "vueresource-cf1f1",
        storageBucket: "vueresource-cf1f1.appspot.com",
        messagingSenderId: "171756351573"
    }
    firebase.initializeApp(config)



    function timeOut(time) {
        const d = $.Deferred();
        setTimeout(() => {
          d.resolve;
        }, time)
        return d.promise();
    }




    $('.collection-item').on('click', function (e) {
        e.preventDefault();
        let idCategory = parseInt(this.id.replace('category', ""))
        
        timeOut(1000).then(() => {
            $('#preloader1s').html(
                '<div class="preloader-wrapper big active">\n' +
                '    <div class="spinner-layer spinner-blue-only">\n' +
                '      <div class="circle-clipper left">\n' +
                '        <div class="circle"></div>\n' +
                '      </div><div class="gap-patch">\n' +
                '        <div class="circle"></div>\n' +
                '      </div><div class="circle-clipper right">\n' +
                '        <div class="circle"></div>\n' +
                '      </div>\n' +
                '    </div>\n' +
                '  </div>'
                )

            $('#preloader1s').empty()
            $('#article').append()
            $.ajax({
                async: false,
                url: 'https://vueresource-cf1f1.firebaseio.com/data/categories.json',
                type: 'GET',
                dataType: 'JSON',
            })
            .done((data) => {
                console.log(data);
                $('#nameArticle').text(data[idCategory].name)
                $('#contentArticle').text(data[idCategory].content)
                $('#imgArticle').attr('src', data[idCategory].imgsrc)
                $('#imgArticle').attr('alt', data[idCategory].name)
            })
            .fail(function () {
                console.log("error")
            })
            .always(function () {
                console.log("complete")
            })
        })
    })


})

let getRandomNumber = (min, max) => {
    const randInt = Math.floor(Math.random() * (max-min + 1) + min)
    return randInt
}

// Get data for category : Tin Tức Công Nghệ
$.ajax({
    // async: false,
    url: 'https://vueresource-cf1f1.firebaseio.com/data/categories/'+ getRandomNumber(0,4) +'.json',
    type: 'GET',
    dataType: 'JSON',
}).done(function (data) {
    $('#nameArticle').text(data.name)
    $('#contentArticle').text(data.content)
    $('#imgArticle').attr('src', data.imgsrc)
}).fail(function () {
    console.log("error")
}).always(function () {
    console.log("complete")
})

