import allRecipesData from "../../data.js";
import {selectSearchTerm }from "../searchTerm/searchTermSlice"
// FUNCTION CREATORS
export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData
  };
};

// REDUCER
const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case "allRecipes/loadData":
      return action.payload;
    case "favoriteRecipes/addRecipe":
      return allRecipes.filter((recipe) => recipe.id !== action.payload.id);
    case "favoriteRecipes/removeRecipe":
      return [...allRecipes, action.payload];
    default:
      return allRecipes;
  }
};

// SELECTORS
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);

  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  })
}