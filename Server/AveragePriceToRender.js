let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal/'

//This file just formats the data from
const AveragePrice = require(windowsPath+'/OHLCtoAverageFormater/OHLCtoAverage')

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