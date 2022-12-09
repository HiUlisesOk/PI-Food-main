import {
  BigContainer,
  SearchBar,
  SearchBtn,
  ContainerRecipes,
  SelectFilter,
} from "./styles";
import { useDispatch } from "react-redux";
import { GetRecipes } from "../redux/actions";
import allRecipes from "./RecipeCard";

const Home = () => {
  const dispatch = useDispatch();
  const Allrecipes = dispatch(GetRecipes());
  console.log(allRecipes);
  return (
    <>
      <BigContainer>
        <SearchBar type="text"></SearchBar>
        <SearchBtn></SearchBtn>
        <SelectFilter>Tipo de dieta</SelectFilter>
        <SelectFilter>Ascendente / Descendente</SelectFilter>
        <ContainerRecipes></ContainerRecipes>
      </BigContainer>
    </>
  );
};

export default Home;
