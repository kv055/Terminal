let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal/'

const path = require('path')
let TradesPath = path.join(__dirname,'../','/StrategyTrainer/StrategyTrainer.js')
const Trades = require(TradesPath)
//import for module Testing
let main = async ()=>{

    let Tester = await Trades()

    RenderArray = {
        value: [],
        time: [],
        metadata: []
    }

    Tester.forEach(element =>{
        RenderArray.value.push(element.tradeClosingPrice)
        RenderArray.time.push(element.time)
        RenderArray.metadata.push(element)
    })

    
    return RenderArray
}

module.exports = main