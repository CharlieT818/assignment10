var data = require('../data.json');
/*
 * GET home page.
 */
exports.editactivities = function(request, response){
  console.log(data);
  for (var i = 0; i < data.activities.length; i++) {
  	console.log(data.activities[i].ActivityName);
  	console.log(request.query.ActivityName);
    data.activities[i].ActivityName = request.query.ActivityName;
    data.activities[i].workLength = request.query.workLength;
    data.activities[i].breakLength = request.query.breakLength;
    break;
}
  response.render('activities', data);
};
