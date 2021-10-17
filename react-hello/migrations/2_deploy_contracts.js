const RewardPool = artifacts.require("RewardPool");

module.exports = function (deployer) {
  deployer.deploy(RewardPool);
};
