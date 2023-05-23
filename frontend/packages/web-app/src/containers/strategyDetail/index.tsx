import { useApolloClient } from '@apollo/client';
import {
  CardText
} from '@aragon/ui-components';
import React, { useEffect } from 'react';
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


type ConfigureStrategyDetailProps = ActionIndex; //extend if necessary

const ConfigureStrategyDetail: React.FC<ConfigureStrategyDetailProps> = ({
  actionIndex,
}) => {
  const { t } = useTranslation();
  const client = useApolloClient();
  const { network } = useNetwork();
  const { address } = useWallet();
  const { infura: provider } = useProviders();
  const { alert } = useAlertContext();

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
      <CardText type='label' title='Strategy Name' content='Dual momentum'/>
      <CardText type='label' title='Reasoing' content='Reasoing'/>
      <CardText type='label' title='Asset Allocation' content='DAI 20% USDC 20% WETH 20%'/>
      <CardText type='label' title='Rebalance period' content='Monthly'/>
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

/*************************************************
 *               Styled Components               *
 *************************************************/

const FormItem = styled.div.attrs({
  className: 'space-y-1.5',
})``;

const TokenBalance = styled.p.attrs({
  className: 'flex-1 px-1 text-xs text-right text-ui-600',
})``;
