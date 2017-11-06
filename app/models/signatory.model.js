var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var signatoryModel = new Schema({
    name : {
		type : String,
	},
	aadhaar : {
		type : String,
	},
	pan : {
		type : String,
	},
});

module.exports = mongoose.model('signatory', signatoryModel);