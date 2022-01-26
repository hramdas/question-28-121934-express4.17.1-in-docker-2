var express = require('express');
var router = express.Router();
const {getSum} = require('../controllers/sum')
/* GET users listing. */
router.post('/add', getSum);

module.exports = router;