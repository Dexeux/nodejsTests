var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'username',
	password: 'password',
	database: 'databasename'
});

connection.connect();
connection.query('SELECT * FROM <TABLE NAME>',function(err,rows,fields){
	if(!err)
		console.log('The solution is: '. rows);
	else
		console.log('Error while performing Query.');
});
connection.end();
