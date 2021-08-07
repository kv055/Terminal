const path = require('path')
let AveragePricePath = path.join(__dirname,'../','/OHLCtoAverageFormater/OHLCtoAverage')
let TestObjectPath = path.join(__dirname,'../','/StrategyTrainer/ObjectFormater')

//Imports
//OHLCtoAverage
const AveragePrice = require(AveragePricePath)
//Get our Strategy
let TestObject = require(TestObjectPath)

//Initialize empty array for later use
let tradingHistory = [];

//Pair ETHUSD
//BaseCollateral example:USD
let BaseCollateral = 130;

let mainframe = async ()=>{

    //Get the Average historical price
    let AveragePriceObject = await AveragePrice.Kraken()

    //Get our Strategy
    let test = await TestObject()

    let volatilityArray = [];
    test.forEach(element => {
         
        //#1 Von jedem element lastprice nehmen und in nen array pushen
        volatilityArray.push(element.lastPrice)
       
        //Specify at which trade you sold or bought
        let deirektion = null;
        if (element.MAonTop === 5) {
            deirektion = 'Long'
            } else {
            deirektion = 'Short'  
        }
       
       //#2 Wenn Array > 2 einträge hat, alte einträge löschen
        if(volatilityArray.length > 2){
            volatilityArray.shift()
        }
        //aus beiden einträgen schwanung berechnen und loggen
        let swing = function(){
            let schwankung = ((volatilityArray[1] / volatilityArray[0]) - 1) * 100;
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
    console.log(await mainframe());
    
}
testr() */   

module.exports = mainframe