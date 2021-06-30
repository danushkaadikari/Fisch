const { assert } = require("chai");
const _deploy_contracts = require("../migrations/2_deploy_contracts");

const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");
const TokenFarm = artifacts.require("TokenFarm");

require("chai")
  .use(require("chai-as-promised"))
  .should();

function tokens(n) {
  return web3.utils.toWei(n, "ether");
}

contract("TokenFarm", ([owner, investor]) => {
  let daiToken, dappToken, tokenFarm;
  before(async () => {
    // Load contracts
    daiToken = await DaiToken.new();
    dappToken = await DappToken.new();
    tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address);

    // Transfer all Dapp tokens to farm (1 million)
    await dappToken.transfer(tokenFarm.address, tokens("1000000"));
    await daiToken.transfer(investor, tokens("100"), { from: owner });
  });

  describe("Mock Dai deployment", async () => {
    it("has a name", async () => {
      const name = await daiToken.name();
      assert.equal(name, "Mock DAI Token");
    });
  });

  describe("Dapp Token deployment", async () => {
    it("has a name", async () => {
      const name = await dappToken.name();
      assert.equal(name, "DApp Token");
    });
  });

  describe("Token Farm deployment", async () => {
    it("has a name", async () => {
      const name = await tokenFarm.name();
      assert.equal(name, "DApp Token Farm");
    });

    it("contract has dapp tokens", async () => {
      let balance = await dappToken.balanceOf(tokenFarm.address);
      assert.equal(balance.toString(), tokens("1000000"));
    });

    it("investor has dai tokens", async () => {
      let balance = await daiToken.balanceOf(investor);
      assert.equal(balance.toString(), tokens("100"));
    });
  });

  describe("Farming tokens", async () => {
    it("rewards investors for staking mDai tokens", async () => {
      let result;

      // Check investor balance before staking
      result = await daiToken.balanceOf(investor);
      assert.equal(
        result.toString(),
        tokens("100"),
        "investor Mock DAI wallet balance correct before staking"
      );

      // Stake
      await daiToken.approve(tokenFarm.address, tokens("100"), {
        from: investor,
      });
      await tokenFarm.stakeTokens(tokens("100"), { from: investor });

      // Check investor balance after staking
      result = await daiToken.balanceOf(investor);
      assert.equal(
        result.toString(),
        "0",
        "investor balance in dai is correct after staking"
      );

      // Check that smart contract has new balance
      result = await tokenFarm.stakingBalance(investor);
      assert.equal(
        result.toString(),
        tokens("100"),
        "investor balance staked in TokenFarm is correct"
      );

      // Check that smart contract knows the investor IS staking
      result = await tokenFarm.isStaking(investor);
      assert.equal(result, true, "investor is marked isStaking");

      // Check that smart contract knows the investor HAS staked
      result = await tokenFarm.hasStaked(investor);
      assert.equal(result, true, "investor is marked hasStaked");

      await tokenFarm.issueTokens({ from: owner });

      // Check balances after issuance
      result = await dappToken.balanceOf(investor);
      assert.equal(result.toString(), tokens("100"));

      // Ensure only owner can issue tokens
      await tokenFarm.issueTokens({ from: investor }).should.be.rejected;

      await tokenFarm.unstakeTokens({ from: investor });

      result = await tokenFarm.isStaking(investor);
      assert.equal(result, false, "investor is not marked as staking");

      result = await tokenFarm.hasStaked(investor);
      assert.equal(result, true, "investor is marked hasStaked");

      result = await tokenFarm.stakingBalance(investor);
      assert.equal(result.toString(), 0, "investor no longer staked");

      result = await daiToken.balanceOf(investor);
      assert.equal(
        result.toString(),
        tokens("100"),
        "investor dai balance restored"
      );
    });
  });
});
