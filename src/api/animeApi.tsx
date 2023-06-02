export const runtime = "edge";

interface Quote {
  quotePath: string[];
}

export const getQuote = async ({ quotePath }: Quote) => {
  // const response = await fetch(
  //   `https://animechan.vercel.app/api/${
  //     quotePath.length === 0 ? "random" : quotePath
  //   }`
  // );
  const response = await fetch(
    `http://animechan.melosh.space/${
      quotePath.length === 0 ? "random" : quotePath
    }`
  );
  return response;
};
