const ADDRESSES = require('../helper/coreAssets.json')
const { sumTokensExport } = require('../helper/unwrapLPs')

const BUSD_TOKEN_CONTRACT = ADDRESSES.bsc.BUSD;
const USDT_TOKEN_CONTRACT = ADDRESSES.bsc.USDT;
const USDC_TOKEN_CONTRACT = ADDRESSES.bsc.USDC;
const WBNB_TOKEN_CONTRACT = ADDRESSES.bsc.WBNB;
const BTCB_TOKEN_CONTRACT = ADDRESSES.bsc.BTCB;
const USTC_TOKEN_CONTRACT = '0x23396cF899Ca06c4472205fC903bDB4de249D6fC';

const TREASURY_ADDRESS = '0x263e0910C8c1B77B80CB9947B0FAC3735a6FEf4C';
const tokens =  [
  BUSD_TOKEN_CONTRACT, USDC_TOKEN_CONTRACT, USDT_TOKEN_CONTRACT, WBNB_TOKEN_CONTRACT, USTC_TOKEN_CONTRACT, BTCB_TOKEN_CONTRACT,
]

module.exports = {
  bsc: {
    tvl: sumTokensExport({ tokens, owner: TREASURY_ADDRESS, }),
  }
};