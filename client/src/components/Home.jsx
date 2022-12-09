import {
  BigContainer,
  SearchBar,
  SearchBtn,
  ContainerRecipes,
  SelectFilter,
} from "./styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetRecipes } from "../redux/actions";
import allRecipes from "./RecipeCard";

const Home = () => {
  const recipes = useSelector((state) => state.AllRecipes);
  const dispatch = useDispatch();
  const [mystate, setmyState] = useState(false);
  useEffect(() => {
    dispatch(GetRecipes());
  }, []);
  const clickHandler = () => {
    mystate ? setmyState(false) : setmyState(true);
  };

  return (
    <>
      <BigContainer>
        <SearchBar type="text"></SearchBar>
        <SearchBtn onClick={clickHandler}>Buscar</SearchBtn>
        <SelectFilter>Tipo de dieta</SelectFilter>
        <SelectFilter>Ascendente / Descendente</SelectFilter>
        <ContainerRecipes></ContainerRecipes>
      </BigContainer>
    </>
  );
};

export default Home;
