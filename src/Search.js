import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="flex items-center bg-white bordered rounded-lg w-full h-12 px-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className="w-full h-full focus:outline-none p-3"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onBlur={() => console.log("Search")}
        placeholder="Search...."
      ></input>
    </div>
  );
};

export default Search;
