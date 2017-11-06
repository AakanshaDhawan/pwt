var csv = require('fast-csv');
var mongoose = require('mongoose');
const gstr2Model = require('../models/gstr2.model');


exports.post = function (req, res) {
	if (!req.files)
		return res.status(400).send('No files were uploaded.');
	
	var gstr2File = req.files.file;

	var gstr2 = [];
		
	csv
	 .fromString(gstr2File.data.toString(), {
		 headers: true,
		 ignoreEmpty: true
	 })
	 .on("data", function(data){
		 data['_id'] = new mongoose.Types.ObjectId();
		 
		 gstr2.push(data);
	 })
	 .on("end", function(){
		 gstr2Model.create(gstr2, function(err, documents) {
			if (err) throw err;
			
			res.send(gstr2.length + ' gstr2 have been successfully uploaded.');
		 });
	 });
};