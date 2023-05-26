import React from 'react';
import { CardToken } from '@aragon/ui-components';
import { useTranslation } from 'react-i18next';

import { VaultToken } from 'utils/types';

type TokenListProps = {
  strategies: VaultToken[];
};

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// TODO: Pass in current locale to usd value
const StrategyList: React.FC<TokenListProps> = ({ strategies }) => {
  const { t } = useTranslation();

  if (strategies.length === 0)
    return <p data-testid="tokenList">{t('allTokens.noTokens')}</p>;

  return (
    <div className="space-y-1.5" data-testid="tokenList">
      {strategies.map(strategy => (
        <CardToken
          key={strategy.metadata.id}
          tokenName={strategy.metadata.name}
          tokenSymbol={''}
          tokenImageUrl={strategy.metadata.imgUrl || ''}
          tokenCount={''}
          {
            {
            tokenUSDValue: '',
            treasuryShare: '$10000.00',
          }
          }
        />
      ))}
    </div>
  );
};

export default StrategyList;
