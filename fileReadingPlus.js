var fs = require("fs");
var fileName = "fileReading.txt";

function cbReadFile(error,data){
	if (error) {
		throw error;
	}
	
	console.log(data);
}

function cbStat(error, stats) {
	if (error) {
		throw error;
	}
	
	if (stats.isFile()){
		fs.readFile(fileName,"utf8",cbReadFile);
	}
}

function cbExists(exists) {
	if (exists) {
		fs.stat(fileName,cbStat);
	}else{
	console.log("File does not exist");
	}
}

fs.exists(fileName,cbExists);
