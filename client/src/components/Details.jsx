import axios from "axios";
import { useEffect, useState } from "react";
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

  const navigate = useNavigate();
  return (
    <>
      <BigContainer>
        <ButtonNav onClick={(e) => navigate("/home")}>BACK</ButtonNav>
        <DetailsPanel align={"flex-start"} direction={"row"}>
          <DetailsImg img={recipe.image}></DetailsImg>
          <DetailsPanel align={"column"} direction={"column"}>
            <DetailsName>{recipe.name}</DetailsName>
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
