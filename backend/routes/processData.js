const express = require("express");
const router = express.Router();
const {uploadToAPI} = require('../db/dbHelpers');

const { submitNewReceipt, getAllReceipts } = require("../db/dbHelpers");

router.get("/", getAllReceipts);

// router.post("/", (req, res) => {
//   const base64result = req.body.url.split(",")[1];
//   return uploadToAPI(res, base64result);
// });

router.post("/", submitNewReceipt);
// router.post("/", (req, res) => {
//   if (!req.body.url) {
//     console.error("No data received!");
//   }

//   const base64result = req.body.url.split(",")[1];
//   return uploadToAPI(res, base64result);
// });

module.exports = router;
