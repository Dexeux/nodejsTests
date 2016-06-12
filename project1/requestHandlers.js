var exec = require("child_process").exec;

function start(response,postData) {
	console.log("Request handler 'start' called");

	var body = '<html>' + 
		'<head>'+
		'<meta http-equive = "Content-Type" content = "text/html; '+
		'charset=UTF-8" />' +
		'</head>' + 
		'<body>' + 
		'<form action = "/upload" method="post">' + 
		'<textarea name="text" rows="20" cols="60"> </textarea>' +
		'<input type ="submit" value = "Submit text" />' + 
		'</form>' + 
		'</body>' + 
		'</html>';
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(body);
		response.end();	
/*	exec("ls -lah", function(error,stdout,stderr) {
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("Start menu");
		response.write(stdout);
		response.end();
	});
*/
}

function upload(response,postData){
	console.log("Request handler 'upload' was called");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Sent: "+ postData);
	response.end();
}

exports.start = start;
exports.upload = upload;

