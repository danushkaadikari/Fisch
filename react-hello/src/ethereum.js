import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import RewardPool from "./build/RewardPool.json";

//const provider = await detectEthereumProvider()


const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const simpleStorage = new Contract(
        RewardPool.networks[networkId].address,
        RewardPool.abi,
        signer
      );
      resolve({simpleStorage});
      console.log("bbb"+simpleStorage.networks)
      return;
    }
    reject('Install Metamask');
  });

export default getBlockchain;