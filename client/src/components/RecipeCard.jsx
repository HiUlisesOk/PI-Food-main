import {
  CardContainer,
  CardImage,
  CardName,
  CardDietType,
  CardPanel,
} from "./styles";
import { Link } from "react-router-dom";
const RecipeCard = (props) => {
  return (
    <>
      <CardContainer>
        <CardImage image={props.image}> </CardImage>
        <CardName>
          <h3>{props.name}</h3>
        </CardName>
        <CardDietType>{props.diets?.split(",").join(" - ")}</CardDietType>
        <Link to={`/details/${props.id}`}>
          <CardPanel>Details</CardPanel>
        </Link>
      </CardContainer>
    </>
  );
};
export default RecipeCard;
