var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
        
local:{  
	user_name: {
		type:String
	},
	email : {
		type : String,
		required : true,
		unique:true
	},
	password : {
		type : String,
	},
    mobile : {
		type : Number,
		
	},	
},
});


userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('user', userSchema);
