import { SearchBar, SearchBtn, HomePanel, SearchError } from "./styles";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const SearchBarComponent = ({ clickHandlerByName, setSearch }) => {
  const error = useSelector((state) => state.error);
  //Si hay algun error en la busqueda los mostraremos desde este estado
  const [errorSearch, setErrorSearch] = useState(error);

  useEffect(() => {
    setErrorSearch(error);
  }, [error, clickHandlerByName]);

  return (
    <>
      <HomePanel>
        <SearchBar
          placeholder="Nombre de la receta..."
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        ></SearchBar>
        <SearchBtn onClick={(e) => clickHandlerByName(e)}>Buscar</SearchBtn>
      </HomePanel>
      <SearchError>{errorSearch}</SearchError>
    </>
  );
};

export default SearchBarComponent;
