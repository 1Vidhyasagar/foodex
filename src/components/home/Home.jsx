import React from "react";
import "./home.module.css";
import Categories from "../categories/Categories";
import FavouriteFoods from "../favoriteFoods/FavoriteFood";
import Hero from "../hero/Hero";

const Home = () => {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="favoriteFoods">
        <FavouriteFoods />
      </div>
      <div id="categories">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
