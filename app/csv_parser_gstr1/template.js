var json2csv = require('json2csv');

exports.get = function(req, res) {

	var fields = [
		'buyer.gstin',
		'buyer.name',
		'invoice.number',
		'invoice.date',
		'place_of_supply',
		'total_value',
		'rate',
		'taxable_value ',
		'igst',
		'cgst',
		'sgst',
		'cess',
		'reserve_charge',
		'type',
		'ecommerce_gstin'
	];

	var csv = json2csv({ data: '', fields: fields });

	res.set("Content-Disposition", "attachment;filename=gstr1.csv");
	res.set("Content-Type", "application/octet-stream");

	res.send(csv);

};

