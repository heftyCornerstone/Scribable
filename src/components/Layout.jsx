import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import SideBar from "./SideBar";

const StLayoutDiv = styled.div`
  display: flex;
`;
const StSideBarAside = styled.aside`
  width: 15%;
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

const Layout = () => {
  return (
    <StLayoutDiv>
      <StSideBarAside>
        <SideBar />
      </StSideBarAside>
      <StMainSection>
        <NavBar />
        <Outlet />
      </StMainSection>
    </StLayoutDiv>
  );
};

export default Layout;
