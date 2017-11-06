var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gstr1Model = new Schema({
    buyer:{
		gstin : {
			type : String,
		},
		name : {
			type : String,
		},
	},
	invoice:{
		number : {
			type : Number,
		},
		date : {
			type : Date,
		},
	},
	place_of_supply: {
		type : String,
	},
	total_value : {
		type :  Number,
	},
	rate: {
		type : Number,
	},
	taxable_value : {
		type :  Number,
	},
	igst : {
		type :  Number,
	},
	cgst : {
		type : Number,
	},
	sgst : {
		type : Number,
	},
	cess : {
		type : String,
	},
	reserve_charge : {
		type : Number,
	},
	type: {
		type : String,
	},
	ecommerce_gstin: {
		type : String,
	},
});

module.exports = mongoose.model('gstr1', gstr1Model);