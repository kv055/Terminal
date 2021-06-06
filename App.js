//Ganzes Directory nachbauen

//Fetch
const APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")

//OHLCtoAverage
const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')

//Strategies
//Moving Average
const MAPastData = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/MAPastData')
const MALiveData = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/MALiveData')
const MACrossingPast = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/MACrossingsPast')
const MACrossingLive = require('/home/hackerboi/Dokumente/Terminal/Strategies/MovingAverage/MACrossingsLive')

//Server
const Server = require('/home/hackerboi/Dokumente/Terminal/Server/Server')

//StrategyTester
const StrategyTester = require('/home/hackerboi/Dokumente/Terminal/StrategyTrainer/StrategyTrainer')


let Test = async()=>{
    let OHLC = await APIanswer.Kraken()
    let Average = await AveragePrice.Kraken(OHLC)
    console.log(Average);

    // let MAPast5 = await MAPastData(Average, 5)
    // let MAPast10 = await MAPastData(Average, 10)

    // let CrossingPast = await MACrossingPast(5,10, Average)
    
    // let Tester = await StrategyTester(CrossingPast)
    // let PriceGraph = OHLC
    // let LineGraph = [MAPast5,MAPast10]
    // let MarkerGraph = [Tester]
    
    // console.log(Tester);
    // Server(PriceGraph,LineGraph, MarkerGraph)

    
    // console.log(Tester);
    
    // //Für alle Live Funktionen
    // setInterval(async () => {
    //     let MACrossLive = await MACrossingLive(5,10, Average)
    //     console.log(MACrossLive);
    //     }, 300000);
}
Test()

