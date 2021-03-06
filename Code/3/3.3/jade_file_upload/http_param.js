var _res,_req,
	url = require('url'),
	querystring = require('querystring');
/**
 * 初始化res和req参量
 */
exports.init = function(req, res){
	_res = res;
	_req = req;
}

/**
 * 获取GET参数方法
 */
exports.GET = function(key){
	var paramStr = url.parse(_req.url).query,
		param = querystring.parse(paramStr);
	return param[key] ? param[key]  : '';
}

/**
 * 获取POST参数方法
 */
exports.POST = function(key, callback){
	var postData = '';
	_req.addListener('data', function(postDataChunk) {
        postData += postDataChunk;
    });
    _req.addListener('end', function() {
        // 数据接收完毕，执行回调函数
        var param = querystring.parse(postData);
		console.log(param);
		console.log(param['image']);
		var value = param[key] ? param[key]  : '';
		callback(value);
    });
}