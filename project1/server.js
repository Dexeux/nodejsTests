var http = require("http");

http.createServer(inserver).listen(8888);


function inserver(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello world!");
	response.end();
}
