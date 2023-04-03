const ERC721Airdrop = artifacts.require("ERC721Airdrop");
const NitaERC721Token = artifacts.require("NitaERC721Token");

module.exports = async function (deployer, network) {
  await deployer.deploy(ERC721Airdrop, NitaERC721Token.address);

  return;
};
