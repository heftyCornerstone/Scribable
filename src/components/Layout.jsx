import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";


const Layout = () => {
  return (
    <StLayoutDiv>
      <StSideBarAside>
        <SideBar />
      </StSideBarAside>
      <StMainSection>
        {/* <NavBar /> */}
        <StMain>
          <Outlet />
        </StMain>
      </StMainSection>
    </StLayoutDiv>
  );
};

const StLayoutDiv = styled.div`
  display: flex;
  margin: 1vh;
  max-height: 99vh;
`;
const StSideBarAside = styled.aside`
  width: 15%;
  min-width: 200px;
  height: 98vh;
  border-radius: 10px;
  background-color: #6c827f;
`;
const StMainSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 98vh;
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
