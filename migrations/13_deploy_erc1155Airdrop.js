const ERC1155Airdrop = artifacts.require("ERC1155Airdrop");
const NitaERC1155Token = artifacts.require("NitaERC1155Token");

module.exports = async function (deployer) {
  await deployer.deploy(ERC1155Airdrop, NitaERC1155Token.address);

  return;
};
