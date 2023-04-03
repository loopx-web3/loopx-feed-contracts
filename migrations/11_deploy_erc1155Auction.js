const ERC1155Auction = artifacts.require("ERC1155Auction");
const NitaERC1155Token = artifacts.require("NitaERC1155Token");
const ServiceFeeProxy = artifacts.require("ServiceFeeProxy");

module.exports = async function (deployer) {

    await deployer.deploy(
        ERC1155Auction,
        NitaERC1155Token.address,
        ServiceFeeProxy.address,
    );

    return;
};
