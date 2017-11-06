var express = require('express');
var router = express.Router();
var User = require('../models/user');


// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/views/index.html'));
});
 
router.post('/signup',function(req,res){
	var userData = new User();
	
      userData.email=req.body.email,
      userData.username= req.body.username,
      userData.password= req.body.password,
      userData.mobile=req.body.mobile,
    
	userData.save(function(err,savedUser){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		else{
			return res.status(200).send();
		}
	});
	
});

router.post('/login',function(req,res){
	
	
      var username= req.body.username,
      var password= req.body.password,
      
	  User.findOne({username:username,password:password},function(err,user){
		  if(err){
			 console.log(err);
			return res.status(500).send(); 
		  }
		  if(!user){
			 return res.status(404).send();
		  }
		  else
		  {
			return res.status(200).send();
		  }
	  })
});