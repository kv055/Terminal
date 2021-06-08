// let bodyParser = require('body-parser')

const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'gfkT7VFkxn0aZnJUn4DK5WPBaGmR6hv05dTlRVvj6OmWlbfKWVudl1kM1QuCtggP',
  APISECRET: '4pBVUmOik3wEbWj2Ou3J3sYXOyzTb204AF60x7ycWJdIjLrjOsAsQW9JMXiADare',
  useServerTime: true,
  verbose: true
});
let quantity = 1;
//Quantity always refers to the first asset of the Pair aka not the base asset (UNIBNB, quantity 1 will buy/sell one Uni)
binance.marketSell("UNIBNB", quantity ,(error, response) => {
  if ( error ) return console.log(error);
  console.info("Account details response:", response)
})

binance.marketBuy("UNIBNB", quantity ,(error, response) => {
  if ( error ) return console.log(error);
  console.info("Account details response:", response)
})




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