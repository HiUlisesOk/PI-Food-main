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
        <CardPanel>
          <Link to={`/details/${props.id}`}>DETAILS</Link>
        </CardPanel>
        <CardImage image={props.image}> </CardImage>
        <CardName>
          <h3>{props.name}</h3>
        </CardName>
        <CardDietType>
          <h4>{props.diets}</h4>
        </CardDietType>
      </CardContainer>
    </>
  );
};
export default RecipeCard;
