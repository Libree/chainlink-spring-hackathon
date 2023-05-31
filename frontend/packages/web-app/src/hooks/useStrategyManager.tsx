import { useEffect, useState } from 'react';
import { useSigner } from 'context/signer';
import { ethers, Contract } from 'ethers'

import { abi } from 'abis/strategyManagerABI'
import { erc20TokenABI } from 'abis/erc20TokenABI'


export interface IUseStrategyManager {
  strategy: any | null;
  events: any | null;
}


export const useStrategyManager = (): IUseStrategyManager => {
  const pluginAddress = '0x382Fa90FD0d284289757c530220C72f5E144AA60'

  const {
    provider: signerProvider,
  } = useSigner();
  const [strategy, setStrategy] = useState<any | null>(null);
  const [events, setEvents] = useState<any | null>(null);


  const loadData = async (strategyManager: Contract, provider: any) => {

    const strategy = await strategyManager.getStrategy(0)

    const eventFilter = strategyManager.filters.Rebalance()
    const block = await provider.getBlockNumber()

    const events = await strategyManager.queryFilter(
      eventFilter,
      block - 25000,
      block
    );

    setStrategy(strategy)
    setEvents(events)

  }

  useEffect(() => {
    if (signerProvider) {
      try {
        const strategyManager = new ethers.Contract(
          pluginAddress,
          abi,
          signerProvider);


        loadData(strategyManager, signerProvider)

      } catch (error) {
        console.log(error)
      }
    }

  }, [signerProvider]);

  return {
    strategy,
    events
  };
};