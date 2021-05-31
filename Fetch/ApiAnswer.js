const fetch = require('node-fetch');
const Kraken = require('./KrakenOHLCRequest');
const binanceOHLC = require('./BinanceOHLCRequest')


let KrakenLink = Kraken.OHLC.Url;
let KrakenOptions = Kraken.Options;
//Building a queŕry String to select the right properties in the Object(to avoid  this: answer.result.XETHZUSD)
// let KrakenReturn = Kraken.OHLC.Pair;

let binanceLink = binanceOHLC.Url+binanceOHLC.Pair.Bitcon+binanceOHLC.CandleSize.Day;

//Make API-Call
let APIanswer = async function(){
    let answer = await fetch(KrakenLink, KrakenOptions)
    .then(res => res.json())
    .catch (error => console.log('Error Report: ',error))
    // console.log(answer[KrakenReturn]);
    return answer.result.XETHZUSD;
}

module.exports = APIanswer;