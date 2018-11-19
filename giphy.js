document.addEventListener('DOMContentLoaded', function () {
	q = "finger guns"; // search query
	
	request = new XMLHttpRequest;
	request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=EOvxPf7jMMtXmpW6GVGndluHTFeJdFd6', true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.images.fixed_width_small.url;
			console.log(data);
			document.getElementById("giphyme").innerHTML = '<left><img src = "'+data+'"  title="GIF via Giphy" width="80"></left>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});
