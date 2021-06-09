//Formating all trades so that they can be rendered on a plot
//Fetch
const APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")

//OHLCtoAverage
const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')
const MACrossingPast = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/MACrossingsPast')
const StrategyTester = require('/home/hackerboi/Dokumente/Terminal/StrategyTrainer/StrategyTrainer')

//import for module Testing
let main = async ()=>{
let OHLC = await APIanswer()
let Average = await AveragePrice(OHLC)
let CrossingPast = await MACrossingPast(5,10, Average)
let Tester = await StrategyTester(CrossingPast)

RenderArray = {
    value: [],
    time: []
}
Tester.forEach(element =>{
    console.log(element,element.time,element.tradeClosingPrice);
})
}
main()