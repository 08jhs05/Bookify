var express = require("express");
var router = express.Router();

const { getDepositsAfterDate, submitData } = require("../db/dbHelpers");

router.get("/", getDepositsAfterDate);

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