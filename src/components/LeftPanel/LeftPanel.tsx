import SearchBar from "./../SearchBar/SearchBar";

const LeftPanel: React.FC = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div className="w-1/4 border-2 divide-gray-600 scroll-auto p-5">
      <SearchBar displayText="Search" onChange={handleSearch} />
    </div>
  );
};

export default LeftPanel;
