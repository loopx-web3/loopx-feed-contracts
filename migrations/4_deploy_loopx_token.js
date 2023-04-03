const NitaToken = artifacts.require("NitaToken");

module.exports = function(deployer, network) {
  if (network != "mainnet") {
    deployer.deploy(
        NitaToken,
    );
  }
};
