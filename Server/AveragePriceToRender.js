const path = require('path')
let AveragePricePath = path.join(__dirname,'../','/OHLCtoAverageFormater/OHLCtoAverage')
const AveragePrice = require(AveragePricePath)

//This file just formats the data so that it can be rendered into a plotly chart

let runtime = async()=>{
    let Average = await AveragePrice.Kraken()
    let globalReturn = {
        time: [],
        value: []
    }
    Average.forEach(element => {
        globalReturn.time.push(element[1]),
        globalReturn.value.push(element[0])
    });
    return globalReturn
}
/*  let test = async () => {
     console.log(await runtime());
}
test() */

module.exports = runtime