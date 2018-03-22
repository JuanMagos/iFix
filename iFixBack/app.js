var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require ("mongoose");
//passport config
const session = require("express-session");
const passport = require("passport");
require("./helpers/passport");


var users = require('./routes/users');
var reviews = require('./routes/reviews')
var servicios = require('./routes/servicios')


var app = express();

var cors = require ("cors")
var corsOptions = {
  origin: true,
  credentials: true
};
app.use(cors(corsOptions));


mongoose.connect("mongodb://localhost/ifix")
.then(console.log(`Connected to DB!!`))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//passport 
app.use(session({
  secret: 'Juan',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', users);
app.use('/service', servicios);
app.use('/review', reviews);
app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
 });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
module.exports = app;
