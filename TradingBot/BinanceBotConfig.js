const Binance = require('node-binance-api');

const binance = new Binance().options({
  APIKEY: 'gfkT7VFkxn0aZnJUn4DK5WPBaGmR6hv05dTlRVvj6OmWlbfKWVudl1kM1QuCtggP',
  APISECRET: '4pBVUmOik3wEbWj2Ou3J3sYXOyzTb204AF60x7ycWJdIjLrjOsAsQW9JMXiADare',
  useServerTime: true,
  verbose: true
});

module.exports = binance