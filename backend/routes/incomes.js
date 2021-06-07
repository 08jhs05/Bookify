var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.json(req.body);
});

router.put("/", function(req, res) {
    console.log("Data received from income form! \n", req.body)
})

module.exports = router;