var csv = require('fast-csv');
var mongoose = require('mongoose');
const gstr1Model = require('../models/gstr1.model');

exports.post = function (req, res) {
	if (!req.files)
		return res.status(400).send('No files were uploaded.');
	
	var gstr1File = req.files.file;

	var gstr1 = [];
		
	csv
	 .fromString(gstr1File.data.toString(), {
		 headers: true,
		 ignoreEmpty: true
	 })
	 .on("data", function(data){
		 data['_id'] = new mongoose.Types.ObjectId();
		 
		 gstr1.push(data);
	 })
	 .on("end", function(){
		 gstr1Model.create(gstr1, function(err, documents) {
			if (err) throw err;
			
			res.send(gstr1.length + ' gstr1 have been successfully uploaded.');
		 });
	 });
};