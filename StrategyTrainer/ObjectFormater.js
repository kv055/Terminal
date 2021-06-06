//Fetch
const APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")

//OHLCtoAverage
const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')

let test = async (CrossingsObject) => {

    // let CrossingsObject = await MACrossingPast(5,10,await AveragePrice(await APIanswer()))
    let AveragePriceObject = await AveragePrice(await APIanswer())
    let AveragePriceObject2 = []
    AveragePriceObject.forEach(element => 
        AveragePriceObject2.push(element[0], element[1])
    )
    // console.log(CrossingsObject);
    let lll = []
    for (let index = 0; index < CrossingsObject.time.length; index++) {
        
        let dateForPrice = CrossingsObject.time[index];
        let priceIndex = AveragePriceObject2.indexOf(dateForPrice)
        // console.log(priceIndex,AveragePriceObject2[priceIndex]);
        
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
//    console.log(lll);
   return lll
    
}


module.exports = test