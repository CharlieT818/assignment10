var data = require('../data.json');
/*
 * GET home page.
 */

exports.addactivities = function(request, response){
  console.log(data);
  	json = {'ActivityName': request.query.ActivityName,'workLength':request.query.workLength, 'breakLength':request.query.breakLength};
	console.log(json);
	data.activities.push(json);
  response.render('activities', data);
};