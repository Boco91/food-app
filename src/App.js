import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "97fcfafe";
  const APP_KEY = "5cf11e0c980f7c91703ba10948e218b1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for recipe..."
          value={search}
          onChange={updateSearch}
        />
        <button className="btn-search" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, id) => (
          <Recipe
            key={id}
            title={recipe.recipe.label}
            url={recipe.recipe.url}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
