var http = require("http");
var connect = require("connect");
var app = connect();
var qs = require('qs');

//app.use(qs.parse());
app.use(function(request,response,next){
	var obj = qs.parse(request.url);
	console.log(obj);
	//	var query = request.query;
//	for (q in query){
//		console.log(q + ' = ' + query[q]);
//	}
		next();
});

app.use(function(request,response,next){
	response.setHeader("Content-Type","text/html");
	response.end("Hello <b> test </b>!");
});

http.createServer(app).listen(8080);
