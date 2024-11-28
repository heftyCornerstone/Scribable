import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import SideBar from "./SideBar";


const Layout = () => {
  return (
    <StLayoutDiv>
      <StSideBarAside>
        <SideBar />
      </StSideBarAside>
      <StMainSection>
        <NavBar />
        <StMain>
          <Outlet />
        </StMain>
      </StMainSection>
    </StLayoutDiv>
  );
};

const StLayoutDiv = styled.div`
  display: flex;
`;
const StSideBarAside = styled.aside`
  width: 15%;
  min-width: 200px;
  height: 100vh;
  border-right: 1px solid gray;
`;
const StMainSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100vh;
  gap: 30px;
`;
const StMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export default Layout;
