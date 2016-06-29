var http = require("http");
var url = require("url");

function start ( route , handler ){
	function onRequest ( request , response ){
		//Parse the url and then route the request
		var pathname = url.parse(request.url).pathname;
		console.log("Request for: " + pathname );
		route( handler , pathname , response , request);
	}
	//Create the server on 8080 port
	http.createServer(onRequest).listen(8080);
	console.log("Server started");
}
exports.start = start;
