import {
  ContainerNav,
  NavPanel,
  LinkPanel,
  TopBar,
  ActiveSpan,
  TitleWeb,
} from "./styles";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      {" "}
      <ContainerNav>
        <TopBar>
          <TitleWeb>
            <ActiveSpan>Yummy</ActiveSpan> Chef
          </TitleWeb>
        </TopBar>

        <NavPanel>
          <NavLink to="/home">
            <LinkPanel>Home</LinkPanel>
          </NavLink>
        </NavPanel>
        <NavPanel>
          <NavLink to="/create-recipe">
            <LinkPanel>Crear Receta </LinkPanel>
          </NavLink>
        </NavPanel>
      </ContainerNav>
    </>
  );
};
export default NavBar;
