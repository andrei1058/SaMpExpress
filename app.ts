import {NextFunction, Request, Response} from "express";
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var apiRoutes = require('./routes/api');

const cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function(req : Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err: Error, req : Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

app.listen(3080, ()=> {
  console.log("Started");
});

module.exports = app;
