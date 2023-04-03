const NitaToken = artifacts.require("NitaERC721Token");
const secretMainnet = require("../secret.mainnet.json");
const secretTestnet = require("../secret.testnet.json");

module.exports = function(deployer, network) {
  if (network == "mainnet") {
    deployer.deploy(
      NitaToken,
      "Nita721",
      "REFI721",
      secretMainnet.fromAddress,
      secretMainnet.signerAddress,
      "https://api.nita.co/contractMetadata/{address}", // contractURI
      "https://ipfs.nita.co" // uri // TODO: IPFS
    );
  } else {
    deployer.deploy(
      NitaToken,
      "Nita721",
      "REFI721",
      secretTestnet.fromAddress,
      secretTestnet.signerAddress,
      "https://api-testnet.nita.co/contractMetadata/{address}", // contractURI
      "https://ipfs.nita.co" // uri // TODO: IPFS
    );
  }
};
