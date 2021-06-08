var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  console.log(req.body);
});

router.put("/", function(req, res) {
  console.log(req.body);
  const tableName = "Expense";
  const {
      depositDate,
      amount,
      notes,
      category
  } = req.body;

  submitData(tableName, depositDate, amount, category, notes);
  
})

module.exports = router;