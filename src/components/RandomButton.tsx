interface SearchSectionProps {
  setQuotePath: (quotePath: string[]) => void;
}

const RandomButton = ({ setQuotePath }: SearchSectionProps) => {
  const handleClick = () => {
    setQuotePath(["random"]);
  };

  return (
    <div>
      <button
        className="bg-button text-white border-[2px] border-white rounded-md cursor-pointer px-6 py-2"
        onClick={handleClick}
      >
        Feeling Lucky?
      </button>
    </div>
  );
};

export default RandomButton;
