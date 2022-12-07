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
        <CardImage image={props.image}>
          <CardName>{props.name}</CardName>
          <CardDietType>{props.diet}</CardDietType>
        </CardImage>
      </CardContainer>
    </>
  );
};
export default RecipeCard;
