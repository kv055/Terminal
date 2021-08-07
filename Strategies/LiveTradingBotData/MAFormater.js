//Format the output of the databaseRead Module to be rendered on a ploty graph

//BotData
const path = require('path')
const readDatabasePath = path.join(__dirname,'../','/Strategies/LiveTradingBotData/databaseRead.js')
const readDatabase = require(readDatabasePath)

//Parameter: (Database, Collection, SearchParameters)
let mainframe = async ()=>{
    let MAData = await readDatabase("LiveTesting","LogBook") 
    let globalReturn = {
        time: [],
        value: []
    }
    MAData.forEach(element => {
        if (element.changewatcher[0] !== element.changewatcher[1]) {
            globalReturn.time.push(element.MA1toMA2.Time),
            globalReturn.value.push((element.MA1toMA2.MA1.Value + element.MA1toMA2.MA2.Value)/2)
        }
    });
    return globalReturn
}

//This module can only be executed inside a async function when imported
module.exports = mainframe