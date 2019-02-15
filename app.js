
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var Math_Homework = require('./routes/Math_Homework');
var AddActivity = require('./routes/AddActivity');
var EditActivity = require('./routes/EditActivity');
var Statistics = require('./routes/Statistics');
var StatisticsMath = require('./routes/StatisticsMath');
var StartReading = require('./routes/StartReading');
var StartScience = require('./routes/StartScience');
var StartCoding = require('./routes/StartCoding');
var Settings = require('./routes/Settings');
var SettingsMath = require('./routes/SettingsMath');
var StartExercises = require('./routes/StartExercises');
var BeginTimer = require('./routes/BeginTimer');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/index', index.view);
app.get('/Math_Homework', Math_Homework.view);
app.get('/AddActivity', AddActivity.view);
app.get('/EditActivity', EditActivity.view);
app.get('/Statistics', Statistics.view);
app.get('/StatisticsMath', StatisticsMath.view);
app.get('/StartReading', StartReading.view);
app.get('/StartScience', StartScience.view);
app.get('/StartCoding', StartCoding.view);
app.get('/Settings', Settings.view);
app.get('/SettingsMath', SettingsMath.view);
app.get('/StartExercises', StartExercises.view);
app.get('/BeginTimer', BeginTimer.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
