import {
  BigContainer,
  SearchBar,
  SearchBtn,
  ContainerRecipes,
  SelectFilter,
  OptionFilter,
  LabelFilter,
} from "./styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetRecipes } from "../redux/actions";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const recipes = useSelector((state) => state.AllRecipes);
  const dispatch = useDispatch();
  // const [mystate, setmyState] = useState(false);
  useEffect(() => {
    dispatch(GetRecipes());
  }, []);
  // const clickHandler = () => {
  //   mystate ? setmyState(false) : setmyState(true);
  // };
  console.log(recipes);
  return (
    <>
      <BigContainer>
        <SearchBar type="text"></SearchBar>
        <SearchBtn>Buscar</SearchBtn>
        <SelectFilter>
          <OptionFilter>gluten free</OptionFilter>
          <OptionFilter>ketogenic</OptionFilter>
          <OptionFilter>vegetarian</OptionFilter>
          <OptionFilter>lacto ovo vegetarian</OptionFilter>
          <OptionFilter>ovo-vegetarian</OptionFilter>
          <OptionFilter>vegan</OptionFilter>
          <OptionFilter>pescatarian</OptionFilter>
          <OptionFilter>paleolithic</OptionFilter>
          <OptionFilter>primal</OptionFilter>
          <OptionFilter>low fodmap</OptionFilter>
          <OptionFilter>whole 30</OptionFilter>
          <OptionFilter>dairy free</OptionFilter>
        </SelectFilter>
        <SelectFilter>
          <OptionFilter>Ascendente</OptionFilter>
          <OptionFilter>Descendente</OptionFilter>
        </SelectFilter>
        <ContainerRecipes>
          {recipes.map((recipe) => {
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
      </BigContainer>
    </>
  );
};

export default Home;
