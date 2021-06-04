var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("NEW DATa PAGE!");
});

module.exports = router;