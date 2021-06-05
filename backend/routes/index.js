let userAccount = {
  deposits: {
    day1: 300,
    day3: 100
  },

  withdrawals: {
    day2: 120
  }
}

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(userAccount);
});

module.exports = router;
