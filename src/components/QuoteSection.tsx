import { getQuote } from "@/api/animeApi";
import { useState, useEffect } from "react";

interface QuoteSectionProps {
  quotePath: string[];
}

interface Quote {
  anime: string;
  character: string;
  quote: string;
}

const QuoteSection = ({ quotePath }: QuoteSectionProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [quote, setQuote] = useState<Quote>({
    anime: "",
    character: "",
    quote: "",
  });

  useEffect(() => {
    setLoading(true);
    setError(false);
    (async () => {
      try {
        const response = await getQuote({ quotePath });
        if (!response.ok) {
          setError(true);
        }
        const data = await response.json();
        setQuote(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [quotePath]);

  if (error === true) {
    return (
      <div className=" flex justify-center items-center h-[50vh] bg-light text-center text-[1rem] sm:text-[2.5rem] lg:text-[3rem]">
        <h2>Oh no... we can&apos;t find that one</h2>
        {/* <h2>
          The api is at <span className=" font-mono italic font-bold">0</span>
          <span className="font-mono italic font-bold text-primary text-shadow-small">
            hp
          </span>{" "}
          ... Trying to find senzu beans{" "}
          <div className="flex flex-row items-center justify-center">
            <img
              src="senzu_bean.png"
              alt="senzu bean"
              className=" max-h-[30px] sm:max-h-[50px] md:max-h-none"
            />
            <img
              src="senzu_bean.png"
              alt="senzu bean"
              className=" max-h-[30px] sm:max-h-[50px] md:max-h-none"
            />
            <img
              src="senzu_bean.png"
              alt="senzu bean"
              className=" max-h-[30px] sm:max-h-[50px] md:max-h-none"
            />
          </div>
        </h2> */}
      </div>
    );
  }

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-[50vh] bg-light text-center text-[1rem] sm:text-[2.5rem] lg:text-[3rem]">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className=" bg-light min-h-[46vh] sm:min-h-[56vh]">
      <div className=" flex flex-row justify-around py-[3rem] text-center text-[1rem] sm:text-[2rem] lg:text-[2.5rem]">
        <div>
          <h3 className=" text-shadow-primary">Anime:</h3>
          <p>{quote.anime}</p>
        </div>
        <div>
          <h3 className=" text-shadow-primary">Character:</h3>
          <p>{quote.character}</p>
        </div>
      </div>
      <div className=" text-center px-[5vw] text-[1rem] sm:text-[2.5rem] lg:text-[3rem]">
        <h2>{quote.quote}</h2>
      </div>
    </section>
  );
};

export default QuoteSection;
