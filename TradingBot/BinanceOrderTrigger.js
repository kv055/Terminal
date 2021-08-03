let binance = require('/home/hackerboi/Dokumente/Terminal/TradingBot/BinanceBotConfig')
let balance = require('/home/hackerboi/Dokumente/Terminal/TradingBot/BinanceGetBallances')


// let quantity = 1;
//Quantity always refers to the first asset of the Pair aka not the base asset (UNIBNB, quantity 1 will buy/sell one Uni)
// binance.marketSell("UNIBNB", quantity ,(error, response) => {
//   if ( error ) return console.log(error);
//   console.info("Account details response:", response)
// })

// binance.marketBuy("UNIBNB", quantity ,(error, response) => {
//   if ( error ) return console.log(error);
//   console.info("Account details response:", response)
// })




// // async function OrderTrigger(){
    
// // database.find({}, (err, data) => {
// //     let length = data.length;
// //     console.log(length);
// //     let newest = data[length-1];
// //     let secondnewest = data[length-2]
// //     console.log('find newest: ',newest);
// //     console.log('find second newest: ', secondnewest);

// //     if (newest.MA1overMA2 === secondnewest.MA1overMA2) {
// //         console.log('nix');
// //     }
// //     else if (newest.MA1overMA2 !== secondnewest.MA1overMA2) {
// //         console.log('change');
// //     }
// //   });
// // }
// // OrderTrigger();