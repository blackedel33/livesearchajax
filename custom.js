//fungsi memanggil via jquery

// $('.update').load('data.json');

//ambil data.json
// $.getJSON('data.json', function (data){
// 	var output = '<ul>';
// 	$.each(data, function(key, val){
// 		output += '<li>' + val.nama + '</li>';
// 	});
// 	output += '</ul>';
// 	//prepend = kebawah
// 	$('.update').append(output);
// });

//materi live search

$('#search').keyup(function(){

	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	//console.log(searchField);

	$.getJSON('data.json', function(data){
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val){
			if (val.nama.search(myExp) != -1) {
				output += '<li>';
				output += '<h2>'+ val.nama +'</h2>';
				output += '<img src="img/' + val.shortname +'_img.png" alt="' + val.nama +'" width="100" height="100"/>';
				output += '</li>';
		}
		});
		output += '</ul>';
		$('.update').html(output);
	});

});

