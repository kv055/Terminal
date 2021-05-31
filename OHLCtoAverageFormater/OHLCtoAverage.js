let APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")

//funktioniert mit dem Binance Link, aber das Datum wird falsch formatiert
//funktioniert mit Kraken, da kommt dann eine Fehlermeldung, und das mit dem .result.XETZUSD querry string musst du noch lösen

let HistoricalPriceFormater = async function (api_answer){
    let answer = await api_answer;
    let PriceSourceArray = [];
        for (const element of answer) 
                { 
                    let dateobject = new Date(element[0] * 1000 )
                    let preishigh = parseFloat(element[2])
                    let preislow = parseFloat(element[3])
                    PriceSourceArray.push([((preishigh + preislow) / 2), dateobject.toISOString().split("T")[0]])  
                };
    
    return PriceSourceArray;
};


module.exports = HistoricalPriceFormater