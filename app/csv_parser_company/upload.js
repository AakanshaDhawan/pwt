var csv = require('fast-csv');
var mongoose = require('mongoose');
const companyModel = require('../models/company.model');

exports.post = function (req, res) {
	if (!req.files)
		return res.status(400).send('No files were uploaded.');
	
	var authorFile = req.files.file;

	var company = [];
		
	csv
	 .fromString(companyFile.data.toString(), {
		 headers: true,
		 ignoreEmpty: true
	 })
	 .on("data", function(data){
		 data['_id'] = new mongoose.Types.ObjectId();
		 
		 company.push(data);
	 })
	 .on("end", function(){
		 companyModel.create(company, function(err, documents) {
			if (err) throw err;
			
			res.send(company.length + ' company have been successfully uploaded.');
		 });
	 });
};