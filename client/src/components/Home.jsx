import {
  BigContainer,
  SelectFilter,
  OptionFilter,
  LabelFilter,
} from "./styles";
import React, { useEffect, useState } from "react";
import { GetRecipes } from "../redux/actions";
import RecipeCards from "./RecipeCards";
import SearchBarComponent from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const MyState = useSelector((state) => state);
  const [recipes, setRecipes] = useState(MyState.AllRecipes);
  const [order, setOrder] = useState("Ascendente");
  const [filter, setFilter] = useState("");
  const [errorSearch, setErrorSearch] = useState(MyState.error);
  if (!MyState.AllRecipes[0]) dispatch(GetRecipes());
  if (MyState.AllRecipes[0] && !recipes.length) setRecipes(MyState.AllRecipes);

  console.log(order, filter);

  useEffect(() => {
    setErrorSearch(MyState.error);
    if (MyState.searchByName) {
      setRecipes(MyState.searchByName);
    }
  }, [MyState]);
  return (
    <>
      <BigContainer>
        <br />
        <SearchBarComponent />
        <br />
        <br />
        <SelectFilter onChange={(e) => setOrder(e.target.value)}>
          <OptionFilter>Ascendente</OptionFilter>
          <OptionFilter>Descendente</OptionFilter>
        </SelectFilter>

        <SelectFilter onChange={(e) => setFilter(e.target.value)}>
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

        <br></br>
        {errorSearch}
        <RecipeCards recipes={recipes} />
      </BigContainer>
    </>
  );
};

export default Home;
