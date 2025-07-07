import React from "react";
import './App.css';

function App() {
  const APP_ID = "b6292b0e";
  const APP_KEY = "3a94401803966455125c2d01a8868570	";

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="Submit">
          Search
          </button>
      </form>
    </div>
  );
}

export default App;
