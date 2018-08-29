var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var controllerRouter = require('./routes/controllers/controllerConfig');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.engine('html', require('ejs').__express); // 用ejs渲染引擎里的html
// app.set('view engine', 'html');

// var options = {
//     dotfiles: 'ignore',
//     etag: false,  // 是否启用 etag 生成
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false, // 当路径为目录时，重定向至 “/”。
//     setHeaders: function (res, path, stat) { // 设置 HTTP 头以提供文件的函数。
//         res.set('x-timestamp', Date.now());
//     }
// }
//
// app.use(express.static('public', options)); // 内置中间件

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/control', controllerRouter);

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
