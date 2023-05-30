import { TransferListItem, CardText } from '@aragon/ui-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {Dd, DescriptionListContainer, Dl, Dt} from 'components/descriptionList';


import { trackEvent } from 'services/analytics';
import { abbreviateTokenAmount } from 'utils/tokens';
import { Transfer } from 'utils/types';

type TransferListProps = {
  rebalances: any[];
};

const RebalanceList: React.FC<TransferListProps> = ({
  rebalances
}) => {

  if (rebalances.length === 0)
    return <p data-testid="transferList">{'No rebalances yey'}</p>;

  return (
    <div className="space-y-2" data-testid="transferList">
      {rebalances.map((rebalance, index) => (
        <>
        <DescriptionListContainer
          title={"Rebalance"}
        >
          <Dl>
            <Dt>{"Executed"}</Dt>
            <Dd>{"Yes"}</Dd>
          </Dl>
          <Dl>
            <Dt>{"Allocation"}</Dt>
            <Dd>{"BTC 0,2 LINK 0,2 USDC 0,6"}</Dd>
          </Dl>
          <Dl>
            <Dt>{"Reasoning"}</Dt>
            <Dd>{"Current allocation does not align with risk parity strategy"}</Dd>
          </Dl>
        </DescriptionListContainer>
        </>
      ))}
    </div>
  );
};

export default RebalanceList;
