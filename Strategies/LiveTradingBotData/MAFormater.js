let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal'

//BotData
const readDatabase = require(ubuntuPath+'/Strategies/LiveTradingBotData/databaseRead.js')

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

module.exports = mainframe