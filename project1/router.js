function route(handle,pathname,response){
	console.log("Routing: " + pathname);
	if(typeof handle[pathname] === 'function') {
		handle[pathname](response);
	}else{
		console.log("Invalid handle url for: " + pathname);
		response.writeHead(404, {"Content-Type":"text/plain"});
		response.write("404 Url not found");
		response.end();
	}
}
exports.route = route;
