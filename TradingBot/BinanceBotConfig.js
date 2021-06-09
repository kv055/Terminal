const Binance = require('node-binance-api');

const binance = new Binance().options({
  APIKEY: '',
  APISECRET: '',
  useServerTime: true,
  verbose: true
});

module.exports = binance