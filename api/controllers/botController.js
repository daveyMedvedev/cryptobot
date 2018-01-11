'use strict';
var ccxt = require('ccxt')

//get all binance markets
exports.getPrices = function (req, res) {
    ; (async () => {

        const exchanges = [
            'binance',
            'poloniex',
        ]

        const symbol = 'XRP/BTC'
        const tickers = {}

        await Promise.all(exchanges.map(exchangeId =>

            new Promise(async (resolve, reject) => {

                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })

                while (true) {

                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker

                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId]
                        console.log(ticker['datetime'], exchangeId, "BID PRICE : " + ticker['bid'], "ASK PRICE :" + ticker['ask'])
                    })
                }

            })

        ))

    })()
};





