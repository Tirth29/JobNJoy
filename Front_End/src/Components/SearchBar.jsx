const SearchBar = () => {
  return (
    <div className="flex items-center m-3 z-20">
      <div className="flex border  border-purple-200 rounded">
        <input
          type="text"
          className="block px-4 py-2 w-64 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
        <button className="px-4 ml-1 text-white bg-purple-600 border-l rounded ">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
