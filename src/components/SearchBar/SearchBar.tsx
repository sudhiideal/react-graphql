type SearchBarProps = {
  displayText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ displayText, onChange }) => {
  return (
    <input
      className="border-2 w-full"
      onChange={onChange}
      placeholder={displayText}
    />
  );
};

export default SearchBar;
