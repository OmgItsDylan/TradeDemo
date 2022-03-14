const express = require('express')
const app = express()
const ccxt = require('ccxt');

async function getTickers() {
    let binance = new ccxt.binance();
    let tickers = await binance.fetchTickers(["ETH/EUR", "BTC/EUR"]);
    console.log(tickers)

    return tickers
};

app.get("/api", (req, res) => {
    getTickers().then(
        tickers => {
            let data = {
                "btc": [
                    tickers["BTC/EUR"].high,
                    tickers["BTC/EUR"].low,
                    tickers["BTC/EUR"].bid,
                    tickers["BTC/EUR"].ask,
                ],
                "eth": [
                    tickers["ETH/EUR"].high,
                    tickers["ETH/EUR"].low,
                    tickers["ETH/EUR"].bid,
                    tickers["ETH/EUR"].ask,
                ]
            }
            res.json(data)
        }
    )
    //res.json(getTickers())
})

app.listen(5000, () => {console.log("Server started")})