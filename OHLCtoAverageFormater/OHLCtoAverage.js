let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal/'

let APIanswer = require(windowsPath+"/Fetch/ApiAnswer")

//funktioniert mit dem Binance Link, aber das Datum wird falsch formatiert
//funktioniert mit Kraken, da kommt dann eine Fehlermeldung, und das mit dem .result.XETZUSD querry string musst du noch lösen

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
                PriceSourceArray.push([((preishigh + preislow) / 2), dateobject.toISOString().split("T")[0]])  
            };
            
        return PriceSourceArray;
    }
}

module.exports = HistoricalPriceFormater