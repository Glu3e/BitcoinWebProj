let express = require('express');
let router = express.Router();
let blockexplorer = require('blockchain.info/blockexplorer')
const WebSocket = require('ws')
const $ = require('cheerio')


router.get('/', (req, res, next) => {

    res.render('coinview/index', {
        title: ' Market View: Live Transactions',
        });

  });
//connect to the websocket API 
/*const ws = new WebSocket('wss://ws.blockchain.info/inv');
//
  ws.onopen = function() {
      ws.send(JSON.stringify({"op":"unconfirmed_sub"}));
  }
ws.onmessage = function (msg) {
    var res = JSON.parse(msg.data);
    var amount = res.x.out[0].value;
    var convertAmount = amount / 100000000;
    //const $ = cheerio.load('<div id= "coinTransactions">, <p>+ convertAmount +</p>, </div>');
    $('#coinTransactions').prepend("<p>"+ convertAmount +"</p>");
    //$('div','<div id="coinTransactions">...</div>').prepend("<p>"+ convertAmount +"</p>")
    //console.log(res);
}*/

module.exports = router;