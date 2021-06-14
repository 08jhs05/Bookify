var express = require('express');
var router = express.Router();

const { getAllUsers } = require('../db/dbHelpers');
/* GET home page. */
router.get('/', getAllUsers);

module.exports = router;
