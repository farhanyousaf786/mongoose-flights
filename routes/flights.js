var express = require('express');
var router = express.Router();
const flightController = require('../controllers/flights');
/* GET users listing. */

router.get('/new', flightController.new);


module.exports = router;
