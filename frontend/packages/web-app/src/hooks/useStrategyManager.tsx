import { useEffect, useState } from 'react';
import { useSigner } from 'context/signer';
import { ethers, Contract } from 'ethers'

import { abi } from 'abis/strategyManagerABI'
import { erc20TokenABI } from 'abis/erc20TokenABI'


export interface IUseStrategyManager {
  strategy: any | null;
}


export const useStrategyManager = (): IUseStrategyManager => {
  const pluginAddress = '0x26866C5Cd897374E31aBbE6f8f63A3eFc814dCCA'
  const tokenAddress = '0xe9DcE89B076BA6107Bb64EF30678efec11939234'

  const WBTC_ADDRESS = "0x97e8dE167322a3bCA28E8A49BC46F6Ce128FEC68"
  const USDC_ADDRESS = "0xe9DcE89B076BA6107Bb64EF30678efec11939234"
  const LINK_ADDRESS = "0x4e2f1E0dC4EAD962d3c3014e582d974b3cedF743"

  const {
    provider: signerProvider,
  } = useSigner();
  const [strategy, setStrategy] = useState<any | null>(null);


  const loadData = async (strategyManager: Contract) => {

    const strategy = await strategyManager.getStrategy(0)

    console.log({ strategy })

    const eventFilter = strategyManager.filters.Rebalance()
    const events = await strategyManager.queryFilter(
      eventFilter,
      36235690 - 25000,
      36235690
    );

    console.log({ events })

  }

  useEffect(() => {
    if (signerProvider) {
      try {
        const strategyManager = new ethers.Contract(
          pluginAddress,
          abi,
          signerProvider);


        loadData(strategyManager)

      } catch (error) {
        console.log(error)
      }
    }

  }, [signerProvider]);

  return {
    strategy
  };
};