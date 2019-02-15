var data = require('../data.json');
/*
 * GET home page.
 */

exports.inputactivities = function(request, response){
  console.log(data);
  	json = {'ActivityName': request.query.ActivityName1,'workLength':25, 'breakLength':25};
	data.activities.push(json);
	json = {'ActivityName': request.query.ActivityName2,'workLength':25, 'breakLength':25};
	data.activities.push(json);
	json = {'ActivityName': request.query.ActivityName3,'workLength':25, 'breakLength':25};
	data.activities.push(json);
	json = {'ActivityName': request.query.ActivityName4,'workLength':25, 'breakLength':25};
	data.activities.push(json);
  response.render('activities', data);
};