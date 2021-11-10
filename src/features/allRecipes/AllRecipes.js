import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice.js";
import { loadData } from "./allRecipesSlice";

import React, { useEffect } from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { useDispatch, useSelector } from "react-redux";
import {selectFilteredAllRecipes} from './allRecipesSlice'
const favoriteIconURL =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg";

export const AllRecipes = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes);
  console.log("allRecipes filtered", allRecipes)
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  };
  useEffect(onFirstRender, []);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
