
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');

var flash    = require('connect-flash');

var configDB = require('./config/database.js');

// configuration
mongoose.connect(configDB.url); 

app.configure(function() {
	app.use(express.logger('dev')); 
	app.use(express.cookieParser());
	app.use(express.bodyParser());
});

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// serve static files from template
app.use(express.static(__dirname + '/views'));

// include routes
var routes = require('./routes/router');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});


