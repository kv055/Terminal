const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')
const APIanswer = require('/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer')
//find URL for the latest price
//Design Average Price so that you can pass just the URL as a parameter or so


//Moving Average indicator
let MALiveData = async function (PriceSource, MovingAverageRange) {
    let MovingAverageResult = null;  
    let Array = await PriceSource
        const preis = []
        for (
            let index = Array.length - 1;
             index > (Array.length -1)- MovingAverageRange;
              index--
            ) {
            preis.push(Array[index][0]);
        }
        let sum = 0;
        
        for (var i = 0; i < preis.length; i++) {
            sum += preis[i]}
        
        MovingAverageResult = Math.trunc(sum / MovingAverageRange);
    
    return MovingAverageResult;
}

module.exports = MALiveData;