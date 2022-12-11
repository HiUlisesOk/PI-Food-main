import { SearchBar, SearchBtn } from "./styles";
import React, { useEffect, useState } from "react";
import { SearchRecipeByName } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "./RecipeCard";
const SearchBarComponent = () => {
  const searchByName = useSelector((state) => state.searchByName);
  const error = useSelector((state) => state.error);
  //Si hay algun error en la busqueda los mostraremos desde este estado
  const [errorSearch, setErrorSearch] = useState(error);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const clickHandlerByName = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(SearchRecipeByName(search));
  };
  useEffect(() => {
    setErrorSearch(error);
  }, [clickHandlerByName]);

  return (
    <>
      <SearchBar
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      ></SearchBar>
      <SearchBtn onClick={(e) => clickHandlerByName(e)}>Buscar</SearchBtn>
      <br></br> {errorSearch}
      <br></br>
      {searchByName?.map((recipe) => {
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
    </>
  );
};

export default SearchBarComponent;
