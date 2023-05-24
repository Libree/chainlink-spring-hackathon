import { useApolloClient } from '@apollo/client';
import {
  CardText
} from '@aragon/ui-components';
import React, { useEffect, useState } from 'react';
import {
  FormState,
  useFormContext,
  useFormState,
  useWatch,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { useAlertContext } from 'context/alert';
import { useNetwork } from 'context/network';
import { useProviders } from 'context/providers';
import { useDaoDetailsQuery } from 'hooks/useDaoDetails';
import { useWallet } from 'hooks/useWallet';
import { WithdrawAction } from 'pages/newWithdraw';
import { fetchTokenData } from 'services/prices';
import { CHAIN_METADATA } from 'utils/constants';
import { fetchBalance, getTokenInfo, isNativeToken } from 'utils/tokens';
import { ActionIndex } from 'utils/types';
import { Loading } from 'components/temporary';
import { getRecommendation } from 'api';


type ConfigureStrategyDetailProps = ActionIndex & {
  formMethods: any
} //extend if necessary

const ConfigureStrategyDetail: React.FC<ConfigureStrategyDetailProps> = ({
  actionIndex,
  formMethods
}) => {
  const { t } = useTranslation();
  const client = useApolloClient();
  const { network } = useNetwork();
  const { address } = useWallet();
  const { infura: provider } = useProviders();
  const { alert } = useAlertContext();

  const [isLoading, setIsloading] = useState(true)
  const [reasoing, setReasoing] = useState("")
  const [strategy, setStrategy] = useState("")
  const [allocation, setAllocation] = useState("")
  const [rebalancePeriod, setRebalancePeriod] = useState("")


  const { data: daoDetails } = useDaoDetailsQuery();

  const { control, getValues, trigger, resetField, setFocus, setValue } =
    useFormContext();

  const { errors, dirtyFields } = useFormState({ control });
  const [name, from, tokenAddress, isCustomToken, tokenBalance, tokenSymbol] =
    useWatch({
      name: [
        `actions.${actionIndex}.name`,
        `actions.${actionIndex}.from`,
        `actions.${actionIndex}.tokenAddress`,
        `actions.${actionIndex}.isCustomToken`,
        `actions.${actionIndex}.tokenBalance`,
        `actions.${actionIndex}.tokenSymbol`,
      ],
    });
  const nativeCurrency = CHAIN_METADATA[network].nativeCurrency;

  /*************************************************
   *                    Hooks                      *
   *************************************************/
  useEffect(() => {
    if (isCustomToken) setFocus(`actions.${actionIndex}.tokenAddress`);

    if (from === '' && daoDetails?.address) {
      setValue(`actions.${actionIndex}.from`, daoDetails?.address);
    }
  }, [
    address,
    daoDetails?.address,
    from,
    actionIndex,
    isCustomToken,
    setFocus,
    setValue,
    nativeCurrency,
  ]);

  useEffect(() => {
    if (isLoading) {
      const { actions } = getValues()

      getRecommendation(
        actions[0].initialAmount,
        actions[0].riskTolerance,
        actions[0].assets,
        actions[0].investmentGoal,
      ).then((data) => {
        const { allocation, reasoning, rebalancePeriod, strategy } = data
        setAllocation(JSON.stringify(allocation))
        setReasoing(reasoning)
        setStrategy(strategy)
        setRebalancePeriod(rebalancePeriod)
        setIsloading(false)

        formMethods.setValue('actions.0.strategy', strategy);
        formMethods.setValue('actions.0.rebalancePeriod', rebalancePeriod);
        formMethods.setValue('actions.0.assets', allocation);

      })
    }
  }, [isLoading])

  useEffect(() => {
    if (!name) {
      setValue(`actions.${actionIndex}.name`, 'withdraw_assets');
    }
  }, [actionIndex, name, setValue]);

  // Fetch custom token information
  useEffect(() => {
    if (!address || !isCustomToken || !tokenAddress) return;

    const fetchTokenInfo = async () => {
      if (errors.tokenAddress !== undefined) {
        if (dirtyFields.amount)
          trigger([
            `actions.${actionIndex}.amount`,
            `actions.${actionIndex}.tokenSymbol`,
          ]);
        return;
      }

      try {
        // fetch token balance and token metadata
        const allTokenInfoPromise = Promise.all([
          isNativeToken(tokenAddress)
            ? provider.getBalance(daoDetails?.address as string)
            : fetchBalance(
              tokenAddress,
              daoDetails?.address as string,
              provider,
              nativeCurrency
            ),
          fetchTokenData(tokenAddress, client, network, tokenSymbol),
          getTokenInfo(tokenAddress, provider, nativeCurrency),
        ]);

        const [balance, apiData, chainData] = await allTokenInfoPromise;
        if (apiData) {
          setValue(`actions.${actionIndex}.tokenName`, apiData.name);
          setValue(`actions.${actionIndex}.tokenSymbol`, apiData.symbol);
          setValue(`actions.${actionIndex}.tokenImgUrl`, apiData.imgUrl);
          setValue(`actions.${actionIndex}.tokenPrice`, apiData.price);
        }

        if (!apiData && chainData) {
          setValue(`actions.${actionIndex}.tokenName`, chainData.name);
          setValue(`actions.${actionIndex}.tokenSymbol`, chainData.symbol);
        }

        setValue(
          `actions.${actionIndex}.tokenDecimals`,
          Number(chainData.decimals)
        );
        setValue(`actions.${actionIndex}.tokenBalance`, balance);
      } catch (error) {
        /**
         * Error is intentionally swallowed. Passing invalid address will
         * return error, but should not be thrown.
         * Also, double safeguard. Should not actually fall into here since
         * tokenAddress should be valid in the first place for balance to be fetched.
         */
        console.error(error);
      }
      if (dirtyFields.amount)
        trigger([
          `actions.${actionIndex}.amount`,
          `actions.${actionIndex}.tokenSymbol`,
        ]);
    };

    if (daoDetails?.address) {
      fetchTokenInfo();
    }
  }, [
    address,
    dirtyFields.amount,
    errors.tokenAddress,
    actionIndex,
    isCustomToken,
    provider,
    setValue,
    tokenAddress,
    trigger,
    client,
    network,
    daoDetails?.address,
    nativeCurrency,
    tokenSymbol,
  ]);

  return (
    <>
      {isLoading ? <Loading />
        : <>
          <CardText type='label' title='Strategy Name' content={strategy} />
          <CardText type='label' title='Reasoing' content={reasoing} />
          <CardText type='label' title='Asset Allocation' content={allocation} />
          <CardText type='label' title='Rebalance period' content={rebalancePeriod} />
        </>
      }
    </>
  );
};

export default ConfigureStrategyDetail;

/**
 * Check if the screen is valid
 * @param dirtyFields List of fields that have been changed
 * @param errors List of fields that have errors
 * @param tokenAddress Token address
 * @returns Whether the screen is valid
 */
export function isValid(
  dirtyFields?: FormState<WithdrawAction>['dirtyFields'],
  errors?: FormState<WithdrawAction>['errors'],
  tokenAddress?: string
) {
  // check if fields are dirty
  if (!dirtyFields?.to || !dirtyFields?.amount || !tokenAddress) return false;

  // check if fields have errors
  if (errors?.to || errors?.amount || errors?.tokenAddress) return false;

  return true;
}

