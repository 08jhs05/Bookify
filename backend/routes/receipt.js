const express = require("express");
const router = express.Router();

const { submitNewReceipt, getAllReceipts } = require("../db/dbHelpers");

router.get("/", getAllReceipts);
router.post("/", submitNewReceipt);

module.exports = router;