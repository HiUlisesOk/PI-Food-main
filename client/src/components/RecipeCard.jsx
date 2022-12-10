import {
  CardContainer,
  CardImage,
  CardName,
  CardDietType,
  CardPanel,
} from "./styles";
const RecipeCard = (props) => {
  return (
    <>
      <CardContainer>
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
