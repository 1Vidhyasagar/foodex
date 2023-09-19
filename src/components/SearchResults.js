// src/components/SearchResults.js
import React from "react";

function SearchResults({ results, onWatchVideo }) {


  const containerStyle = {
    textAlign: "center",
    overflow: "hidden",
    position: "relative",
    transition: "height 0.5s ease", // Add a smooth transition for height changes
  };

  const contentStyle = {
    overflowY: "auto",
    height: "100%", // Ensure the content fills the container
    paddingRight: "17px",
  };

  const itemStyle = {
    width: "100%",
  };

 

  return (
    <div style={containerStyle}>
      
      {results.length === 0 ? (
        <p style={{ display: "none" }}>No food found.</p>
      ) : (
        <div style={contentStyle} className="pt-4 row row-cols-1 row-cols-md-4">
          {results.map((result) => (
            <div key={result.idMeal} className="col mb-4">
              <div className="result-item card" style={itemStyle}>
                <img
                  src={result.strMealThumb}
                  alt={result.strMeal}
                  className="card-img-top px-2 pt-4"
                />
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    {result.strMeal}
                  </h5>
                  <button
                    onClick={() => onWatchVideo(result.strYoutube)}
                    className="btn btn-dark btn-sm"
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
