function route(handle,pathname,response,request/*,postData*/){
	console.log("Routing: " + pathname);
	if(typeof handle[pathname] === 'function') {
		handle[pathname](response,request/*,postData*/);
	}else{
		console.log("Invalid handle url for: " + pathname);
		response.writeHead(404, {"Content-Type":"text/plain"});
		response.write("404 Url not found");
		response.end();
	}
}
exports.route = route;
