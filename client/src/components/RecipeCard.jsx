import {
  CardContainer,
  CardImage,
  CardName,
  CardDietType,
  CardPanel,
} from "./styles";
const RecipeCard = (props) => {
  console.log(props);
  return (
    <>
      <CardContainer>
        <CardImage image={props.image}> </CardImage>
        <CardName>{props.name}</CardName>
        <CardDietType>
          <h2>{props.diet}</h2>
        </CardDietType>
      </CardContainer>
    </>
  );
};
export default RecipeCard;
