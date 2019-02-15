var data = require("../data.json");

exports.view= function(request, response) {    
	// Your code goes here
	response.render('AddActivity', data);
 }