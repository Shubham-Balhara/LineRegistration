var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Sequelize = require('sequelize');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lineRouter = require('./routes/line');

var app = express();

sequelize = new Sequelize('kezpfpn:395527be98e9594410d942ee3623c5d874a1a6bfae1dc26828b5ec3ee4a7d93f@ec2-184-72-237-95.compute-1.amazonaws.com:5432/dc3sendh1as666');

  sequelize.authenticate().then(() => {
    console.log("Database connection success......");
  }).catch(err=>{
    console.log("error occured: "+err);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/line', lineRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
