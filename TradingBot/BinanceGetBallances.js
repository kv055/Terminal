let ballance = binance.balance((error, balances) => {
    if ( error ) return console.error(error);
    console.info("balances()", balances);
    console.info("ETH balance: ", balances.ETH.available);
});

  module.exports = ballance