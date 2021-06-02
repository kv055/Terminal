const APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")
const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')

const MAPastData = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/MAPastData')

const CrossingsPastDummyData = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/CrossingsPastDummyData')


let changewatcher = [];
let MAtoMAcompare = async function (MARange1, MARange2, PriceSource){
    let globalReturn = {
        time: [],
        value: []
    }
    //Compare two MA Ranges and filtering the min and max value
    let RangeMin = Math.min(MARange1, MARange2);
    let RangeMax = Math.max(MARange1, MARange2);

    //Get thedifference between min and max
    let difference = (Math.max(MARange1, MARange2)-Math.min(MARange1, MARange2))

    let MAValueMin = await MAPastData(PriceSource, RangeMin) //Put PriceSource at AveragePrice(APIanswer())
    let MAValueMax = await MAPastData(PriceSource, RangeMax)

    // //Dummy Data Simulation only
    // let MAValueMin = CrossingsPastDummyData.MAPast2
    // let MAValueMax = CrossingsPastDummyData.MAPast1

    for (let index = 0; index < MAValueMax.value.length-1; index++) {
        let comp = MAValueMin.value[index + difference]>MAValueMax.value[index];
        changewatcher.push(comp)
        
        if (changewatcher.length == 3) {
            changewatcher.shift(changewatcher.length -1)

            if (changewatcher[0] !== changewatcher[1]) {

                globalReturn.time.push(MAValueMax.time[index])
                globalReturn.value.push((MAValueMin.value[index + difference] + MAValueMax.value[index])/2)
            }   
        }
    }

   return globalReturn; 
}

// let test = async () => {
//     MAtoMAcompare(5,10,await AveragePrice(await APIanswer()))

// }
// test()
module.exports = MAtoMAcompare


            // //For debugging only ---------------------------------------
            // console.log(
            //     'changewatcher ',changewatcher,
            //     'MA5',MAValueMin.value[index + difference],
            //     'MA10',MAValueMax.value[index],
            //     'Time',MAValueMin.time[index + difference],
            //     'Time',MAValueMax.time[index]
            // );