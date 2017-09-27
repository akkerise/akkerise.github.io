$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAnhW_F8bVM-bjgYA2HT5avdS9GmnfKQL0",
        authDomain: "vueresource-cf1f1.firebaseapp.com",
        databaseURL: "https://vueresource-cf1f1.firebaseio.com",
        projectId: "vueresource-cf1f1",
        storageBucket: "vueresource-cf1f1.appspot.com",
        messagingSenderId: "171756351573"
    };
    firebase.initializeApp(config);


    // Get data for category : Tin Tức Công Nghệ
    $.ajax({
    	url: 'https://vueresource-cf1f1.firebaseio.com/data/categories/0.json',
    	type: 'GET',
    	dataType: 'JSON',
    })
    .done(function(data) {
    	console.log(data);
    	$('#nameArticle').text(data.name);
		$('#contentArticle').text(data.content);
    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });



	$('.collection-item').on('click', function (e) {
		e.preventDefault();
		console.log(this.id.replace('category', ""));
		let idCategory = parseInt(this.id.replace('category', ""));
		setTimeout(function () {
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
				);

			setTimeout(function () {
				$('#preloader1s').empty();
				$('#article').append();


				$.ajax({
					url: 'https://vueresource-cf1f1.firebaseio.com/data/categories.json',
					type: 'GET',
					dataType: 'JSON',
				})
				.done(function(data) {
					$('#nameArticle').text(data[idCategory].name);
					$('#contentArticle').text(data[idCategory].content);

				})
				.fail(function() {
					console.log("error");
				})
				.always(function() {
					console.log("complete");
				});
				


			}, 1000)
		}, 1000);
	})
});