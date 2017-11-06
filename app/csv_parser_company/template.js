var json2csv = require('json2csv');

exports.get = function(req, res) {

	var fields = [
		'gstin',
		'date_of_registration',
		'type_of_entity',
		'name_of_entity ',
		'pan_of_entity',
		'legal_name',
		'branch_name',
		'state',
		'turnover_of_previous_year',
		'turnover_of_this_year',
		'category_of_taxpayer',
		'login.gstin_userid',
		'login.gstin_password'
	];

	var csv = json2csv({ data: '', fields: fields });

	res.set("Content-Disposition", "attachment;filename=company.csv");
	res.set("Content-Type", "application/octet-stream");

	res.send(csv);

};
