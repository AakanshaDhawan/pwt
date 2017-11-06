var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addUserModel = new Schema({
    email : {
		type : String,
	},
	password : {
		type : String,
	},
	mobile: {
		type : String,
	},
	company_access : {
		type : String,
	},
	form_access : {
		type : String,
	},
});

module.exports = mongoose.model('addUser', addUserModel);