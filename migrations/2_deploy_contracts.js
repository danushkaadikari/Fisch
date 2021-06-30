const TokenFarm = artifacts.require("TokenFarm");
const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");

module.exports = async function(deployer, network, accounts) {
  // Deploy Mock DAI Token
  await deployer.deploy(DaiToken);
  const daiToken = await DaiToken.deployed();

  // Deploy Dapp Token
  await deployer.deploy(DappToken);
  const dappToken = await DappToken.deployed();

  // Deploy TokenFarm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address);

  // Transfer all Dapp tokens to token farm
  const tokenFarm = await TokenFarm.deployed();
  await dappToken.transfer(tokenFarm.address, "1000000000000000000000000");

  //Transfer 100 Mock DAI tokens to investory
  await daiToken.transfer(accounts[1], "100000000000000000000");
};
