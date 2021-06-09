var express = require("express");
var router = express.Router();

const { getExpensesAfterDate, submitNewExpense } = require("../db/dbHelpers");

router.get("/", getExpensesAfterDate);

router.put("/", submitNewExpense);

module.exports = router;