import { ContainerRecipes } from "./styles";
import RecipeCard from "./RecipeCard";
import React from "react";
const RecipeCards = (props) => {
  const { currentRecipes } = props;

  return (
    <>
      <ContainerRecipes>
        {currentRecipes?.map((recipe) => {
          return (
            <RecipeCard
              id={recipe.id}
              key={recipe.id}
              image={recipe.image}
              name={recipe.name}
              diets={recipe.diets.map((diet) => diet.name).join(",")}
            />
          );
        })}
      </ContainerRecipes>
    </>
  );
};
export default RecipeCards;
