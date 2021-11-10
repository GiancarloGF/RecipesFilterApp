import React from "react";
import FavoriteButton from "../../components/FavoriteButton";
import { useSelector, useDispatch } from "react-redux";
// Import removeRecipe from favoriteRecipesSlice.js
import { removeRecipe, selectFilteredFavoriteRecipes } from "./favoriteRecipesSlice.js";
import Recipe from "../../components/Recipe";
const unfavoriteIconUrl =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

export const FavoriteRecipes = () => {
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch= useDispatch();

  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
    dispatch(removeRecipe(recipe));
  };

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    );
  }
};
