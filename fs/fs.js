var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200,{'Content-type':'text/html'});

	var fs = require('fs');
	fs.readFile('OrderDetail.html', 'utf-8',function(err, data){

		if (err) {
			res.end(err);
		}else{
			res.end(data);
		}
	});

	
}).listen(8888);

console.log('http://127.0.0.1:8888');