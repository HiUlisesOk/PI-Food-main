import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  }, []);

  return (
    <>
      <BigContainer>
        <DetailsName>{recipe.name}</DetailsName>
        <DetailsHealthScore>
          HealthScore: {recipe.healthScore}
        </DetailsHealthScore>
        <DetailsImg img={recipe.image}></DetailsImg>
        <DetailsDietType>
          {recipe.diets?.map((diet) => diet.name).join(", ")}
        </DetailsDietType>
        <DetailsDishType>{recipe.dishTypes}</DetailsDishType>
        <DetailsSummary>{recipe.name}</DetailsSummary>
        <DetailsSteps>{recipe.steps}</DetailsSteps>
      </BigContainer>
    </>
  );
};

export default Details;
