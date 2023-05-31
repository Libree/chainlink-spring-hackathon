import { useEffect, useState } from 'react';
import { TimeFilter } from 'utils/constants';

import { PollTokenOptions, VaultToken } from 'utils/types';
import { useDaoBalances } from './useDaoBalances';
import { usePollTokenPrices } from './usePollTokenPrices';
import { useTokenMetadata } from './useTokenMetadata';

/**
 * Hook encapsulating the logic for fetching the assets from the DAO vault, mapping them
 * to their corresponding USD market values, and calculating their treasury share percentage.
 * @param options.filter TimeFilter for market data
 * @param options.interval Refresh interval in milliseconds
 * @returns A list of transfers and of tokens in the DAO treasury,
 * current USD sum value of all assets, and the price change in USD based on the filter.
 */
export const useStrategyVault = (
  options: PollTokenOptions = { filter: TimeFilter.day, interval: 300000 },
  address: string
) => {
  const { data: balances } = useDaoBalances(address || '');
  const { data: tokensWithMetadata } = useTokenMetadata(balances || []);
  const [tokens, setTokens] = useState<VaultToken[]>([]);

  useEffect(() => {
    if (tokensWithMetadata?.length > 0) {
      setTokens(tokensWithMetadata as VaultToken[]);
      return;
    }

  }, [
    address,
    tokensWithMetadata
  ]);

  // TODO: this is temporary. undo when refactoring hook with react query
  return { tokens }
};
