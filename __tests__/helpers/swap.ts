export const getRandomTokenIds = (
  tokenIds: string[],
  idsCount: number
): string[] => tokenIds.sort(() => 0.5 - Math.random()).slice(0, idsCount);
export const splitAmountOnRandomParts = (
  amount: number,
  parts: number
): number[] => {
  const result: number[] = [];
  let sumParts = 0;

  for (let i = 0; i < parts - 1; i++) {
    const pn = Math.ceil(Math.random() * (amount - sumParts));
    result.push(pn);
    sumParts += pn;
  }

  result.push(amount - sumParts);
  return result;
};
