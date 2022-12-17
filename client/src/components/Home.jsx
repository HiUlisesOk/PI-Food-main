import { BigContainer, HomePanel } from "./styles";
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
  const HandlePagination = (direction, e) => {
    console.log(e);
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
    orderType: "",
    orderValue: "",
    filter: false,
    filterType: "",
    filterValue: "",
  });
  const handlerOrderAndFilter = (e) => {
    if (e.target.name === "order") {
      setOrderAndFilter({
        ...orderAndFilter,
        order: true,
        orderType: e.target.value,
      });
      setPage(1);
      dispatch(OrderAndFilter(orderAndFilter));
    } else if (e.target.name === "filter") {
      setOrderAndFilter({
        ...orderAndFilter,
        filter: true,
        filterType: e.target.value,
      });
      setPage(1);
      dispatch(OrderAndFilter(orderAndFilter));
    }
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
      <BigContainer>
        <SearchBarComponent
          clickHandlerByName={clickHandlerByName}
          setSearch={setSearch}
        />

        <OrderAndFilterComponent
          handlerOrderAndFilter={handlerOrderAndFilter}
          orderAndFilter={orderAndFilter}
        />
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
        <Pagination
          recipesPerPage={recipesPerPage}
          AllRecipes={AllRecipes}
          pagination={pagination}
          HandlePagination={HandlePagination}
        />
      </BigContainer>
    </>
  );
};

export default Home;
