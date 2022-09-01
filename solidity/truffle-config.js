const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const mnemonic = process.env.WALLET_SECRET;
const bscscan_api_key = process.env.BSCSCAN_KEY;

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    bscscan: bscscan_api_key,
  },
  networks: {
    bsctest: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic
          },
          providerOrUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
          numberOfAddresses: 1
        }),
      skipDryRun: true,
      network_id: "97",
    }
  },
  compilers: {
    solc: {
      version: "0.8.1",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
