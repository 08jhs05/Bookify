var express = require("express");
var router = express.Router();

const { getExpensesAfterDate } = require("../db/dbHelpers");

router.get("/", getExpensesAfterDate);

router.put("/", function(req, res) {
  console.log(req.body);
})

module.exports = router;