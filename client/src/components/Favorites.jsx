import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";
import { BigContainer, ContainerRecipes, Loader, SubTitle } from "./styles";
const Favorites = () => {
  const Favorites = useSelector((state) => state.favorites);

  return (
    <>
      <BigContainer>
        <ContainerRecipes>
          {Favorites.length ? (
            Favorites.map((fav) => {
              return (
                <RecipeCard
                  Favorites={Favorites}
                  id={fav.id}
                  key={fav.id}
                  image={fav.image}
                  name={fav.name}
                  diets={fav.diets?.map((diet) => diet.name).join(",")}
                />
              );
            })
          ) : (
            <SubTitle>
              No hay favoritos agregados aún
              <Loader />
            </SubTitle>
          )}
        </ContainerRecipes>
      </BigContainer>
    </>
  );
};

export default Favorites;
