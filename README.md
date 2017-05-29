# Kraken API api

[![npm version](https://badge.fury.io/js/nl-kraken.svg)](https://badge.fury.io/js/nl-kraken)

## About

My own API Library for [Kraken](https://kraken.com). Reference library [here](https://www.kraken.com/en-us/help/api)


## Installing

Not available yet.

## Contributing

All contributions are welcome and appreciated. Open Source is a meritocracy who doesn't care who you are.

Issues
Pull Requests
Donations (BTC: [14qd36n1viYAWzajZgaTQq4tPUZcEUtfcz](http://blockr.io/address/info/14qd36n1viYAWzajZgaTQq4tPUZcEUtfcz) / LTC: [LSGfxUoJSC3qYsTC6DwyvKvYfDwTVXrcE2](http://ltc.blockr.io/address/info/LSGfxUoJSC3qYsTC6DwyvKvYfDwTVXrcE2) / [Dollars](https://donate.nolim1t.co))


## Examples

### Get Market Depth / Order Book

Examples, ETHEUR, BTCEUR, ETCEUR

```bash
i.public({endpoint: 'Depth', pair: 'BTCEUR'}, (r) => {console.log(JSON.stringify(r))});
i.public({endpoint: 'Depth', pair: 'ETHEUR'}, (r) => {console.log(JSON.stringify(r))});
i.public({endpoint: 'Depth', pair: 'ETCEUR'}, (r) => {console.log(JSON.stringify(r))});
i.public({endpoint: 'Depth', pair: 'DASHEUR'}, (r) => {console.log(JSON.stringify(r))});
```

### Get Market Depth (BTC/EUR)

```bash
i.public({endpoint: 'AssetPairs', method: "GET"}, (r) => {console.log(JSON.stringify(r))});
```
