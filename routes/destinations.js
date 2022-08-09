var express = require('express');
var router = express.Router();
const flightController = require('../controllers/destinations');
/* GET users listing. */


router.post('/flights/:id/destinations', flightController.create);


module.exports = router;
