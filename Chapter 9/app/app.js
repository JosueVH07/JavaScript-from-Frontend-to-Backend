var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var listRouter = require('./routes/list');

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");

var listSchema = mongoose.Schema({
  text: String
});

var List = mongoose.model("elements", listSchema);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/list', listRouter);

// creating a new element in the list
app.post("/list", function (req, res) {
  var text = req.body.text;
  console.log(text);
  List.create({ text: text }).then((doc) => res.json({ id: doc._id })).catch((err) => console.log('err: ', err))
});



// retrieving list of elements
app.get("/list", function (req, res) {
  console.log(res)
  List.find().then((elements) => res.json({ elements: elements })).catch((err) => console.log('err: ', err))
});

// modifying an element in the list
app.put("/list", function(req, res) {
  var id = req.body.id;
  var text = req.body.text;
  List.updateOne({_id:id}, {text:text}).exec();
  res.send();
});

// remove an element from the list
app.delete("/list", function(req, res) {
  var id = req.body.id;
  console.log(req.body.id);
  List.deleteOne({_id:id}).exec();
  res.send();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;