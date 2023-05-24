import { type } from "os";
import { useState } from "react";

interface SearchSectionProps {
  setQuotePath: (quotePath: string[]) => void;
}

const searchForm = ({ setQuotePath }: SearchSectionProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("character");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuotePath([
      `random/${searchType}?${
        searchType === "character" ? "name" : "title"
      }=${searchTerm}`,
    ]);
  };

  return (
    <div className="mb-[1.3rem]">
      <input
        type="radio"
        id="character"
        name="searchType"
        value="character"
        checked={searchType === "character"}
        onChange={(event) => setSearchType(event.target.value)}
      />
      <label
        id="label-character"
        htmlFor="character"
        className="px-[0.5rem] text-shadow-light"
      >
        Character
      </label>
      <input
        type="radio"
        id="anime"
        name="searchType"
        value="anime"
        checked={searchType === "anime"}
        onChange={(event) => setSearchType(event.target.value)}
      />
      <label
        id="label-anime"
        htmlFor="anime"
        className="px-[0.5rem] text-shadow-light"
      >
        Anime
      </label>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder={`Search by `}
          className="px-2 border-[2px] border-black rounded-md mr-[0.1rem]"
          onChange={(event) => handleChange(event)}
        />
        <button
          type="submit"
          className=" bg-gray-300 px-2 border-[2px] border-black rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default searchForm;
