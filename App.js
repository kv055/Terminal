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


let Test = async()=>{
    let OHLC = await APIanswer()
    let Average = await AveragePrice(OHLC)

    let MAPast5 = await MAPastData(Average, 5)
    let MAPast10 = await MAPastData(Average, 10)

    let CrossingPast = await MACrossingPast(10,20, Average)

    let PriceGraph = OHLC
    let LineGraph = [MAPast5, MAPast10]
    let MarkerGraph = [CrossingPast]

    Server(PriceGraph,LineGraph, MarkerGraph)
    //Für alle Live Funktionen
    // setInterval(async () => {
    //     let MALive = await MALiveData(Average, 50)
    //     let MACrossLive = await MACrossingLive(5,10, Average
    //     console.log(MACrossLive);
    //     }, 5000);
}
Test()

