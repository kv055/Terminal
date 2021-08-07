let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal/'

//Imports
const fetch = require('node-fetch');
const Kraken = require('./KrakenOHLCRequest');
const binanceOHLC = require('./BinanceOHLCRequest')

let KrakenLink = Kraken.OHLC.Url;
let KrakenOptions = Kraken.Options;

let binanceLink = binanceOHLC.Url+binanceOHLC.Pair.Bitcon+binanceOHLC.CandleSize.Day;

//Api-call object
//The methods make a call to the Api
let APIanswer = {

    Kraken : async function(){
        let answer = await fetch(KrakenLink, KrakenOptions)
        .then(res => res.json())
        .catch (error => console.log('Error Report: ',error))
        //Alway select the output data manually
        return answer.result[Kraken.OHLC.Pair.Bitcoin];
    },

    Binance : async function(){
        let answer = await fetch(binanceLink)
        .then(res => res.json())
        .catch (error => console.log('Error Report: ',error))
        return answer;
    }

    //More Datasources can and should be added here
}

//This module can only be executed inside a async function when imported
module.exports = APIanswer;