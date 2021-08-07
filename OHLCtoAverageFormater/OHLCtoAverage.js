let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal/'

//Importing the OHLC Data

const path = require('path')
let ApianswerPath = path.join(__dirname,'../','/Fetch/ApiAnswer')
let APIanswer = require(ApianswerPath)

//Converting the OHLC to the Average Price for each DataSource Separately
//Taking the High and the Low from each Candle, adding and then dividing them by 2
let HistoricalPriceFormater = {

    Binance : async function (){
        let answer = await APIanswer.Binance(),
        PriceSourceArray = [];
            for (const element of answer) { 
                let dateobject = new Date(element[0])
                let preishigh = parseFloat(element[2])
                let preislow = parseFloat(element[3])
                PriceSourceArray.push([((preishigh + preislow) / 2), dateobject.toISOString().split("T")[0]])  
            };
    
        return PriceSourceArray;
    },

    Kraken: async function (){
        let answer = await APIanswer.Kraken(),
        PriceSourceArray = [];
            for (const element of answer) { 
                let dateobject = new Date(element[0]*1000)
                let preishigh = parseFloat(element[2])
                let preislow = parseFloat(element[3])
                PriceSourceArray.push([((preishigh + preislow) / 2), dateobject.toISOString()]) 
            };
            
        return PriceSourceArray;
    }
}
//This module can only be executed inside a async function when imported
module.exports = HistoricalPriceFormater