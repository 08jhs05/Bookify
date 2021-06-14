var express = require("express");
var router = express.Router();

const {getAllDeposits} = require('../db/dbHelpers');

router.get("/", getAllDeposits);

module.exports = router;