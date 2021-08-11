//Import Dependencies
const path = require('path')
const tulind = require('tulind');
//https://github.com/TulipCharts/tulipnode

//Creating Path Variables
const APIanswerPath = path.join(__dirname,'../',"/Fetch/ApiAnswer")
const AveragePricePath = path.join(__dirname,'../','/OHLCtoAverageFormater/OHLCtoAverage')

//Import data
const APIanswer = require(APIanswerPath)
const AveragePrice = require(AveragePricePath)

let runtime = async () => {
    let OHLC = await APIanswer.Kraken()
    let Average = await AveragePrice.Kraken()

    //Working with OHLC Data
    let open  = [];
    let high  = [];
    let low   = [];
    let close = [];
    let volume = [];

    //Working with avrage Data
    let ave = []
    Average.forEach(element => {
        ave.push(element[0])
    });
    console.log(ave);
    
    //Do a simple moving average on close prices with period of 3.
    tulind.indicators.sma.indicator([ave], [10], function(err, results) {
        console.log("Result of sma is:");
        console.log(results);
    });
  
}

runtime()

module.exports = runtime