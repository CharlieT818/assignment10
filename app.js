
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var activities = require('./routes/activities');
var CompleteActivity = require('./routes/CompleteActivity');
var InputActivities = require('./routes/InputActivities');
var add = require('./routes/add');
var edit = require('./routes/edit');
var input = require('./routes/input');
var AddActivity = require('./routes/AddActivity');
var EditActivity = require('./routes/EditActivity');
var Statistics = require('./routes/Statistics');
var ExercisesButton = require('./routes/ExercisesButton');
var Settings = require('./routes/Settings');
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
app.get('/activities', activities.view);
app.get('/InputActivities', InputActivities.view);
app.get('/CompleteActivity', CompleteActivity.view);
app.get('/CompleteActivityB', CompleteActivity.viewAlt);
app.get('/AddActivity', AddActivity.view);
app.get('/EditActivity', EditActivity.view);
app.get('/Statistics', Statistics.view);
app.get('/Settings', Settings.view);
app.get('/BeginTimer', BeginTimer.view);
app.get('/ExercisesButton', ExercisesButton.view);
app.get('/add', add.addactivities);
app.get('/edit', edit.editactivities);
app.get('/input', input.inputactivities);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
