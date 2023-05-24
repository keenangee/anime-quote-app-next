import RandomButton from "./RandomButton";
import SearchForm from "./SearchForm";

interface SearchSectionProps {
  setQuotePath: (quotePath: string[]) => void;
}

const SearchSection = ({ setQuotePath }: SearchSectionProps) => {
  return (
    <section className="text-[1.5rem] flex flex-col sm:flex-row items-center justify-around content-center py-10 gap-6 sm:gap-0 min-h-[35vh] sm:min-h-[25vh]">
      <RandomButton setQuotePath={setQuotePath} />
      <SearchForm setQuotePath={setQuotePath} />
    </section>
  );
};

export default SearchSection;
