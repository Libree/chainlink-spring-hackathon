import React from 'react';
import { Dd, DescriptionListContainer, Dl, Dt } from 'components/descriptionList';

type TransferListProps = {
  rebalances: any[];
};

const RebalanceList: React.FC<TransferListProps> = ({
  rebalances
}) => {

  if (rebalances?.length === 0 || !rebalances)
    return <p data-testid="transferList">{'No rebalances yet'}</p>;

  return (
    <div className="space-y-2" data-testid="transferList">
      {rebalances.map((rebalance, index) => (
        <>
          <DescriptionListContainer
            title={"Rebalance"}
          >
            <Dl>
              <Dt>{"Executed"}</Dt>
              <Dd>{rebalance.args.rebalanceRequired}</Dd>
            </Dl>
            <Dl>
              <Dt>{"Allocation"}</Dt>
              <Dd>{"BTC 0,2 LINK 0,2 USDC 0,6"}</Dd>
            </Dl>
            <Dl>
              <Dt>{"Reasoning"}</Dt>
              <Dd>{rebalance.args.reason}</Dd>
            </Dl>
          </DescriptionListContainer>
        </>
      ))}
    </div>
  );
};

export default RebalanceList;
