import { BigContainer } from "./styles";
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
  const HandlePagination = (direction, pageNumber) => {
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
    orderType: "Ascendente",
    filter: false,
    filterType: "",
  });
  const handlerOrderAndFilter = (e) => {
    setOrderAndFilter({
      ...orderAndFilter,
      order: true,
      orderType: e.target.value,
    });
    dispatch(OrderAndFilter(orderAndFilter));
  };
  //GET ALL RECIPES BACK
  const GetAllRecipesBack = () => {
    dispatch(GetRecipes());
  };

  useEffect(() => {
    dispatch(GetRecipes());
  }, [dispatch]);
  return (
    <>
      {orderAndFilter.orderType}
      <br></br>
      <BigContainer>
        <OrderAndFilterComponent
          handlerOrderAndFilter={handlerOrderAndFilter}
          orderAndFilter={orderAndFilter}
        />
        <br />
        <SearchBarComponent
          clickHandlerByName={clickHandlerByName}
          setSearch={setSearch}
        />
        <br />
        {AllRecipes.length <= 1 && (
          <button onClick={(e) => GetAllRecipesBack(e)}>
            Get All Recipes Back
          </button>
        )}
        <Pagination
          recipesPerPage={recipesPerPage}
          AllRecipes={AllRecipes}
          pagination={pagination}
          HandlePagination={HandlePagination}
        />

        <RecipeCards currentRecipes={currentRecipes} />
      </BigContainer>
    </>
  );
};

export default Home;
