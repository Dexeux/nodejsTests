var server = require("./module");
var router = require("./router");
server.start(router.route);

