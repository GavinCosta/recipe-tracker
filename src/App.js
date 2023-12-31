import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const deleteHandle = (indexToDelete) =>
    setRecipes((currentRecipe) =>
      currentRecipe.filter((_, index) => index !== indexToDelete)
    );
  const createHandle = (newRecipe) =>
    setRecipes((currentRecipe) => [...currentRecipe, newRecipe]);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  //   return (
  //     <div className="App">
  //       <header><h1 style={{fontFamily: 'Playfair Display SC', textAlign: 'center', fontSize: '64px'}}>Delicious Food Recipes</h1></header>
  //       <RecipeList recipes={recipes} deleteHandle={deleteHandle} />
  //       <RecipeCreate createHandle={createHandle} />
  //     </div>
  //   );
  // }
  return (
    <div className="App">
      <header>
        <h1
          style={{
            fontFamily: "Playfair Display SC",
            textAlign: "center",
            fontSize: "64px",
          }}
        >
          Delicious Food Recipes
        </h1>
      </header>
     
        <RecipeList recipes={recipes} deleteHandle={deleteHandle} />
        <RecipeCreate createHandle={createHandle} />
    </div>
  );
}
export default App;
