module.exports = {
  networks: {
    bscTest: {
      host: "https://data-seed-prebsc-1-s1.binance.org",
      port: 8545,
      network_id: "97" // Match any network id
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
