var url = require('url');
exports.router = function(res, req){
	var pathname = decodeURI(url.parse(req.url).pathname);
	var pathArr = pathname.split('/')
	  , model = pathArr[1]
	  , controller = pathArr[2]
	  , Class = '';
	if(model == 'favicon.ico'){
		return;
	}
	try{
		Class = require('./controller/' + model);
	} catch(err){
		console.log('no this module');
	}
	
	if(Class){
		var object = new Class(res, req);
		if(object[controller]){
			object[controller].call();
		} else {
			console.log(model + ' has no this ' + controller + ' action');
		}
	}
	var str = 'get static file, but can not find it in server';
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(str);
}