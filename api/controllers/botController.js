'use strict';
var ccxt = require('ccxt')

exports.list_all_binance = function (req, res) {
    res.json("Exchanges: " + ccxt.exchanges);

};


