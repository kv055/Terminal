const path = require('path')
let AveragePricePath = path.join(__dirname,'../','/OHLCtoAverageFormater/OHLCtoAverage')
let CrossingsPath = path.join(__dirname,'../','/OHLCtoAverageFormater/OHLCtoAverage')
//Need the Average Price for all calculations
//OHLCtoAverage
const AveragePrice = require(AveragePricePath)
//Need a Strategy to create Signals that can be read by the StrategyTrainer module
//Example: create an object when two MA's cross each other

//MACrossingsPast
const Crossings = require(CrossingsPath)

let test = async () => {
    //Get the Average historical price
    let AveragePriceObject = await AveragePrice.Kraken()
    //Get the Historical MA Crossings
    let CrossingsObject = await Crossings(5,10,AveragePriceObject)

    let AveragePriceObject2 = []
    AveragePriceObject.forEach(element => 
        AveragePriceObject2.push(element[0], element[1])
    )

    let lll = []
    for (let index = 0; index < CrossingsObject.time.length; index++) {
        
        let dateForPrice = CrossingsObject.time[index];
        let priceIndex = AveragePriceObject2.indexOf(dateForPrice)
        
        //Creating an Object that can beread by the StrategieTrainer module
        let retöanobj= {
            MAonTop: CrossingsObject.MAonTop[index],
            MA1: {
                Range: CrossingsObject.MAMin.Range,
                value: CrossingsObject.MAMin.value[index]
            },
            MA2: {
                Range: CrossingsObject.MAMax.Range,
                value: CrossingsObject.MAMax.value[index]
            },
            lastPrice:AveragePriceObject2[priceIndex-1],
            Time: CrossingsObject.time[index]
            }
            lll.push(retöanobj);
    }
   return lll
    
}

module.exports = test