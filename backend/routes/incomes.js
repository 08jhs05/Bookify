var express = require("express");
var router = express.Router();

const { getDepositsAfterDate, submitData, submitNewDeposit } = require("../db/dbHelpers");

router.get("/", getDepositsAfterDate);

router.put("/", submitNewDeposit)

module.exports = router;