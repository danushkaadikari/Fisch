
const HDWalletProvider = require("@truffle/hdwallet-provider");


const mnemonic = 'topic kind infant pyramid verb runway random manage gas slush foam wisdom';
module.exports = {
  contracts_build_directory: './build',

  networks: {
  bsc: {
    provider: () => new HDWalletProvider(
      mnemonic, 
      'https://data-seed-prebsc-1-s1.binance.org:8545'
    ),
    network_id: 97,
    skipDryRun: true
  }
},
     
mocha: {
  // timeout: 100000
},

// Configure your compilers
compilers: {
  solc: {
    version: "0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
    // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
    // settings: {          // See the solidity docs for advice about optimization and evmVersion
    //  optimizer: {
    //    enabled: false,
    //    runs: 200
    //  },
    //  evmVersion: "byzantium"
    // }
  }
}
};