import {
  ContainerNav,
  NavPanel,
  LinkPanel,
  TopBar,
  ActiveSpan,
  TitleWeb,
  Logo,
} from "./styles";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <ContainerNav>
        <TopBar>
          <NavLink to="/">
            <TitleWeb>
              <Logo />
              <ActiveSpan>Yummy</ActiveSpan> Chef
            </TitleWeb>
          </NavLink>
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
        <NavPanel>
          <NavLink to="/favorites">
            <LinkPanel>Favoritos </LinkPanel>
          </NavLink>
        </NavPanel>
      </ContainerNav>
    </>
  );
};
export default NavBar;
