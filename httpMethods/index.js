var http = require("http");
var server = http.createServer(function(request,response){
	var requestLine = request.method + " " + request.url + 
		" HTTP/" + request.httpVersion  + " REQ:" + request.headers;
	console.log(requestLine);
	response.setHeader("Set-Cookie",[
		"name=dre;Domain=test.com;HttpOnly;Secure",
		"foo=bar;Max-Age=3600"
	]);
	response.end();
});
server.listen(8000);
