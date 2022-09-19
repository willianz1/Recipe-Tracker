import React from "react";
import RecipeView from "./RecipeView";
import RecipeCreate from "./RecipeCreate";
import "./RecipeView.css";


function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

const list = recipes.map((recipe, index) => (
  <RecipeView 
  deleteRecipe={() => deleteRecipe(index)} 
  key={index} 
  recipe={recipe} />
))


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preperation</th>
            <th>Actions</th>
          </tr> 
        </thead>
        <tbody>
        {list}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
