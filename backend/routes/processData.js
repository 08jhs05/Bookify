const express = require("express");
const router = express.Router();
const {uploadToAPI} = require('../db/dbHelpers');

router.get("/", function (req, res) {
  res.json([]);
});

router.post("/", (req, res) => {
  if (!req.body.url) {
    console.error("No data received!");
  }

  const base64result = req.body.url.split(",")[1];
  return uploadToAPI(res, base64result);
});

module.exports = router;
