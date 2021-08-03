// let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal'

//Fetch
const APIanswer = require(ubuntuPath+"/Fetch/ApiAnswer")

//OHLCtoAverage
const AveragePrice = require(ubuntuPath+'/OHLCtoAverageFormater/OHLCtoAverage')
const AveragePriceToRender = require(ubuntuPath+'/Server/AveragePriceToRender')

//Strategies
//BotData
const readDatabase = require(ubuntuPath+'/Strategies/LiveTradingBotData/databaseRead.js')
//Moving Average
const MAPastData = require(ubuntuPath+'/Strategies/MovingAverage/MAPastData')
const MACrossingPast = require(ubuntuPath+'/Strategies/MovingAverage/MACrossingsPast')

//Server
const Server = require('./Server/Server.js')

//StrategyTester
const StrategyVisualizer = require('./StrategyTrainer/TradesVisualizer')


let Test = async()=>{
    //Everything that gets rendered to the Plot has to be loaded in here
    let OHLC = await APIanswer.Kraken()
    let Average = await AveragePrice.Kraken()
    let AverageToRender = await AveragePriceToRender()

    let MAPast5 = await MAPastData(Average, 5)
    let MAPast10 = await MAPastData(Average, 10)

    let CrossingPast = await MACrossingPast(5,10, Average)

    let Tester = await StrategyVisualizer()
    let Datenbank = await readDatabase()
    console.log(Datenbank);

    //These Variables going to the server
    let PriceGraph = OHLC
    let LineGraph = [MAPast5,MAPast10]
    let MarkerGraph = [Tester]

    //console.log(Tester);
    Server(PriceGraph, LineGraph, MarkerGraph)

    // console.log(Tester);
    
    // //Für alle Live Funktionen
    // setInterval(async () => {
    //     let MACrossLive = await MACrossingLive(5,10, Average)
    //     console.log(MACrossLive);
    //     }, 300000);
}
Test()

