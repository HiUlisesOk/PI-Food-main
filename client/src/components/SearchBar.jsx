import { SearchBar, SearchBtn } from "./styles";
import React, { useState } from "react";
import { SearchRecipeByName } from "../redux/actions";
import { useDispatch } from "react-redux";
const SearchBarComponent = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const clickHandlerByName = () => {
    dispatch(SearchRecipeByName(search));
  };
  return (
    <>
      <SearchBar
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      ></SearchBar>
      <SearchBtn onClick={clickHandlerByName}>Buscar</SearchBtn>
    </>
  );
};

export default SearchBarComponent;
