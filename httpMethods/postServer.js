var http = require("http");
var qs = require("querystring");
var server = http.createServer(function(request, response) {
	var bodyString = "";
	 
	request.setEncoding("utf8");
	 
	request.on("data", function(data) {
		bodyString += data;
	});
	 
	request.on("end", function() {
		var body = qs.parse(bodyString);
		 
		for (var b in body) {
			response.write(b + ' = ' + body[b] + "\n");
			response.write("no");
		}
		 
		response.end();
	});
});
 
server.listen(8000);
