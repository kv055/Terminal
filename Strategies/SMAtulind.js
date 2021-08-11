//Import Dependencies
const path = require('path')
const tulind = require('tulind');
//https://github.com/TulipCharts/tulipnode

//Output Object
let Output = {
    time:[],
    indicatorValue:[],
    lastPrice:[]
}

let runtime = async (Range, PriceSource) => {
    //Working with avrage Data
    let ave = []
    PriceSource.forEach(element => {
        //Pushing Data into the ave Array to feed the tulind library 
        ave.push(element[0])
        //Pushing Data into the Output Object
        Output.lastPrice.push(element[0])
        Output.time.push(element[1])
    });
    
    //Do a simple moving average on close prices with period of 3.
    tulind.indicators.sma.indicator([ave], [Range], function(err, results) {
        results[0].forEach(element => {
            Output.indicatorValue.push(element)
        });
    });

    console.log(Output);
  
    return Output
}

runtime()

module.exports = runtime