'use strict';
module.exports = function (app) {
    var bot = require('../controllers/botController');

    //get binance portfolio
    app.route('/getBalance')
        .get(bot.getBalance)

    // binance get ticker prices route
    app.route('/binance')
        .get(bot.getPrices)

};
