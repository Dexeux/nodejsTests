var async = require("async");

async.parallel({
	one: function(callback) {
		setTimeout(function() {
			console.log("Task1");
			callback(null,1);
		},300);
	},
	two: function(callback) {
		setTimeout(function() {
			console.log("Task2");
			callback(null,2);
		},200);
	},
	three: function(callback) {
		setTimeout(function() {
			console.log("Task3");
			callback(null,3);
		},100);
	}
},function(error,results) {
	console.log(results);
});
