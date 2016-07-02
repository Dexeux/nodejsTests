var server = require("./server");
var router = require("./router");
var requestHandle = require("./requestHandle");

var handle = {}
//Define page functions for handler
handle["/"] = requestHandle.main;
handle["/home"] = requestHandle.home;
server.start(router.route,handle);

