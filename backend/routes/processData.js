const express = require("express");
const router = express.Router();
const { uploadToAPI } = require("../db/dbHelpers");

router.get("/", (req, res) => {
  res.json([]);
});

router.post("/", (req, res) => {
  const base64result = req.body.data.split(",")[1];
  return uploadToAPI(res, base64result);
});

module.exports = router;
