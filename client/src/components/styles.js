import styled from "styled-components/macro";
import picture from "../img/homeBG.jpg";

/// <=============== PORTAL ===============>
export const PortalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
export const TitleWeb = styled.div`
  width: 381px;
  max-width: 500px;
  font-size: 2em;
  font-weight: bold;
  text-align: left;
`;
export const SubTitleWeb = styled.div`
  font-size: 1rem;
  width: 245px;
`;
export const ImageBackground = styled.div`
  background-image: url(${picture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 550px;
  display: flex;
`;
export const WelcomeButton = styled.button`
  background: linear-gradient(to right, #f55f33, #f55f33);
  background-color: #f55f33;
  color: #fff;
  font-family: Verdana;
  font-size: 19px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 12px 17px;
  border: 0px solid #000;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 4px 2px 7px -2px #2d2d2d;
  margin: auto;
  cursor: pointer !important;
  transform: scale(1);
  &:hover {
    background: linear-gradient(to right, #f6795e, #f6795e);
    background-color: #f6795e;
  }
  &:active {
    transform: scale(0.95);
  }
`;
export const ActiveSpan = styled.span`
  color: #f55f33;
`;
export const ContainerPanel = styled.div`
  margin: auto;
  display: inline-block;

  & a {
    text-decoration: none;
  }
`;

/// <=============== HOME ===============>
export const BigContainer = styled.div``;
export const SearchBar = styled.input``;
export const SearchBtn = styled.button`
  background: linear-gradient(to right, #f55f33, #f55f33);
  background-color: #f55f33;
  color: #fff;
  font-family: Verdana;
  font-size: 19px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 12px 17px;
  border: 0px solid #000;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 4px 2px 7px -2px #2d2d2d;
  margin: auto;
  cursor: pointer !important;
`;
export const ContainerRecipes = styled.div``;
export const SelectFilter = styled.select``;
export const OptionFilter = styled.option``;
export const LabelFilter = styled.label``;
/// <=============== RECIPE CARD ===============>
export const CardContainer = styled.div``;
export const CardImage = styled.div`
  height: 230px;
  width: 280px;
  background-image: url(${(props) => props.image});
  margin: auto;
`;
export const CardName = styled.div``;
export const CardDietType = styled.div``;
export const CardPanel = styled.div``;
/// <=============== RECIPE CARD ===============>
export const ContainerPagination = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: center;
`;
export const PaginationPanel = styled.div``;
export const ContainerButton = styled.button``;

/// <=============== DETAILS ===============>
export const DetailsName = styled.div``;
export const DetailsDietType = styled.div``;
export const DetailsImg = styled.div`
  height: 230px;
  width: 280px;
  background-image: url(${(props) => props.img});
  margin: auto;
`;
export const DetailsDishType = styled.div``;
export const DetailsSummary = styled.div``;
export const DetailsSteps = styled.div``;
export const DetailsHealthScore = styled.div``;
export const DetailsPanel = styled.div``;
