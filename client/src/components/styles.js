import styled from "styled-components/macro";
import picture from "../img/homeBG.jpg";
const device = {
  mobileS: "max-width: 320px",
  mobileM: "max-width: 375px",
  mobileL: "max-width: 425px",
  tablet: "max-width: 768px",
  laptop: "max-width: 1024px",
  laptopL: "max-width: 1440px",
  desktop: "max-width: 2560px",
};
const PrimaryColor = "#f55f33";
const SecondaryColor = "#1E1D1D";
const thirdColor = "#FFF";
const PlayfairDisplay = `
font-family: 'Playfair Display';
font-style: italic;
font-weight: bold;
line-height: 1.75;
`;
const Lato = `font-family: 'Lato';
font-weight: 400;
font-size:1rem;
line-height: 1.75;
`;
/// <=============== PORTAL ===============>
export const PortalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
export const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
export const TitleWeb = styled.div`
  ${PlayfairDisplay}
  width: 381px;
  max-width: 500px;
  font-size: 2.5em;
  font-weight: bold;
  text-align: left;
`;
export const SubTitleWeb = styled.div`
  font-size: 0.8rem;
  width: auto;
  margin: auto;
  ${Lato}
`;
export const ImageBackground = styled.div`
  background-image: url(${picture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
  height: 100%;
  display: flex;
`;
export const WelcomeButton = styled.button`
  background: linear-gradient(to right, ${PrimaryColor}, ${PrimaryColor});
  background-color: ${PrimaryColor};
  color: ${thirdColor};
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
  color: ${PrimaryColor};
`;
export const ContainerPanel = styled.div`
  margin: auto;
  display: inline-block;
  & a {
    text-decoration: none;
  }
`;
// <=============== NAVBAR ===============>
export const ContainerNav = styled.div`
  min-height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
`;
export const NavPanel = styled.div`
  min-width: 100px;
  min-height: 25px;
  text-decoration: none;
  font-weight: 600;
  margin: 5px;
  ${Lato}
  & a {
    text-transform: uppercase;
    color: ${SecondaryColor};
    text-decoration: none;
  }
  & a:active {
    color: ${SecondaryColor};
    text-decoration: none;
  }
  & a:hover {
    color: ${PrimaryColor};
    text-decoration: none;
  }
  & a.active div {
    color: ${PrimaryColor};
    border-bottom: solid 2px ${PrimaryColor};
    text-decoration: none;
  }
`;
export const LinkPanel = styled.div`
  min-width: 100px;
  height: 32px;
`;
export const ButtonNav = styled.button``;
/// <=============== HOME ===============>
export const BigContainer = styled.div``;
export const SearchBar = styled.input`
  min-height: 59px;
  padding: 12px 17px;
  border: 0px;
  border-bottom: solid 2px ${PrimaryColor};
  background-color: ${SecondaryColor};
  color: ${PrimaryColor};
  border-radius: 10px 0px 0px 0px;
  &:focus-visible {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 0px;
  }
`;
export const SearchBtn = styled.button`
  background-color: ${PrimaryColor};
  color: ${thirdColor};
  ${PlayfairDisplay}
  text-decoration: none;
  text-transform: uppercase;
  padding: 12px 17px;
  border: 0px solid #000;
  border-radius: 0px 0px 10px 0px;
  cursor: pointer !important;
`;
export const HomePanel = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  padding: 10px;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;
export const SearchError = styled.div`
  ${Lato}
  min-height:25px;
  padding: 10px;
  padding-top: 0px;
  font-weight: bold;
  color: red;
`;
export const SelectFilter = styled.select`
  color: ${SecondaryColor};
  ${Lato}
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  border: 0px solid #000;
  border-bottom: 3px solid ${SecondaryColor};
  &:focus-visible {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 0px;
  }
`;
export const OptionFilter = styled.option`
  background-color: ${thirdColor};
  color: ${SecondaryColor};
  ${Lato}
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  border: 0px solid #000;
  border-bottom: 3px solid ${SecondaryColor};
  &:hover {
    background-color: ${SecondaryColor};
    color: ${PrimaryColor};
  }
`;
export const LabelFilter = styled.label`
  ${PlayfairDisplay}
  padding:10px;
`;
export const ContainerRecipes = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-content: space-between;
  justify-content: space-evenly;

  @media only screen and (${device.laptop}) {
    grid-template-columns: auto auto;
  }
  @media only screen and (${device.mobileL}) {
    grid-template-columns: auto;
  }
`;

/// <=============== RECIPE CARD ===============>
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 250px;
  min-width: 220px;
  max-height: 350px;
  max-width: 290px;
  margin: 10px;
  border-radius: 10px 0px 10px 0px;
  border-bottom: solid 3px ${PrimaryColor};
  border-top: solid 3px ${PrimaryColor};
  box-shadow: 15px 13px 13px -8px rgba(0, 0, 0, 0.1);
  & a {
    font-weight: bold;
    color: ${thirdColor};
    text-decoration: none;
  }
  & a:active {
    color: ${thirdColor};
    text-decoration: none;
  }
  & a:hover {
    cursor: pointer !important;
    color: ${SecondaryColor};
    text-decoration: none;
  }
`;
export const CardImage = styled.div`
  height: 130px;
  width: 290px;
  background-image: url(${(props) => props.image});
  margin: auto;
  border-radius: 10px 0px 0px 0px;
  border-bottom: solid 5px ${PrimaryColor};
`;
export const CardName = styled.div`
  ${PlayfairDisplay}
  line-height:1em;
  padding: 10px;
  min-height: 3em;
`;
export const CardDietType = styled.div`
  ${Lato}
  font-style: italic;
  padding: 10px;
  line-height: 1rem;
  min-height: 3em;
  max-height: 3.5em;
`;
export const CardPanel = styled.div`
  background: ${PrimaryColor};
  ${PlayfairDisplay}
  cursor: pointer !important;
  font-weight: bold;
  height: 1.5em;
  color: ${thirdColor};
  border-radius: 0px 0px 10px 0px;
  text-decoration: none;
`;
/// <=============== PAGINATION ===============>
export const ContainerPagination = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: center;
  padding: 17px;
  min-width: 700px;
  @media only screen and (${device.laptop}) {
    flex-wrap: wrap;
    min-width: 355px;
  }
  @media only screen and (${device.mobileL}) {
    flex-wrap: wrap;
    min-width: 355px;
  }
`;
export const PaginationPanel = styled.div``;
export const ContainerButton = styled.button`
  background: ${thirdColor};
  color: ${SecondaryColor};
  border: solid 1px ${SecondaryColor};
  padding: 10px;
  min-width: 45px;
  cursor: pointer;
`;

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

/// <=============== RECIPE CREATION ===============>
export const FormContainer = styled.div``;
export const FormRecipe = styled.form``;
export const InputName = styled.input``;
export const InputDietType = styled.input``;
export const InputDishType = styled.input``;
export const InputImg = styled.input``;
export const TextAreaSummary = styled.textarea``;
export const TextAreaSteps = styled.textarea``;
export const InputHealthScore = styled.input``;
export const LabelPanel = styled.label``;
export const BigPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PanelDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const OptionDivider = styled.div``;
export const SubmitButton = styled.button`
  background-color: ${PrimaryColor};
  color: ${thirdColor};
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
