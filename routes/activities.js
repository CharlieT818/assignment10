var data = require('../data.json');
/*
 * GET home page.
 */

exports.view = function(request, response){
  console.log(data);
  response.render('activities', data);
};