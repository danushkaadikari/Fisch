const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(callback) {
  console.log("Tokens Issued!!!");
  let tokenFarm = await TokenFarm.deployed();
  await tokenFarm.issueTokens();

  callback();
};
