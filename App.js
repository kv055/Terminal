let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal'

//Creating Path Variables for importing Modules
const path = require('path')
let APIanswerPath = path.join(__dirname,'/Fetch/ApiAnswer')
let AveragePricePath = path.join(__dirname,'/OHLCtoAverageFormater/OHLCtoAverage')
let AveragePriceToRenderPath = path.join(__dirname,'/Server/AveragePriceToRender')
let readDatabasePath = path.join(__dirname,'/Strategies/LiveTradingBotData/MAFormater')
let MAPastDataPath = path.join(__dirname,'/Strategies/MovingAverage/MAPastData')
let MACrossingPastPath = path.join(__dirname,'/Strategies/MovingAverage/MACrossingsPast')
//Importing Modules
//Fetch
const APIanswer = require(APIanswerPath)

//OHLCtoAverage
const AveragePrice = require(AveragePricePath)
const AveragePriceToRender = require(AveragePriceToRenderPath)

//Strategies
//BotData
const readDatabase = require(readDatabasePath)
//Moving Average
const MAPastData = require(MAPastDataPath)
const MACrossingPast = require(MACrossingPastPath)

//Server
const Server = require('./Server/Server.js')

//StrategyTester
const StrategyVisualizer = require('./StrategyTrainer/TradesVisualizer')


let runtime = async()=>{
    //Everything that gets rendered to the Plot has to be loaded in here
    let OHLC = await APIanswer.Kraken()
    let Average = await AveragePrice.Kraken()
    let AverageToRender = await AveragePriceToRender()
    // console.log('Average: ',Average);

    let MAPast5 = await MAPastData(Average, 5)
    let MAPast10 = await MAPastData(Average, 10)

    let CrossingPast = await MACrossingPast(5,10, Average)

    let Tester = await StrategyVisualizer()
    let Datenbank = await readDatabase()

    //These Variables going to the server
    let PriceGraph = OHLC
    let LineGraph = [MAPast5,MAPast10]
    let MarkerGraph = [Datenbank]
    // console.log('MAPast5: ',MAPast5);

    Server(PriceGraph, LineGraph, MarkerGraph)
}
runtime()

