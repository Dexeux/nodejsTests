var assert = require('assert');
function insertDocument(db , callback) {
	db.collection('restaurants').insertOne({
		"address" : {
			"street"	:	"2 Avenue",
			"zipcode"	:	"10075",
			"building"	:	"1380",
			"coord"		:	[-73.9331243,40.2934857]
		},
		"borough"	:	"Manhattan",
		"cuisine"	:	"Italian",
		"grades"	:	[
		{
			"date"	:	new Date("2014-10-01T00:00:00Z"),
			"grade"	:	"A",
			"score"	:	11,
		},
		{
			"date" :	new Date("2014-01-15t00:00:00Z"),
			"grade":	"B",
			"score":	17,
		}
		],
		"name"		:	"Vello",
		"restaurant_id"	:	"41704620"
	}, function(err,result){
		assert.equal(err,null);
		console.log("Document has been inserted into the restaurant collection.");
		callback();
	});
};
exports.insertDocument = insertDocument;
