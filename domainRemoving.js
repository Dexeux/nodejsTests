var domain = require("domain");
var d1 = domain.create();
var d2 = domain.create();
//program crashes due to uncaught error
d1.run(function() {
	var timer = setTimeout(function() {
		throw new Error("test error");
	},1);
	
	
	d2.add(timer);
	d2.remove(timer);
});

d2.on("error",function(error) {
	console.log("Caught by d2");
});

d1.on("error",function(error){
	console.log("Caught by d1")
});
