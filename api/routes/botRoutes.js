'use strict';
module.exports = function (app) {
    var bot = require('../controllers/botController');

    // todoList Routes
    app.route('/binance')
        .get(bot.list_all_binance)



};
