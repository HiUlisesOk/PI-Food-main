import {
  BigContainer,
  SelectFilter,
  OptionFilter,
  LabelFilter,
} from "./styles";
import React, { useEffect, useState } from "react";
import { GetRecipes } from "../redux/actions";
import RecipeCards from "./RecipeCards";
import Pagination from "./Pagination";
import SearchBarComponent from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const AllRecipes = useSelector((state) => state.AllRecipes);

  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(GetRecipes());
  }, [dispatch]);

  return (
    <>
      <BigContainer>
        <LabelFilter>Order:</LabelFilter>
        <SelectFilter onChange={(e) => setOrder(e.target.value)}>
          <OptionFilter value="Ascendente">Ascendente</OptionFilter>
          <OptionFilter value="Descendente">Descendente</OptionFilter>
        </SelectFilter>

        <LabelFilter>Filter:</LabelFilter>
        <SelectFilter onChange={(e) => setFilter(e.target.value)}>
          <OptionFilter value="gluten free">gluten free</OptionFilter>
          <OptionFilter value="ketogenic">ketogenic</OptionFilter>
          <OptionFilter value="vegetarian">vegetarian</OptionFilter>
          <OptionFilter value="lacto ovo vegetarian">
            lacto ovo vegetarian
          </OptionFilter>
          <OptionFilter value="ovo-vegetarian">ovo-vegetarian</OptionFilter>
          <OptionFilter value="vegan">vegan</OptionFilter>
          <OptionFilter value="pescatarian">pescatarian</OptionFilter>
          <OptionFilter value="paleolithic">paleolithic</OptionFilter>
          <OptionFilter value="primal">primal</OptionFilter>
          <OptionFilter value="low fodmap">low fodmap</OptionFilter>
          <OptionFilter value="whole 30">whole 30</OptionFilter>
          <OptionFilter value="dairy free">dairy free</OptionFilter>
        </SelectFilter>
        <br />
        <SearchBarComponent />
        <br />

        {/* <RecipeCards AllRecipes={AllRecipes} /> */}
        <Pagination></Pagination>
      </BigContainer>
    </>
  );
};

export default Home;
