var route = function(response)
{
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end("server start");
}
exports.route=route;
