var http = require('http');
var url = require('url');

function start(route){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("request for "+pathname+" received.");

		route(response,pathname);
	}
	http.createServer(onRequest).listen(8888);
	console.log("server has started at http://127.0.0.1:8888.");
}
exports.start = start;