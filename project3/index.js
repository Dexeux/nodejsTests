var insertDocument = require('./inserdocument');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err,db){
	assert.equal(null,err);
	insertDocument.insertDocument(db,function(){
	db.close();
	});
});

