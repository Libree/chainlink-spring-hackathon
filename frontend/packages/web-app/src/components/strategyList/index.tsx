import React from 'react';
import { CardToken } from '@aragon/ui-components';
import { useTranslation } from 'react-i18next';

import { VaultToken } from 'utils/types';
import { useNetwork } from 'context/network';
import { useParams, useNavigate, generatePath } from 'react-router-dom';
import { Strategy } from 'utils/paths';


type TokenListProps = {
  strategies: any[];
};

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


// TODO: Pass in current locale to usd value
const StrategyList: React.FC<TokenListProps> = ({ strategies }) => {
  const { t } = useTranslation();

  const { network } = useNetwork();
  const { dao } = useParams();
  const navigate = useNavigate();

  if (strategies?.length === 0)
    return <p data-testid="tokenList">{t('allTokens.noTokens')}</p>;

  console.log(strategies)

  return (
    <div className="space-y-1.5" data-testid="tokenList">
        <div onClick={() => navigate(generatePath(Strategy, {network, dao}))}>
        <CardToken
          key={strategies?.name}
          tokenName={strategies?.name}
          tokenSymbol={''}
          tokenImageUrl={''}
          tokenCount={''}
          {
            {
            tokenUSDValue: '',
            treasuryShare: '$10000.00',
          }
          }
        />
        </div>
    </div>
  );
};

export default StrategyList;
