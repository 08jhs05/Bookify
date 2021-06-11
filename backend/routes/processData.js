const express = require("express");
const router = express.Router();
const https = require("https");

const { submitNewReceipt, getAllReceipts } = require("../db/dbHelpers");

router.get("/", getAllReceipts);

// router.post("/", (req, res) => {
//   const base64result = req.body.url.split(",")[1];
//   return uploadToAPI(res, base64result);
// });

router.post("/", submitNewReceipt);

const uploadToAPI = (res, filePath) => {
  const postBody = {
    image: filePath,
    filename: "example.jpeg",
    contentType: "image/jpeg",
    refresh: false,
    incognito: false,
    ipaddress: "32.4.2.223",
    ignoreMerchantName: "string",
    language: "en",
    extractTime: false,
    subAccountId: "string",
    referenceId: "string",
  };
  const internals = {
    hostname: "api.taggun.io",
    path: "/api/receipt/v1/simple/encoded",
    method: "POST",
    agent: https.Agent({ keepAlive: true }),
    port: 443,
    body: JSON.stringify(postBody),
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.TaggunAPIKey,
    },
  };
  const req = https.request(internals, (result) => {
    result.on("data", (d) => {
      process.stdout.write(d);
      res.json(d.toString());
    });
  });

  req.on("error", (error) => {
    console.log(error);
  });
  req.write(JSON.stringify(postBody));
  req.end();
};

module.exports = router;
