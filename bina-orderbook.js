const Binance = require('binance-api-node').default
const client = Binance()
var mdata = [{ symbol: 'ETHBTC', level: 5 }, { symbol: 'LTCBTC', level: 5 }, { symbol: 'XMRBTC', level: 5 }]
client.ws.trades(mdata, trade => {
	console.log(trade)
})
