import React, { useRef } from "react";
import dai from "../dai.png";

const Main = ({
  stakeTokens,
  unstakeTokens,
  daiTokenBalance,
  dappTokenBalance,
  stakingBalance,
}) => {
  const inputRef = useRef();

  const onStake = () => {
    let amount = inputRef.current.value.toString();
    amount = window.web3.utils.toWei(amount, "Ether");
    stakeTokens(amount);
  };

  const onUnstake = () => {
    unstakeTokens();
  };

  return (
    <div id="content" className="mt-3">
      <table className="table table-borderless text-muted text-center">
        <thead>
          <tr>
            <th scope="col">Staking Balance</th>
            <th scope="col">Reward Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{window.web3.utils.fromWei(stakingBalance, "Ether")} Fisch</td>
            <td>{window.web3.utils.fromWei(dappTokenBalance, "Ether")} DAPP</td>
          </tr>
        </tbody>
      </table>

      <div className="card mb-4">
        <div className="card-body">
          <form className="mb-3">
            <div>
              <label className="float-left">
                <b>Stake Tokens</b>
              </label>
              <span className="float-right text-muted">
                Balance: {window.web3.utils.fromWei(daiTokenBalance, "Ether")}
              </span>
            </div>
            <div className="input-group mb-4">
              <input
                ref={inputRef}
                type="text"
                className="form-control form-control-lg"
                placeholder="0"
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <img src={dai} height="32" alt="" />
                  &nbsp;&nbsp;&nbsp; Fisch
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary btn-block btn-lg"
              onClick={onStake}
            >
              Stake!
            </button>
            <button
              className="btn btn-link btn-block btn-sm"
              onClick={onUnstake}
            >
              UN-STAKE...
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
