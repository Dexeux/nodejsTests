var results = [];

setTimeout(function() {
	console.log("task 1");
	results[0] = 1;
},300);

setTimeout(function() {
	console.log("task 2");
	results[1] = 2;
},200);

setTimeout(function() {
	console.log("task 3");
	results[2] = 3;
},100);
