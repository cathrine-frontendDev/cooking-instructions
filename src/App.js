import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

function App() {
  const APP_ID = "b6292b0e";
  const APP_KEY = "3a94401803966455125c2d01a8868570";

  const [recipes, setRecipes] =useState([]);


  useEffect(() => {
    getRecipes ();
  }, []);

    const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json()
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="Submit">
          Search
          </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
