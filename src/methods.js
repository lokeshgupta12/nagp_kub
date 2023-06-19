var student;
// connect mongodb
var mongoDbConnect = function(error, db){
    if(error) throw error;
     var dbData =  db.db("mongoData")
     student = dbData.collection("students")
}
// submitt form
var submitData = function(req, res) {
    var resultArray
	student.insert(req.body)
	student.find({}).toArray(function(err, result) {
		if (err) throw err;
		resultArray = result
		res.send({"status": "ok",
		           "dataList" :resultArray,
		           "dataParticular" : req.body})
	});
}
// export all function
module.exports = {
  mongoDbConnect : mongoDbConnect,
  submitData : submitData
}