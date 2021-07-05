let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal/'

let TestObject = require(windowsPath+'/StrategyTrainer/ObjectFormater')

let tradingHistory = []; 
let collateral = 130;
//Get acces to database with a tradehistory
let train = async (CrossingsObject)=>{
    let test = await TestObject(CrossingsObject)
    // console.log('test',test);
    let schwankungsArray = [];
    test.forEach(element => {
         
        //#1 Von jedem element den last price nehmen und in nen array pushen
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
            collateral: null,
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
                element.collateral = col
                // console.log(element);
            }else{
                let schwankungAbsolut = (col/100)*element.volatilityBeforeClosing;
                col = col + schwankungAbsolut;
                element.collateral = col
                // console.log(element);
            }
    
        })
        
    }
    swingAbsolut(collateral);
    // console.log(tradingHistory);
    return tradingHistory
} 
    
module.exports = train
//TODO: 
// #1 Datanbank muss alle einträge Chronologich ordnen
// im idealfall muss das gelogde immer buy sell abwechseln