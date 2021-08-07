const path = require('path')
let module = path.resolve('')
const MALiveData = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/MALiveData')

//Compare two MA's to each other, and determine which one is bigger
let changewatcher = [];
let MAtoMAcompare = async function (MARange1, MARange2, PriceSource){
   
    let MAValue1 = await MALiveData(PriceSource, MARange1) //Put PriceSource at AveragePrice(APIanswer())
    let MAValue2 = await MALiveData(PriceSource, MARange2)
    
    let comp = MAValue1>MAValue2;
    changewatcher.push(comp)

    let MA1toMA2 = {
        MA1: {
            Range: MARange1,
            Value: MAValue1
        },
        MA2: {
            Range: MARange2,
            Value: MAValue2
        },
        Crossing : null,
        Time : new Date().toISOString()
    };

    if (changewatcher.length > 2) {
        changewatcher.shift(changewatcher.length -1)

        if (changewatcher[0] === changewatcher[1]) {
            MA1toMA2.Crossing = false
        }
        else{
            MA1toMA2.Crossing = true
        }   
    }
    
    

    return {MA1toMA2, changewatcher};
}

 module.exports = MAtoMAcompare;