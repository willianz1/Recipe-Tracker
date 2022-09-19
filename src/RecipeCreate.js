import React, { useState } from "react";
import RecipeData from "./RecipeData";


function RecipeCreate( { createRecipe } ) {
const initialForm = {
  name: "",
  cuisine: "",
  photo: "", 
  ingredients: "",
  preparation: "",

}

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const [recipeData, setRecipe] = useState({...initialForm});

  //handle change
  const handleChange = ({target}) => {
    setRecipe({
      ...recipeData, 
      [target.name]: target.value,
    })   
  }

  const handleSubmit = event => {
    event.preventDefault(); 
    createRecipe(recipeData);
    setRecipe({...initialForm});
  }

  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
          <tr>
          <td>
                <input 
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={recipeData.name} 
                placeholder="Name"
                />
          </td>
          <td>
                <input 
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={recipeData.cuisine} 
                placeholder="Cuisine"
                />
          </td>
          <td>
                <input 
                id="photo"
                type="text"
                name="photo"
                onChange={handleChange}
                value={recipeData.photo} 
                placeholder="URL"
                />
          </td>
          <td>
                <textarea 
                id="ingredients"
                type="textarea"
                name="ingredients"
                onChange={handleChange}
                value={recipeData.ingredients} 
                placeholder="Ingredients"
                />
          </td>
          <td>
                <textarea 
                id="preparation"
                type="preperation"
                name="preparation"
                onChange={handleChange}
                value={recipeData.preparation} 
                placeholder="Preperation"
                />
          </td>
            <td>
              <button type="submit" name="create">Create</button>
            </td>
          </tr>

      </table>
    </form>
  );
}

export default RecipeCreate;
