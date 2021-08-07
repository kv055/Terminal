//This is a config file which gets loaded into the fetch function
//either just as a link or as a link and request body(if post request)
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
    //Trading Pairs can be added here
    Ethereum: 'XETHZUSD',
    Bitcoin: 'XXBTZUSD'
  },
  //Find a way to put time data in here
  StartDate: new Date('2021-03-01').getTime()/1000
}

//HTTP Header konstruieren
const Options = {
  method: 'POST',
  body: JSON.stringify(
    {
      pair: OHLC.Pair.Bitcoin,
      interval: OHLC.CandleSize.Hour,
      since: OHLC.StartDate
    }
  ),
  headers: {
    'Content-Type': 'application/json'
  }
};

module.exports = {OHLC, Options}