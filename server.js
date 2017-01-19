var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');

var app = express()
var PORT = process.env.PORT || 8000;
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

require('./app/routing/html-routes.js')(app);


app.listen(PORT, function(){
	console.log("This app is running hard AF on PORT: " + PORT);
});
