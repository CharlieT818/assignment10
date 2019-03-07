var data = require('../data.json');

exports.viewAlt = function(request, response){
	console.log(data);
	data["viewAlt"] = true;
	response.render('CompleteActivity', data);
}
exports.view = function(request, response){
	console.log(data);
	data["viewAlt"] = false;
  	response.render('CompleteActivity', data);
};