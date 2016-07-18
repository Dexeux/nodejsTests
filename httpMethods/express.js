var express = require("express");
var http = require("http");
var app = express();

app.get(/\/products\/([^\/]+)\/?$/,function(req,res,next){
	res.send("Requested " + req.params[0]);
});

app.get("/games/:libgame",function(req,res,next){
	res.send("Requested " + req.params.libgame);
});

app.get("/movies/:libmovie(\\d+)",function(req,res,next){
	res.send("Requested " + req.params.libmovie);
});
app .get("/", function(req,res,next){
	res.send("Hello <strong>home page</strong>");
});

app.get("/hello",function(req,res,next){
	res.send("Hello <strong> hello page </strong>");
});

app.get("/bar",function(req,res,next){
	res.send("Hello <strong> bar </strong>");
});

http.createServer(app).listen(8080);

