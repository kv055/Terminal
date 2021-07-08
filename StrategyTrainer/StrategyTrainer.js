let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal/'

//OHLCtoAverage
const AveragePrice = require(windowsPath+'/OHLCtoAverageFormater/OHLCtoAverage')
//Get our Strategy
let TestObject = require(windowsPath+'/StrategyTrainer/ObjectFormater')


let tradingHistory = [];

//Pair ETHUSD
//BaseCollateral example:USD
let BaseCollateral = 130;
//ETH



let train = async ()=>{

    //Get the Average historical price
    let AveragePriceObject = await AveragePrice.Kraken()

    //Get our Strategy
    let test = await TestObject()
    // console.log('test',test);

    let schwankungsArray = [];
    test.forEach(element => {
         
        //#1 Von jedem element lastprice nehmen und in nen array pushen
        schwankungsArray.push(element.lastPrice)
       
        //Specify at which trade you sold or bought
        let deirektion = null;
        if (element.MAonTop === 5) {
            deirektion = 'Long'
            } else {
            deirektion = 'Short'  
        }
       
       //#2 Wenn Array > 2 einträge hat, alte einträge löschen
        if(schwankungsArray.length > 2){
            schwankungsArray.shift()
        }
        //aus beiden einträgen schwanung berechnen und loggen
        let swing = function(){
            let schwankung = ((schwankungsArray[1] / schwankungsArray[0]) - 1) * 100;
            if (isNaN(schwankung)) {
                return 0;
            } else {
                return schwankung;  
            }
        } 

        let trades = {
            volatilityBeforeClosing : swing(),
            tradeClosingPrice : element.lastPrice,
            openingDirection : deirektion,
            BaseCollateral: null,
            TradingCollateral : null,
            time: element.Time,
            MA1: element.MA1,
            MA2: element.MA2
        }
        tradingHistory.push(trades)
        // console.log(tradingHistory);
    });
    
    
    let swingAbsolut = function(col){
        
        let profitverlusst = [];
        tradingHistory.forEach(element =>{
            if (element.openingDirection === 'Long'){
                let schwankungAbsolut = (col/100)*(element.volatilityBeforeClosing * (-1));
                col = col + schwankungAbsolut;
                element.BaseCollateral = col
                element.TradingCollateral = col/element.tradeClosingPrice
                // console.log(element);
            }else{
                let schwankungAbsolut = (col/100)*element.volatilityBeforeClosing;
                col = col + schwankungAbsolut;
                element.BaseCollateral = col
                element.TradingCollateral = col/element.tradeClosingPrice
                // console.log(element);
            }
    
        })
        
    }
    swingAbsolut(BaseCollateral);
    //console.log(tradingHistory);
    return tradingHistory
} 

/* let testr = async ()=>{
    console.log(await train());
    
}
testr() */   

module.exports = train
//TODO: 
// #1 Datanbank muss alle einträge Chronologich ordnen
// im idealfall muss das gelogde immer buy sell abwechseln