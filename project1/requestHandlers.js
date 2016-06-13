var exec = require("child_process").exec,
	querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");
function start(response/*,postData*/) {
	console.log("Request handler 'start' called");

	var body = '<html>' + 
		'<head>'+
		'<meta http-equive = "Content-Type" content = "text/html; '+
		'charset=UTF-8" />' +
		'</head>' + 
		'<body>' + 
		'<form action = "/upload" enctype="multipart/form-data" ' +
		'method="post">' + 
		'<input type = "file" name = "upload"i multiple = "multiple">' + 	
		'<input type ="submit" value = "Upload a file" />' + 
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

function upload(response,request/*,postData*/){
	console.log("Request handler 'upload' was called");
	
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function (error, fields , files){
		console.log("parsing done");
		
		fs.rename(files.upload.path, "/tmp/test.png",function(err){
			if(err){
				fs.unlink("/tmp/test.png");
				fs.rename(files.upload.path, "/tmp/test.png");
			}
		});
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write("received image:<br/>");
		response.write("<img src = '/show' />");
		response.end();
	});
}
	
	/*
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Sent: "+ querystring.parse(postData).text);
	response.end();
	*/

function show(response/*, postData*/){
	console.log("Request handler ' show' was called.");
	fs.readFile("/tmp/test.png","binary",function(error,file){
		if(error){
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write(err + "\n");
			response.end();
		}else{
			response.writeHead(200,{"Content-Type":"image/png"});
			response.write(file,"binary");
			response.end();
		}
	});
}


exports.start = start;
exports.upload = upload;
exports.show = show;
