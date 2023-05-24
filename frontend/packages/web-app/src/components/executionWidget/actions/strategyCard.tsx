import {CardText} from '@aragon/ui-components';
import {AccordionMethod} from 'components/accordionMethod';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

export const StrategyCard: React.FC<{
  action: any;
}> = ({action}) => {
  const {t} = useTranslation();

  return (
    <AccordionMethod
      type="execution-widget"
      methodName={"New strategy"}
      smartContractName={t('labels.aragonOSx')}
      verified
      methodDescription={'Deploy new Strategy'}
    >
      <Container>
      <CardText title='Strategy' content={`${action.strategy}`} type='label' />
        <CardText title='Asset allocation' content={`${JSON.stringify(action.assets)}`} type='label' />
        <CardText title='Rebalance period' content={`${action.rebalancePeriod}`} type='label' />
      </Container>
    </AccordionMethod>
  );
};

const Container = styled.div.attrs({
  className:
    'bg-ui-50 rounded-b-xl border border-t-0 border-ui-100 space-y-3 p-3',
})``;
