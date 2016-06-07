var fs = require("fs");
var domain = require("domain").create();

fs.readFile("","utf8", domain.bind(function(error,data){
	if (error) {
		throw error;
	}
	console.log(data);
	domain.dispose();
}));

domain.on("error",function(error) {
	console.log("The exception was caught!")
});
