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

export const WrapContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-around;
`;
export const WrapPanel = styled.div``;

/// <=============== PORTAL ===============>
export const PortalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
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
  width: 181px;
  max-width: 500px;
  font-size: 1.5em;
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
  font-family: ${Lato};
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;

  @media only screen and (${device.mobileL}) {
    width: 0px;
  }
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
    color: ${thirdColor};
    background: ${PrimaryColor};
    text-decoration: none;
  }
`;
export const LinkPanel = styled.div`
  min-width: 100px;
  height: 32px;
`;
export const ButtonNav = styled.button`
  background: linear-gradient(to right, ${PrimaryColor}, ${PrimaryColor});
  background-color: ${PrimaryColor};
  color: ${thirdColor};
  font-family: ${Lato};
  font-size: 19px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 12px 17px;
  border: 0px solid #000;
  border-radius: 10px;

  display: flex;
  align-self: flex-end;
  margin: auto;
  margin-right: 15px;

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
export const GeneralButton = styled(ButtonNav)`
  margin-right: auto;
  margin: 25px auto;
`;
/// <=============== HOME ===============>
export const BigContainer = styled.div`
  min-width: 1100px;
  background-color: ${SecondaryColor}10;
  padding-top: 20px;
  padding-bottom: 20px;
  @media only screen and (${device.laptop}) {
    min-width: 500px;
  }
  @media only screen and (${device.mobileL}) {
    min-width: 300px;
  }
`;
export const SearchBar = styled.input`
  min-height: 59px;
  padding: 12px 17px;
  border: 0px;
  border-bottom: solid 2px ${PrimaryColor};
  background-color: ${SecondaryColor}10;
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
    background-color: ${thirdColor};
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

  justify-content: center;

  @media only screen and (${device.laptop}) {
    grid-template-columns: auto auto;
  }
  @media only screen and (${device.mobileL}) {
    grid-template-columns: auto;
  }
`;

/// <=============== RECIPE CARD ===============>
export const CardContainer = styled.div`
  background-color: ${thirdColor};
  display: flex;
  flex-direction: column;
  min-height: 250px;
  min-width: 200px;
  max-height: 350px;
  max-width: 280px;
  margin: 10px;
  border-radius: 10px 10px 10px 10px;
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
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 160px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  border-radius: 10px 10px 0px 0px;
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
  height: 2em;
  color: ${thirdColor};
  border-radius: 0px 0px 10px 10px;
  text-decoration: none;
`;
/// <=============== FAVORITES ===============>
export const FavButton = styled(ButtonNav)`
  opacity: 0;
  margin-right: auto;
  margin: auto;
  top: -100px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 0.75;
  transition: all 0.3s ease-in-out;
  ${CardContainer}:hover & {
    top: 0px;
    opacity: 1;
  }
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
  margin: 5px;
  background: ${thirdColor};
  border: solid 1px ${SecondaryColor};
  padding: 10px;
  min-width: 45px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? PrimaryColor : thirdColor)};
  color: ${(props) => (props.isActive ? thirdColor : SecondaryColor)};
  border-color: ${(props) => (props.isActive ? PrimaryColor : SecondaryColor)};
`;

/// <=============== DETAILS ===============>
export const DetailsName = styled.div`
  ${PlayfairDisplay}
  font-size:2.3em;
`;
export const DetailsHealthScore = styled.div`
  ${Lato}
  background: ${SecondaryColor};
  color: ${thirdColor};
  padding: 10px;
  font-size: 10px;
  text-transform: uppercase;
  border-radius: 10px 0px 10px 0px;
  margin: 5px;
`;
export const DetailsImg = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 230px;
  width: 300px;
  border-radius: 25px 0px 25px 0px;
  border: 5px solid ${SecondaryColor};
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
`;
export const DetailsDietType = styled.div`
  ${Lato}
  background: ${PrimaryColor};
  color: ${thirdColor};
  padding: 10px;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 10px;
  margin: 5px;
`;
export const DetailsDishType = styled.div`
  ${Lato}
  background: ${SecondaryColor};
  color: ${thirdColor};
  padding: 10px;
  font-size: 10px;
  text-transform: uppercase;
  border-radius: 10px 0px 10px 0px;
  margin: 5px;
`;
export const DetailsSummary = styled.div`
  width: 80%;
  white-space: pre-line;
  text-align: left;
  & a {
    font-weight: bold;
    color: ${PrimaryColor};
    text-decoration: none;
  }
  & a:active {
    color: ${SecondaryColor};
    text-decoration: none;
  }
  & a:hover {
    cursor: pointer !important;
    color: ${SecondaryColor};
    text-decoration: none;
  }
`;
export const DetailsSteps = styled.div`
  width: 80%;
  white-space: pre-line;
  text-align: left;
`;
export const DetailsPanel = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: center;
  @media only screen and (${device.laptop}) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (${device.mobileL}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DetailsDietPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

/// <=============== RECIPE FORM CREATION ===============>

export const FormContainer = styled.div`
  min-width: 1100px;
  background-color: ${SecondaryColor}10;
  width: 100%;
  padding: 12px 17px;
  margin: auto;
  @media only screen and (${device.laptop}) {
    min-width: 500px;
  }
  @media only screen and (${device.mobileL}) {
    min-width: 300px;
  }
`;
export const FormRecipe = styled.form`
  width: 95%;
  margin: auto;
`;
export const TitlePanel = styled.div`
  width: 100%;
  color: ${SecondaryColor};
  ${PlayfairDisplay}
  padding:10px;
  text-decoration: none;
  text-transform: capitalize;
  text-align: left;
  border: 0px solid #000;
  border-bottom: 0px solid ${SecondaryColor};
  &:focus-visible {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 0px;
  }
`;
export const InputName = styled.input`
  width: 90%;
  min-height: 25px;
  padding: 12px 17px;
  border: 0px;

  background-color: ${thirdColor};
  color: ${PrimaryColor};

  border-radius: 10px;
  &:focus-visible {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 0px;
  }
`;

export const InputImg = styled.input`
  width: 90%;
  min-height: 25px;
  padding: 12px 17px;
  border: 0px;

  background-color: ${thirdColor};
  color: ${PrimaryColor};

  border-radius: 10px;
  &:focus-visible {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 0px;
  }
`;
export const TextAreaSummary = styled.textarea`
  width: 90%;
  min-height: 25px;
  padding: 12px 17px;
  border: 0px;
  background-color: ${thirdColor};
  color: ${PrimaryColor};

  border-radius: 10px;
  &:focus-visible {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 0px;
  }
`;
export const TextAreaSteps = styled.textarea`
  width: 90%;
  min-height: 25px;
  padding: 12px 17px;
  border: 0px;
  background-color: ${thirdColor};
  color: ${PrimaryColor};

  border-radius: 10px;
  &:focus-visible {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 0px;
  }
`;
export const InputHealthScore = styled.input`
  width: 20%;
  min-height: 25px;
  padding: 12px 17px;
  border: 0px;

  border-radius: 10px;
  background-color: ${thirdColor};
  color: ${PrimaryColor};
  &:focus-visible {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 0px;
  }
`;

export const BigPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PanelDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 17px;
`;
export const OptionContainer = styled.div`
  padding: 12px 17px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const InputDietType = styled.input`
  display: none;
`;
export const InputDishType = styled.input`
  display: none;
`;
export const LabelPanel = styled.label`
  ${Lato}
  background: ${PrimaryColor};
  color: ${thirdColor};
  padding: 5px 10px;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 10px;
  cursor: pointer;
`;
export const OptionDivider = styled.div`
  margin: 5px;
  & input[type="checkbox"]:checked + label {
    background: ${SecondaryColor};
  }
`;
export const SubmitButton = styled.button`
  background-color: ${PrimaryColor};
  color: ${thirdColor};
  font-family: ${Lato};
  font-size: 19px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 12px 17px;
  border: 0px solid #000;
  border-radius: 10px;
  display: inline-block;
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

export const ErrorPanel = styled.div`
  ${Lato};
  font-weight: bold;
  min-height: 25px;
  color: red;
  display: block;
`;
