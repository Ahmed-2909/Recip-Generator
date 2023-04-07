// import logo from './logo.svg';
// import React from "react";re
import React, { useState, useEffect } from 'react';
import Recipes from './Recipe';

import './App.css';

function App() {
  // const API_ID = "4755443a";
  // const API_KEY = "37a10193e9fcce57d8621f65e491dff6";
  // const a = "https://api.edamam.com/api/recipes/v2?type=public&app_id=4755443a&app_key=37a10193e9fcce57d8621f65e491dff6";
  const [input, setinput] = useState("chicken");
  const [fullInput, setFullInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();

  }, [input]);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (fullInput.trim().length === 0) {
      // console.log("in the if ")
      return;
    }
    setinput(fullInput);
    console.log(input);
    // setFullInput("")
  }
  const inputHandler = (event) => {
    setFullInput(event.target.value);
    // console.log(fullInput);
  }
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=4755443a&app_key=37a10193e9fcce57d8621f65e491dff6&diet=balanced&health=alcohol-free&calories=700%2B&time=20%2B`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
    console.log(recipes)
  }
  return (
    <div className="App ">
      <form onSubmit={onSubmitHandler}>
        <input type='text' onChange={inputHandler} className='text-3xl rounded-xl my-5 p-1' ></input>
        <button type='submit' className='text-3xl mx-2 bg-orange-600 text-white p-1 rounded-xl text-center hover:bg-red-700 ' >search</button>

      </form>
      {recipes.map((recipe) => (<Recipes
        key={recipe.recipe.calories}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredient={recipe.recipe.ingredientLines} />))}
    </div>
  );
}

export default App;
