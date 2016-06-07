var fs = require("fs");

fs.readFile("fileReading.txt","utf8",function(error,data){
	if(error){
		throw error;
	}

	console.log(data);
});

console.log("Reading file...");
