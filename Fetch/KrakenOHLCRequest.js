const OHLC = {
    Url : 'https://api.kraken.com/0/public/OHLC',
    CandleSize : {
        Minute1 : 1,
        Minutes5: 5,
        Minutes15 : 15,
        Minutes30 : 30,
        Hour: 60, 
        Hours4 : 240,
        Day: 1440,
        Week: 10080,
        Month: 21600
    },
    Pair: {
        Ethereum: 'XETHZUSD'
    },
    //Find a way to put time data in here
    StartDate: new Date('2021-01-01').getTime()/1000
}

//HTTP Header konstruieren
const Options = {

    method: 'POST',
    body: JSON.stringify(
      {
        pair: OHLC.Pair.Ethereum,
        interval: OHLC.CandleSize.Day,
        since: OHLC.StartDate
      }
    ),
    headers: {
      'Content-Type': 'application/json'
    },
    
};



module.exports = {OHLC, Options}

