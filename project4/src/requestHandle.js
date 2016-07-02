//Handle the request here

var exec = require("child_process").exec,
	querystring = require("querystring"),
	formidable = require("formidable");
function main(response){
	console.log("Request handler 'main; called");

};
function home(response){
	console.log("Request handler 'home' called");
	var body = '<html>' + 
		'<head>' + 
		'<meta http-equive = "Content-Type" content = "text/html;'+
		'charset = UTF-8" />' +
		'</head>' + 
		'<body>' +
		'<h1>' +
		'Test 123' +
		'</h1>' +
		'</body>' + 
		'</html>';
	response.writeHead(202,{"Content-Type":"text/html"});
	response.write(body);
	response.end();
};
exports.main = main;
exports.home = home;
