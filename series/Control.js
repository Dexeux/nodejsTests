var async = require("async");

async.series([
	function(callback) {
		setTimeout(function() {
			console.log("task 1");
			callback(null,1);
		},300);
	},
	function(callback) {
		setTimeout(function() {
			console.log("task 2");
			callback(null,2);
		},200);
	},
	function(callback) {
		setTimeout(function() {
			console.log("task 3");
			callback(null,3);
		},100);
	}
], function(error,results) {
	console.log(results);
});

