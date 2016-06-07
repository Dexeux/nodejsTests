var fs = require("fs");
var domain = require("domain").create();

fs.readFile("","utf8", domain.intercept(function(data){
	console.log(data);
	domain.dispose();
}));

domain.on("error", function(error) {
	console.log("The exception was caught!")
});
