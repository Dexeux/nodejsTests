var http = require("http");
var request = http.request("http://localhost:8000/",function(response){
	response.setEncoding("utf8");
	response.on("data",function(data){
		process.stdout.write(data);
	});
	response.on("end",function(){
		console.log();
	});
});
