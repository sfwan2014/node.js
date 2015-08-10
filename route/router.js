
function route(response,pathname){

	response.writeHead(200, {"Content-Type":"text/html"});

	var fs = require('fs');

	try{
		if (pathname == "/Jquery.html") {
			fs.readFile('./resource/Jquery.html', 'utf-8',function(err, data){
				// console.log(data);

				if (err) {
					response.write(err);
				}else{
					response.write(data);
				}
				response.end();
			});
		} 
		else if (pathname == "/OrderDetail.html"){
			fs.readFile('./resource/OrderDetail.html', 'utf-8',function(err, data){

				if (err) {
					response.end(err);
				}else{
					response.write(data);
				}
				response.end();
			});
		} else {
			response.write("<h1>500</h1> ");
			response.end();
		}
	} catch(err){
		console.log("err: "+ err);	
	}
	console.log("About to route a request for "+ pathname);
}
exports.route = route;