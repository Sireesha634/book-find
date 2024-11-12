import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [searchType, setSearchType] = useState("title"); // Default to title search

  const handleSearch = () => {
    if (input) {
      onSearch(input, searchType);
      
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <select onChange={(e) => setSearchType(e.target.value)} value={searchType}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      
      <input
        type="text"
        placeholder={`Search by ${searchType}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} // Trigger search on Enter key press
      />
      
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
