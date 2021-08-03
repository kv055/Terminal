let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal/'

const Trades = require(ubuntuPath+'/StrategyTrainer/StrategyTrainer.js')
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