import React, { useState } from "react";

function SearchBar({ onSearch, onClear }) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (query.trim() === "") {
      alert("Enter a food name to search");
    } else {
      onSearch(query);
      setShowResults(true);
    }
  };

  const handleClear = () => {
    setQuery("");
    setShowResults(false);
    onClear();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        className="w-25 bg-white mt-2"
        type="text"
        placeholder="Enter a food name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={handleSearch}
        type="button"
        className="btn btn-danger p-1"
        style={{
          backgroundColor: "#ff4500",
          color: "white",
          width: "80px",
          height: "40px",
          marginLeft: "5px",
          marginBottom: "8px",
        }}
      >
        Search
      </button>

      {showResults && (
        <button
          onClick={handleClear}
          type="button"
          className="btn btn-secondary p-1"
          style={{
            width: "80px",
            height: "40px",
            marginLeft: "5px",
            marginBottom: "8px",
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBar;
