var app = require('express')();
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');


app.use(fileUpload());

var template = require('./template.js');
app.get('/template', template.get);

var upload = require('./upload.js');
app.post('/', upload.post);