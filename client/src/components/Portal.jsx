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
  BottomBar,
} from "./styles";

const Portal = () => {
  return (
    <>
      <PortalContainer>
        <TopBar>
          <TitleWeb>
            <ActiveSpan>Yummy</ActiveSpan> Chef
          </TitleWeb>
        </TopBar>
        <ImageBackground>
          <ContainerPanel>
            <Link to="/Home">
              <WelcomeButton>WELCOME</WelcomeButton>
            </Link>
          </ContainerPanel>
        </ImageBackground>
        <BottomBar>
          <SubTitleWeb>
            Esquivel Ulises PI Made with <ActiveSpan>♥</ActiveSpan> for{" "}
            <ActiveSpan>HENRY</ActiveSpan>
          </SubTitleWeb>
        </BottomBar>
      </PortalContainer>
    </>
  );
};

export default Portal;
