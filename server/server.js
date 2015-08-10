var http = require('http');
http.createServer(function(request, response){
	console.log("visited");
	response.writeHead(200,{'Content-Type':'text/html','charset':'utf-8'});
	response.write('<h2>Hello world</h2>')
	response.end('<div background="#fe223a"><p>布局</p></div>');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888');
