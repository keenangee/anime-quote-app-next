export const runtime = "edge";

interface Quote {
  quotePath: string[];
}

export const getQuote = async ({ quotePath }: Quote) => {
  const response = await fetch(
    `https://animechan.xyz/api/${quotePath.length === 0 ? "random" : quotePath}`
  );
  return response;
};
