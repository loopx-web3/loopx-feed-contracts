const NitaToken = artifacts.require("NitaERC1155Token");
const secretMainnet = require("../secret.mainnet.json");
const secretTestnet = require("../secret.testnet.json");

module.exports = function(deployer, network) {
  if (network == "mainnet") {
    deployer.deploy(
      NitaToken,
      "Nita1155",
      "REFI1155",
      secretMainnet.signerAddress,
      "https://api.nita.co/contractMetadata/{address}", // contractURI
      "REFI_", // tokenURIPrefix
      "https://ipfs.nita.co" // uri // TODO: IPFS
    );
  } else {
    deployer.deploy(
      NitaToken,
      "Nita1155",
      "REFI1155",
      secretTestnet.signerAddress,
      "https://api-testnet.nita.co/contractMetadata/{address}", // contractURI
      "REFI_", // tokenURIPrefix
      "https://ipfs.nita.co" // uri // TODO: IPFS
    );
  }
};
