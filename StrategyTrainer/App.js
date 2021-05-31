//This is the Pseudo Code
const nedb = require('nedb');

//Datenbank Config 
const database = new nedb('MA_ChangesST.db');
database.loadDatabase();


let tradingHistory = []; 
let collateral = 130;
//Get acces to database with a tradehistory
database.find({}, (err, data) => {
    //example 20 vs 50 ma, sold or bought at MA1overMA2=true/false?
    let schwankungsArray = [];
    data.forEach(element => {
         
        //#1 Von jedem element den last price nehmen und in nen array pushen
        schwankungsArray.push(element.Price)
       
        //Specify at which trade you sold or bought
        let deirektion = null;
        if (element.MA1overMA2 === true) {
            deirektion = 'Long'
            } else {
            deirektion = 'Short'  
        }
        // console.log(deirektion);
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
            tradeClosingPrice : element.Price,
            openingDirection : deirektion
        }
        tradingHistory.push(trades)
    });
    
   console.log(tradingHistory); 
    
    let swingAbsolut = function(col){
        
        let profitverlusst = [];
        tradingHistory.forEach(element =>{
            if (element.openingDirection === 'Long'){
                let schwankungAbsolut = (col/100)*(element.volatilityBeforeClosing * (-1));
                col = col + schwankungAbsolut;
                console.log(col);
            }else{
                let schwankungAbsolut = (collateral/100)*element.volatilityBeforeClosing;
                col = col + schwankungAbsolut;
                console.log(col);
            }
    
        })
        
    }
    swingAbsolut(collateral);



});

    







//TODO: 
// #1 Datanbank muss alle einträge Chronologich ordnen
// im idealfall muss das gelogde immer buy sell abwechseln