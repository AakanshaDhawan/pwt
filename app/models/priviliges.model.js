var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = new Schema({
     email : {
		type : String,
	},
   });

var priviligesModel = new Schema({
    email:[emailSchema]
});


module.exports = mongoose.model('priviliges', priviligesModel);
