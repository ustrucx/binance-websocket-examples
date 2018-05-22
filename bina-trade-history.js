const Binance = require('binance-api-node').default
const client = Binance({
  apiKey: 'APIKEY',
  apiSecret: 'APISECRET',
})
async function f0() {
  var x = await client.myTrades({
    symbol: 'VENETH',
  })
  console.log(x)
}
f0()
