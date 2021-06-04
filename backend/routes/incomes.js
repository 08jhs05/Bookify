var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("INCOMES PAGE!");
});

module.exports = router;