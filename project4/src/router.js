function route( handler , pathname , response , request ){
	console.log("Routing: " + pathname);
	if(typeof handler[pathname] === 'function'){
		handler[pathname](response,request);
	}else{
		console.log("Error: Invalid handle: " + pathname);
		response.writeHead(404, {"Content-Type":"text/plain"});
		response.write("404 URL not found.");
		response.end();
	}
}
exports.route = route;
