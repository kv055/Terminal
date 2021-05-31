const APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")
const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')

const MAPastData = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/MAPastData')

let changewatcher = [];
let MAtoMAcompare = async function (MARange1, MARange2, PriceSource){
    let globalReturn = {
        time: [],
        value: []
    }

    let MAValue1 = await MAPastData(PriceSource, MARange1) //Put PriceSource at AveragePrice(APIanswer())
    let MAValue2 = await MAPastData(PriceSource, MARange2)

    let comp = MAValue1>MAValue2;
    changewatcher.push(comp)
    // MAValue1.value.forEach(element => {
    //     //compare whicg value from the two arrays (MAValue1 und MAValue2) is bigger
    //     let comp = MAValue1>MAValue2;
    //     changewatcher.push(comp)

        
    // });
    for (let index = 0; index < MAValue1.value.length-1; index++) {
        let comp = MAValue1.value[index]>MAValue2.value[index];
        changewatcher.push(comp)
        if (changewatcher.length > 2) {
            changewatcher.shift(changewatcher.length -1)
    
            if (changewatcher[0] !== changewatcher[1]) {
                // console.log(MAValue1.time[index], MAValue1.value[index], MAValue2.value[index],PriceSource[index] );
                globalReturn.time.push(MAValue1.time[index])
                globalReturn.value.push((MAValue1.value[index]+MAValue2.value[index])/2)
            }
            // else{
            //     MA1toMA2.Crossing = true
            // }   
        }
    }
//    console.log(globalReturn);
   return globalReturn; 
}


module.exports = MAtoMAcompare