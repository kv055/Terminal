const binanceOHLC = {
    Url : 'https://www.binance.com/api/v3/klines'
    // '&startTime='+start+'&endTime='+end;
    ,
    CandleSize : {
        Minute1 : '&interval=1m',
        Minutes3 : '&interval=3m',
        Minutes5: '&interval=5m',
        Minutes15 : '&interval=15m',
        Minutes30 : '&interval=30m',
        Hour: '&interval=1h', 
        Hours2: '&interval=2h',
        Hours4 : '&interval=4h',
        Hours6 : '&interval=6h',
        Hours8 : '&interval=8h',
        Hours12 : '&interval=12h',
        Day: '&interval=1d',
        Days3 : '&interval=3d',
        Week: '&interval=1w',
        Month: '&interval=1M'
    },
    Pair: {
        Bitcon: '?symbol=BTCUSDT',
        Ethereum: '?symbol=BTCUSDT'
    },
}





module.exports = binanceOHLC