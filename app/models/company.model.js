var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var companyModel = new Schema({
     gstin : {
		type : String,
	},
	date_of_registration : {
		type : Date,
	},
	type_of_entity : {
		type : String,
	},
	name_of_entity : {
		type : String,
	},
	pan_of_entity : {
		type : String,
	},
	legal_name : {
		type : String,
	},
	branch_name : {
		type : String,
	},
	state : {
		type : String,
	},
	turnover_of_previous_year : {
		type : String,
	},
	turnover_of_this_year : {
		type : String,
	},
	category_of_taxpayer : {
		type : String,
	},
	login:{
		gstin_userid: {
			type : String,
	    },
		gstin_password : {
			type : String,
		}
	}
});


module.exports = mongoose.model('company', companyModel);
