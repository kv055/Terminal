const APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")
const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')

const MAPastData = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/MAPastData')

let changewatcher = [];
let MAtoMAcompare = async function (MARange1, MARange2, PriceSource){
    
    //Compare two MA Ranges and filtering the min and max value
    let RangeMin = Math.min(MARange1, MARange2);
    let RangeMax = Math.max(MARange1, MARange2);
    
    let globalReturn = {
        time: [],
        value: [],
        MAMin: {
            Range: RangeMin,
            value: []
        },
        MAMax: {
            Range: RangeMax,
            value: []
        },
        MAonTop: [],

    }
    
    //Get the difference between min and max
    let difference = (Math.max(MARange1, MARange2)-Math.min(MARange1, MARange2))

    //Get historical MA Values
    let MAValueMin = await MAPastData(PriceSource, RangeMin)
    let MAValueMax = await MAPastData(PriceSource, RangeMax)


    for (let index = 0; index < MAValueMax.value.length-1; index++) {
        let comp = MAValueMin.value[index + difference]>MAValueMax.value[index];
        changewatcher.push(comp)
        
        //Make sure Changewatcher only has two entries a time
        if (changewatcher.length == 3) {
            changewatcher.shift(changewatcher.length -1)

            //Listens to wether a MA Crossing occours
            if (changewatcher[0] !== changewatcher[1]) {

                globalReturn.time.push(MAValueMax.time[index])
                globalReturn.value.push((MAValueMin.value[index + difference] + MAValueMax.value[index])/2)
                globalReturn.MAMin.value.push(MAValueMin.value[index + difference])
                globalReturn.MAMax.value.push(MAValueMax.value[index])
                //Log wich MA index is on top of the other
                if (MAValueMin.value[index + difference] > MAValueMax.value[index]) {
                    globalReturn.MAonTop.push(RangeMin)
                }else{
                    globalReturn.MAonTop.push(RangeMax)
                }
                
            }   
        }
    }

   return globalReturn; 
}

// let test = async () => {
    
//     console.log(await MAtoMAcompare(5,10,await AveragePrice(await APIanswer())));
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