function loadAJAX() {
var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new 
	ActiveXObject("Microsoft.XMLHTTP");
}
// request.open('GET', 'data.txt');
// request.open('GET', 'data.xml');
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && 
		(request.status===200)) {
		
		//materi 1 ambil dari xml
		// console.log(request.responseXML.getElementsByTagName('nama')
		// 	[1].firstChild.nodeValue);


		// var items =
		// 	request.responseXML.getElementsByTagName('nama');
		// 	//nampil pada setiap li
		// var output = '<ul>';
		// for (var i = 0; i < items.length; i++){
		// 		output += '<li>' +
		// 			items[i].firstChild.nodeValue + 
		// 			'</li>';
		// }
		// output += '</ul>';

		// 	document.getElementById('update').innerHTML = output;

		// var modify = 
		// 	document.getElementsByTagName('li');
		// for (var i = 0; i < modify.length; i++) {
		// 	modify[i].innerHTML = request.responseText;			
		// }

		//materi 2 ambil dari json

		var items = JSON.parse(request.responseText);
		var output = '<ul>';
		for (var key in items) {
			output += '<li>' + items[key].nama + '</li>';
		}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
	}
}
request.send();
} // panggil ajax