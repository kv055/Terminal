let binance = require('/home/hackerboi/Dokumente/Terminal/TradingBot/BinanceBotConfig')

let balanceSpot = async ()=>{
    
   let bal = await binance.balance((error, balances) => {
        if (error) {
            return console.error(error);
        } else {
            return balances   
        }
    });
    console.log(await bal);
}


balanceSpot()

//   module.exports = global.balance