var server = require("./server");
var router = require("./router");
var requestHandle = require("./requestHandle");

var handle = {}
//Define page functions for handler
//handle["/"] = requestHandlers.start;
//handle["/home"] = requestHandlers.homepage;
server.start(router.route,handle);

