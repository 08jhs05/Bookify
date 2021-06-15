var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

const usersRouter = require("./routes/users");
const expensesRouter = require("./routes/expenses");
const incomesRouter = require("./routes/incomes");
const newRouter = require("./routes/new");
const receiptRoute = require("./routes/receipt");
const processDataRoute = require("./routes/processData");

const cors = require("cors");
var app = express();

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use("/api/users", usersRouter);
app.use("/api/expenses", expensesRouter);
app.use("/api/incomes", incomesRouter);
app.use("/api/new", newRouter);
app.use("/api/receipt", receiptRoute);
app.use("/api/processData", processDataRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
  console.log("ERROR MESSAGE", err.message);
  //res.render("error");
});

module.exports = app;
