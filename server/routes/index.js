let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var statistics = require('blockchain.info/statistics');

// define the db model
let cInfo = require('../models/coinInfo');

var stats = statistics.get("market_price_usd"); 

router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Bitcoin Info Centre',
    books: '',
    stats:  JSON.stringify(stats)//*note to self change this 
   });
});




module.exports = router;
