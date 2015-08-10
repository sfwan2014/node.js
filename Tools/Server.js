var http = require('http');

http.createServer(function(request, response){
	var route = require('./Router');
	
//	response.writeHead(200,{"Content-Type":"text/html"});
//	response.end("<h2>Hello</h2>")
}).listen(8888);
console.log("http://127.0.0.1:8888");

