var express = require("express");
var router = express.Router();

const { getDeposits } = require("../db/dbHelpers");

router.get("/", getDeposits);

router.put("/", function(req, res) {
    console.log("Data received from income form! \n", req.body)
})

module.exports = router;