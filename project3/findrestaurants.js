var assert = require('assert');
function findRestaurants(db,callback){
	//find only the things in the borough feild that equal manhattan..
//	var cursor = db.collection('restaurants').find({"borough":"Manhattan"});
	//Find the feilds in zipcode
	//var cursor = db.collection('restaurants').find({"address.zipcode":"10075"});
	//Finding from the array
	var cursor = db.collection('restaurants').find({"grades.grade":"B"});
	cursor.each(function (err, doc) {
		assert.equal(err,null);
		if(doc != null){
			console.dir(doc);
		}else{
			callback();
		}
	});
};

exports.findRestaurants = findRestaurants;
