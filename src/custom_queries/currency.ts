// import axios from "axios";

import { keplrCurrencies } from "./currency.constants";
// import { keplrChainNames } from "./chain.constants";
import { KeplrChainInfo } from "./chain.types";
import { TokenAsset } from "./currency.types";

const convertCurrencyToTokenAsset = (
  currency: TokenAsset,
  stakeCurrency: TokenAsset,
  feeCurrencies: TokenAsset[] = [],
  coinImageUrl?: string
): TokenAsset => {
  const denomLowerCased = currency.coinMinimalDenom.toLowerCase() ?? "";
  const isStakeCurrency =
    stakeCurrency.coinMinimalDenom.toLowerCase() === denomLowerCased;
  const isFeeCurrency = !!feeCurrencies?.find(
    (feeCur: TokenAsset) =>
      feeCur.coinMinimalDenom.toLowerCase() === denomLowerCased
  );
  const result = { ...currency, isStakeCurrency, isFeeCurrency };
  if (isStakeCurrency && isFeeCurrency && coinImageUrl?.length)
    result.coinImageUrl = coinImageUrl;
  return result;
};

export const prepareKeplrChainInfoTokenAssets = (
  chainInfo: KeplrChainInfo
): KeplrChainInfo => ({
  ...chainInfo,
  currencies:
    chainInfo.currencies?.map((cur) =>
      convertCurrencyToTokenAsset(
        cur,
        chainInfo.stakeCurrency,
        chainInfo.feeCurrencies,
        chainInfo.chainSymbolImageUrl
      )
    ) ?? [],
  stakeCurrency: convertCurrencyToTokenAsset(
    chainInfo.stakeCurrency,
    chainInfo.stakeCurrency,
    chainInfo.feeCurrencies,
    chainInfo.chainSymbolImageUrl
  ),
  feeCurrencies:
    chainInfo.feeCurrencies?.map((cur) =>
      convertCurrencyToTokenAsset(
        cur,
        chainInfo.stakeCurrency,
        chainInfo.feeCurrencies,
        chainInfo.chainSymbolImageUrl
      )
    ) ?? [],
});

export const findTokenFromDenom = (denom: string): TokenAsset | undefined => {
  const denomLowerCased = denom.toLowerCase();
  const token = keplrCurrencies[denomLowerCased];
  return token;
};

/**
 * LOCAL USE ONLY
 * Fetch a list of currencies as defined in keplr chain registry:
 * https://github.com/chainapsis/keplr-chain-registry/tree/main/cosmos
 */
// export const fetchAllCurrenciesInKeplrChainRegistry = async () => {
//   const fetchKeplrChainInfo = async (chainName: string) => {
//     try {
//       const url = `https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/cosmos/${chainName}.json`;
//       const response = await axios.get(url);
//       return response.data as KeplrChainInfo;
//     } catch (error) {
//       return {} as KeplrChainInfo;
//     }
//   };

//   const responses = await Promise.allSettled(
//     keplrChainNames.map((chainName) => fetchKeplrChainInfo(chainName))
//   );
//   let chainInfos = responses
//     .filter((x) => x.status === "fulfilled")
//     // @ts-ignore
//     .map((x) => x.value);
//   chainInfos = chainInfos.map(prepareKeplrChainInfoTokenAssets);
//   let currencies = chainInfos
//     .map((chainInfo: KeplrChainInfo): TokenAsset[] => chainInfo.currencies)
//     .flat();
//   return currencies.reduce((result, value) => {
//     if (!result[value.coinMinimalDenom])
//       return { ...result, [value.coinMinimalDenom]: value };
//     return {
//       ...result,
//       [value.coinMinimalDenom]: { ...result[value.coinMinimalDenom], ...value },
//     };
//   }, {});
// };
