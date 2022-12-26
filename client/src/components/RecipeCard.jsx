import {
  CardContainer,
  CardImage,
  CardName,
  CardDietType,
  CardPanel,
  FavButton,
} from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFav } from "../redux/actions";

const RecipeCard = (props) => {
  const Favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(deleteFav(props.id));
    }
    if (isFav === false) {
      setIsFav(true);
      dispatch(addFavorites(props.id));
    }
  };
  useEffect(() => {
    console.log(Favorites);
    Favorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [Favorites, handleFavorite]);

  return (
    <>
      <CardContainer>
        <CardImage image={props.image}>
          {isFav ? (
            <FavButton onClick={handleFavorite}>
              <p>ADDED TO FAVORITES</p>❤️
            </FavButton>
          ) : (
            <FavButton onClick={handleFavorite}>
              <p>ADD TO FAVORITES</p>🤍
            </FavButton>
          )}
        </CardImage>
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
