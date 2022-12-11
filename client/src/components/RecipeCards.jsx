import { ContainerRecipes } from "./styles";
import RecipeCard from "./RecipeCard";
import React from "react";
const RecipeCards = (props) => {
  const { AllRecipes } = props;

  return (
    <>
      <ContainerRecipes>
        {AllRecipes?.map((recipe) => {
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
