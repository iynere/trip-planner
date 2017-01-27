
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var db = require('./models');
var path = require('path');
var swig = require('swig');
var morgan = require('morgan');

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
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.contact);

db.sync({force: true})
   .then(function () {
       app.listen(3000, function () {
           console.log('Server is listening on port 3000!');
       });
   })
   .catch(console.error);

/* OLD from this morning

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const path = require('path');

// NUNJUCKS
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});

// LOGGING
app.use(morgan('dev'));

// BODY PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/views')));

app.use(express.static('/public'));

app.get('/', (req, res) => res.render('home'));

// app.get('/about', routes.about);
// app.get('/contact', routes.contact);

app.use((error, req, res, next) => {
	console.log(error);
});

app.listen(3000, () => {
	console.log('live on 3000!');
});

module.exports = app; */
