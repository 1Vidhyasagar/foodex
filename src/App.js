import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/Navbar'
import Home from './components/home/Home'
import RecipeDetails from './components/recipeDetails/RecipeDetails'
import SearchBar from "./components/SearchBar";
import React, { useState } from "react";
import { searchMeals } from "./services/mealService.js";
import SearchResults from "./components/SearchResults";




function App() {
  const [searchResults, setSearchResults] = useState([]);

const handleSearch = async (query) => {
  const results = await searchMeals(query);
  setSearchResults(results);
};

 const handleWatchVideo = (url) => {
   // Open the YouTube video URL in a new tab
   window.open(url, "_blank");
 };

 const handleClear = () => {
   setSearchResults([]); // Clear the searchResults state
 };

  return (
    <div class="App container">
      <NavBar />
      <SearchBar onSearch={handleSearch} onClear={handleClear} />

      <SearchResults results={searchResults} onWatchVideo={handleWatchVideo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
