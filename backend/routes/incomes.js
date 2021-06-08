var express = require("express");
var router = express.Router();

const { getDeposits, submitData } = require("../db/dbHelpers");

router.get("/", function(req, res) {
    res.json([getDeposits(req, res)]);
    
})

router.put("/", function(req, res) {
    console.log("Data received from income form! \n", req.body)
    const tableName = "Deposit";
    const {
        depositDate,
        amount,
        notes,
        category
    } = req.body;

    submitData(tableName, depositDate, amount, category, notes);
    
})

module.exports = router;