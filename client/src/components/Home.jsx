import { BigContainer, ResetButton, Loader, SubTitle } from "./styles";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetRecipes,
  SearchRecipeByName,
  OrderAndFilter,
} from "../redux/actions";
import RecipeCards from "./RecipeCards";
import Pagination from "./Pagination";
import SearchBarComponent from "./SearchBar";
import OrderAndFilterComponent from "./OrderAndFilterComponent";

const Home = () => {
  const dispatch = useDispatch();
  const AllRecipes = useSelector((state) => state.AllRecipes);

  //PAGINATION
  const [page, setPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);

  const indexOfLastRecipe = page * recipesPerPage;
  const indexOfFirsRecipe = indexOfLastRecipe - recipesPerPage;
  let currentRecipes = AllRecipes.slice(indexOfFirsRecipe, indexOfLastRecipe);
  const pagination = (pageNumber) => {
    setPage(pageNumber);
  };
  const HandlePagination = (direction) => {
    switch (direction) {
      case "N":
        if (page < Math.ceil(AllRecipes.length / recipesPerPage)) {
          setPage(page + 1);
        }
        break;
      case "B":
        if (page > 1) {
          setPage(page - 1);
        }
        break;
      default:
        break;
    }
  };
  //SEARCH BY NAME
  const [search, setSearch] = useState("");
  const clickHandlerByName = (e) => {
    e.preventDefault();
    dispatch(SearchRecipeByName(search));
    setPage(1);
  };

  //ORDER & FILTER

  const [orderAndFilter, setOrderAndFilter] = useState({
    order: false,
    orderType: "no order",

    filter: false,
    filterType: "no filter",
  });
  const handlerOrderAndFilter = (e) => {
    if (e.target.name === "order") {
      setOrderAndFilter({
        ...orderAndFilter,
        order: true,
        orderType: e.target.value,
      });
      setPage(1);
    } else if (e.target.name === "filter") {
      setOrderAndFilter({
        ...orderAndFilter,
        filter: true,
        filterType: e.target.value,
      });
      setPage(1);
    }
  };
  //GET ALL RECIPES BACK
  const GetAllRecipesBack = () => {
    setOrderAndFilter({
      order: false,
      orderType: "no order",

      filter: false,
      filterType: "no filter",
    });
    setPage(1);
    dispatch(GetRecipes());
  };

  useEffect(() => {
    if (!AllRecipes.length) GetAllRecipesBack();
  }, []);
  return (
    <>
      <BigContainer>
        <SubTitle>¡Aquí puedes buscar tus recetas!</SubTitle>
        <SearchBarComponent
          clickHandlerByName={clickHandlerByName}
          setSearch={setSearch}
        />

        <OrderAndFilterComponent
          handlerOrderAndFilter={handlerOrderAndFilter}
          orderAndFilter={orderAndFilter}
        />

        <ResetButton onClick={(e) => GetAllRecipesBack(e)}>Reset</ResetButton>

        {AllRecipes.length >= recipesPerPage && (
          <Pagination
            recipesPerPage={recipesPerPage}
            AllRecipes={AllRecipes}
            pagination={pagination}
            HandlePagination={HandlePagination}
            page={page}
          />
        )}

        {AllRecipes.length ? (
          <RecipeCards currentRecipes={currentRecipes} />
        ) : (
          <p>
            Aún no tenemos recetas para mostrar aquí..
            <br></br>
            <Loader />
          </p>
        )}
        {AllRecipes.length >= recipesPerPage && (
          <Pagination
            recipesPerPage={recipesPerPage}
            AllRecipes={AllRecipes}
            pagination={pagination}
            HandlePagination={HandlePagination}
            page={page}
          />
        )}
      </BigContainer>
    </>
  );
};

export default Home;
