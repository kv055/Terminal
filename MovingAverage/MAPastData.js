const APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")
const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')

let MACalculator = async (formater, answer, length) => { //function reference
    let pricaArray = await formater(answer()) // function invocation
    let globalReturn = [[],[]]
    pricaArray.forEach(item =>{ 
        let index = pricaArray.indexOf(item)
      
        let TagesDaten = []

        //Add the last X(days, weeks, hours, whatever) datapoints together and 
        //push them into the Array
        for(let i=0; i<length; i++) {
            const dayData = pricaArray[index-i]
            if (typeof dayData !== 'undefined' ) {
                TagesDaten.push(Math.trunc(dayData[0]))  
            }
        }
        let sum = null;

        //Take the Array and calculate an average Value from all elements
        if (TagesDaten.length >= length) {
            for (var i = 0; i < length; i++) { 
                    sum += TagesDaten[i] 
                        
            }
            
            globalReturn[0].push(
                pricaArray[index][1]
            )
            globalReturn[1].push(
                Math.trunc(sum/length)
            )
        }   

    })
    return globalReturn
}

// let tesr = async ()=>{
//     console.log(await MACalculator(AveragePrice,APIanswer,20));
    
// }

module.exports = MACalculator



