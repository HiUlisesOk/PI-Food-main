import { Link } from "react-router-dom";
import {
  PortalContainer,
  TopBar,
  TitleWeb,
  SubTitleWeb,
  ImageBackground,
  WelcomeButton,
  ActiveSpan,
  ContainerPanel,
} from "./styles";

const Portal = (props) => {
  return (
    <>
      <PortalContainer>
        <TopBar>
          <TitleWeb>
            <ActiveSpan>Yummy</ActiveSpan> Chef
          </TitleWeb>
          <SubTitleWeb>
            Esquivel Ulises PI Made with <ActiveSpan>♥</ActiveSpan> for{" "}
            <ActiveSpan>HENRY</ActiveSpan>
          </SubTitleWeb>
        </TopBar>
        <ImageBackground>
          <ContainerPanel>
            <Link to="/Home">
              <WelcomeButton>WELCOME</WelcomeButton>
            </Link>
          </ContainerPanel>
        </ImageBackground>
      </PortalContainer>
    </>
  );
};

export default Portal;
