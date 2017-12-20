// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the coin model
let coin = require('../models/coinInfo');

// GET coins List page
router.get('/', (req, res, next) => {
  // find all coins in the coins collection
  coin.find( (err, coins) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('coinInfo/index', {
        title: 'Coins',
        coins: coins
      });
    }
  });

});


router.get('/add', (req, res, next) => {
res.render('coinInfo/details', {
title: "Add a new coin!",
description: "Add a Description",
coins: ""

});

});

//the C in crud
router.post('/add', (req, res, next) => {

    let newcoin = coin({
      "Title": req.body.title,
      "Description": req.body.description
     
    })

    coin.create(newcoin, (err, coin) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        res.redirect('/coinInfo');
      }
    });
});


//need this to get the details page so we can edit
router.get('/:id', (req, res, next) => {

try {
      // get a reference to the id from the url
      let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

      //find coin by id
      coin.findById(id, (err, coins) => {
        if(err) {
          console.log(err);
          res.end(error);
        } else {
          
          res.render('coinInfo/details', {
              title: 'Coin Details',
              coins: coins,
              
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.redirect('/errors/404');
    }
    
});

router.post('/:id', (req, res, next) => {

   
    let id = req.params.id;

     let updatedCoin = coin({
       "_id": id,
      "Title": req.body.title,
      "Description": req.body.description
    });

    coin.update({_id: id}, updatedCoin, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        //back to the route
        res.redirect('/coinInfo');
      }
    });

});


router.get('/delete/:id', (req, res, next) => {

     // get a reference to the id from the url
    let id = req.params.id;

    coin.remove({_id: id}, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh the list
        res.redirect('/coinInfo');
      }
    });
});


module.exports = router;