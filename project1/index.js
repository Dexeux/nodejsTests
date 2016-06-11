var server = require("./module");
var router = require("./route");
server.start(router.route);

