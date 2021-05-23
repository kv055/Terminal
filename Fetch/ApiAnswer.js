const fetch = require('node-fetch');
const Kraken = require('./KrakenOHLCRequest');
const binanceOHLC = require('./BinanceOHLCRequest')


let KrakenLink = Kraken.OHLC.Url;
let KrakenOptions = Kraken.Options

let binanceLink = binanceOHLC.Url+binanceOHLC.Pair.Bitcon+binanceOHLC.CandleSize.Day;

//Make API-Call
let APIanswer = async function(){
    let answer = await fetch(KrakenLink, KrakenOptions)
    .then(res => res.json())
    .catch (error => console.log('Error Report: ',error))
    // console.log(answer);
    return answer.result.XETHZUSD;
}

// APIanswer()

module.exports = APIanswer;