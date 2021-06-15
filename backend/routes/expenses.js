const express = require("express");
const router = express.Router();

const { getExpensesAfterDate, submitNewExpense, deleteExpense } = require("../db/dbHelpers");

router.get("/", getExpensesAfterDate);

router.put("/", submitNewExpense);

router.delete("/", deleteExpense);

module.exports = router;