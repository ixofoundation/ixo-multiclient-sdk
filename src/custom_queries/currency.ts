import { keplrChainInfos } from "./chain.constants";
import { TokenAsset } from "./chain.types";

export const findTokenFromDenom = (denom: string): TokenAsset | undefined => {
  const denomLowerCased = denom.toLowerCase();
  let token: TokenAsset;
  Object.values(keplrChainInfos).find((c) => {
    const currency = c.currencies.find(
      (cur) => cur.coinMinimalDenom.toLowerCase() === denomLowerCased
    );
    if (!currency) return;
    const isStakeCurrency =
      c.stakeCurrency?.coinMinimalDenom.toLowerCase() === denomLowerCased;
    const isFeeCurrency = !!c.feeCurrencies?.find(
      (cur: TokenAsset) =>
        cur.coinMinimalDenom.toLowerCase() === denomLowerCased
    );
    token = {
      ...currency,
      isStakeCurrency,
      isFeeCurrency,
    } as TokenAsset;
    return currency;
  });
  // @ts-ignore
  return token;
};
