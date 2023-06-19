var student;
// connect mongodb
var mongoDbConnect = function(res){
    // if(error) throw error;
     var dbData =  res.db();
     student = dbData.collection("students")
}
// submitt form
var submitData = async function(req, res) {
    // var resultArray
	await student.insertOne(req.body);
	res.sendStatus(200);
	// student.find({}).toArray(function(err, result) {
	// 	if (err) throw err;
	// 	resultArray = result
	// 	res.send({"status": "ok",
	// 	           "dataList" :resultArray,
	// 	           "dataParticular" : req.body})
	// });
}
// export all function
module.exports = {
  mongoDbConnect : mongoDbConnect,
  submitData : submitData
}