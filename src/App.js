import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

function App() {
  const APP_ID = "b6292b0e";
  const APP_KEY = "3a94401803966455125c2d01a8868570";

  const [recipes, setRecipes] =useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [search]);

    const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}type=user&q=chicken&field=uri&field=label`
    );
    const data = await response.json()
    setRecipes(data.hits);
  };

  const upDateSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} />
        <button className="search-button" type="Submit">
          Search
          </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
