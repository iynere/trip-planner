
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var swig = require('swig');

var app = express();

// Swig Setup
swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);

// all environments
app.set('port', process.env.PORT || 3000); //allows us to say app.get('port') <-- very different from app.get that you are used to, same name but different implementation because of the number and type of parameters. This is a poor convention
app.use(express.favicon());
app.use(express.logger('dev')); //just like morgan but with express (only for express3)
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/contact', routes.contact);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


