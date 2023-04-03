const ERC721Auction = artifacts.require("ERC721Auction");
const NitaERC721Token = artifacts.require("NitaERC721Token");
const ServiceFeeProxy = artifacts.require("ServiceFeeProxy");

module.exports = async function (deployer) {

    await deployer.deploy(
        ERC721Auction,
        NitaERC721Token.address,
        ServiceFeeProxy.address,
    );

    return;
};
