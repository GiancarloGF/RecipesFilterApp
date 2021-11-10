
import {selectSearchTerm} from '../searchTerm/searchTermSlice'

// REDUCER
const initialState = [];
export const favoriteRecipesReducer = (
  favoriteRecipes = initialState,
  action
) => {
  switch (action.type) {
    case "favoriteRecipes/addRecipe":
      return [...favoriteRecipes, action.payload];
    case "favoriteRecipes/removeRecipe":
      return favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    default:
      return favoriteRecipes;
  }
};

// FUNCTION CREATORS
export function addRecipe(recipe) {
  return {
    type: "favoriteRecipes/addRecipe",
    payload: recipe
  };
}

export function removeRecipe(recipe) {
  return {
    type: "favoriteRecipes/removeRecipe",
    payload: recipe
  };
}

// SELECTORS
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>{
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
}
