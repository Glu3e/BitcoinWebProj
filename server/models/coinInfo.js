let mongoose = require('mongoose');

// create a model class
let bitcoinSchema = mongoose.Schema({
    Title: String,
    Description: String
},
{
  collection: "coins" 
});

module.exports = mongoose.model('coins', bitcoinSchema); 