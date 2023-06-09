const HDWalletProvider = require("@truffle/hdwallet-provider");
const secretMainnet = require("./secret.mainnet.json");
const secretTestnet = require("./secret.testnet.json");

module.exports = {
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks;
    // see <http://truffleframework.com/docs/advanced/configuration>
    // for more details on how to specify configuration options!
    //
    networks: {
        testnet: {
            provider: () =>
                new HDWalletProvider(
                    secretTestnet.mnemonic,
                    `https://data-seed-prebsc-1-s2.binance.org:8545`
                ),
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 400,
            skipDryRun: true,
        },
        mainnet: {
            provider: () =>
                new HDWalletProvider(
                    secretMainnet.mnemonic,
                    `https://bsc-dataseed1.binance.org`
                ),
            network_id: 56,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
    },
    compilers: {
        solc: {
            version: "0.6.12",
        },
    },
};
