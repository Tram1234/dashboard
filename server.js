const express = require('express');
const path = require('path');
const config = require('config');
const fs = require('fs');
const mongoose = require('./lib/mongoose');
const React  = require('react');
const ReactDOM = require('react-dom/server')


//routes section
const index = require('./routes/index');
const data = require('./routes/data');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

let middlewares = fs.readdirSync(path.join(__dirname,'middlewares')).sort();

middlewares.forEach((middleware) => {
  if(middleware === '02-bodyParser.js'){
   const parser  = require('./middlewares/' + middleware);
    for(const option in parser){
      app.use(parser[option]);
    }
  } else {
    app.use(require('./middlewares/' + middleware))
  }
});


app.use('/', index);
app.use('/', data);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
