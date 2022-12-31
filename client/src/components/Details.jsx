import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { GetRecipes } from "../redux/actions";
import {
  BigContainer,
  DetailsName,
  DetailsDietType,
  DetailsImg,
  DetailsDishType,
  DetailsSummary,
  DetailsSteps,
  DetailsHealthScore,
  DetailsPanel,
  DetailsDietPanel,
  ButtonNav,
  FavIconDetail,
  ResetButton,
} from "./styles";
const Details = (props) => {
  const Favorites = useSelector((state) => state.favorites);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState("");

  function handleDelete() {
    var result = window.confirm(
      "¿Desea eliminar la receta de forma permanente?",
    );
    if (result) {
      axios
        .delete(`http://localhost:3001/delete/${id}`)
        .then(() => dispatch(GetRecipes()))
        .then(() => navigate("/home"))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`).then((res) => {
      const data = res.data;
      setRecipe(data);
    });
  }, [id]);

  return (
    <>
      <BigContainer>
        <ButtonNav onClick={(e) => navigate("/home")}>BACK</ButtonNav>
        <DetailsPanel align={"flex-start"} direction={"row-reverse"}>
          <DetailsName>
            {recipe.name}
            <DetailsDietPanel>
              {recipe.diets?.map((diet) => (
                <DetailsDietType>{diet.name}</DetailsDietType>
              ))}
            </DetailsDietPanel>
          </DetailsName>
          <DetailsImg img={recipe.image}>
            {Favorites.some((fav) => fav.name === recipe.name) && (
              <FavIconDetail>⭐</FavIconDetail>
            )}
          </DetailsImg>
        </DetailsPanel>
        <DetailsPanel align={"column"} direction={"column"}>
          <DetailsPanel align={"stretch"} direction={"column"}>
            <DetailsDishType>Dish Type: {recipe.dishTypes}</DetailsDishType>{" "}
            <DetailsHealthScore>
              HealthScore: {recipe.healthScore}
            </DetailsHealthScore>
          </DetailsPanel>
        </DetailsPanel>

        <DetailsPanel align={"center"} direction={"column"}>
          <DetailsSummary
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          ></DetailsSummary>
          <DetailsName>Steps</DetailsName>
          <DetailsSteps>{recipe.steps}</DetailsSteps>
        </DetailsPanel>
        <ResetButton onClick={handleDelete}>DELETE RECIPE</ResetButton>
      </BigContainer>
    </>
  );
};

export default Details;
