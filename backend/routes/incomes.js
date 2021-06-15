const express = require("express");
const router = express.Router();

const { getDepositsAfterDate, deleteDeposit, submitNewDeposit } = require("../db/dbHelpers");

router.get("/", getDepositsAfterDate);

router.put("/", submitNewDeposit);

router.delete("/", deleteDeposit);

module.exports = router;