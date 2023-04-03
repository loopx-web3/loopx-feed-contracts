const ServiceFeeProxy = artifacts.require("ServiceFeeProxy");
const ServiceFee = artifacts.require("ServiceFee");
const NitaToken = artifacts.require("NitaToken");

const secretMainnet = require("../secret.mainnet.json");
const secretTestnet = require("../secret.testnet.json");

module.exports = async function (deployer, network) {
    await deployer.deploy(ServiceFeeProxy);

    serviceFeeProxyInstance = await ServiceFeeProxy.deployed();
    ServiceFeeInstance = await ServiceFee.deployed();

    if (network == "mainnet") {
        await ServiceFeeInstance.addProxy(serviceFeeProxyInstance.address, {
            from: secretMainnet.fromAddress,
        });
        await serviceFeeProxyInstance.setServiceFeeContract(
            ServiceFeeInstance.address,
            { from: secretMainnet.fromAddress }
        );
        await serviceFeeProxyInstance.setServiceFeeRecipient(
            secretMainnet.serviceFeeRecipientAddress,
            { from: secretMainnet.fromAddress }
        );
        await ServiceFeeInstance.setNitaTokenContract(
            secretMainnet.nitaTokenAddress,
            { from: secretMainnet.fromAddress }
        );
    } else {
        nitaTokenInstance = await NitaToken.deployed();

        await ServiceFeeInstance.addProxy(serviceFeeProxyInstance.address, {
            from: secretTestnet.fromAddress,
        });
        await serviceFeeProxyInstance.setServiceFeeContract(
            ServiceFeeInstance.address,
            { from: secretTestnet.fromAddress }
        );
        await serviceFeeProxyInstance.setServiceFeeRecipient(
            secretTestnet.serviceFeeRecipientAddress,
            { from: secretTestnet.fromAddress }
        );

        await ServiceFeeInstance.setNitaTokenContract(
            nitaTokenInstance.address,
            { from: secretTestnet.fromAddress }
        );
    }
};
