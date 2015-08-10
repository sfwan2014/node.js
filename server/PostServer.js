var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,res){
	var post='';
	req.on('data', function(chunk){
		console.log(util.inspect(chunk));
		post += chunk;
	});
	req.on('end', function(){
		post = querystring.parse(post);
		res.end(util.array(post));
	});
}).listen(3000);
console.log('http://127.0.0.1:3000');