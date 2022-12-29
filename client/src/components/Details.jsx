import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

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
} from "./styles";
const Details = (props) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("");
  console.log(recipe);
  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`).then((res) => {
      const data = res.data;
      setRecipe(data);
    });
  }, [id]);
  const Favorites = useSelector((state) => state.favorites);
  const navigate = useNavigate();
  return (
    <>
      <BigContainer>
        <ButtonNav onClick={(e) => navigate("/home")}>BACK</ButtonNav>
        <DetailsPanel align={"flex-start"} direction={"row-reverse"}>
          <DetailsName> {recipe.name}</DetailsName>{" "}
          <DetailsImg img={recipe.image}>
            {Favorites.some((fav) => fav.name === recipe.name) && (
              <FavIconDetail>⭐</FavIconDetail>
            )}
          </DetailsImg>
        </DetailsPanel>
        <DetailsPanel align={"column"} direction={"column"}>
          <DetailsPanel align={"stretch"} direction={"column"}>
            <DetailsHealthScore>
              HealthScore: {recipe.healthScore}
            </DetailsHealthScore>
            <DetailsDishType>Type: {recipe.dishTypes}</DetailsDishType>{" "}
          </DetailsPanel>
          <DetailsDietPanel>
            {recipe.diets?.map((diet) => (
              <DetailsDietType>{diet.name}</DetailsDietType>
            ))}
          </DetailsDietPanel>
        </DetailsPanel>

        <DetailsPanel align={"center"} direction={"column"}>
          <DetailsSummary
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          ></DetailsSummary>
          <DetailsName>Steps</DetailsName>
          <DetailsSteps>{recipe.steps}</DetailsSteps>
        </DetailsPanel>
      </BigContainer>
    </>
  );
};

export default Details;
