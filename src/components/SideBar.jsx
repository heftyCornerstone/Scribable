import { Link } from "react-router-dom";
import styled from "styled-components";


const SideBarMenuBtn = ({ children }) => {
  return <StmenuBtn>{children}</StmenuBtn>;
};

const SideBarMenu = () => {
  const btnConfig = [
    { btnName: 'Write a note', goTo: '/write/note' },
    { btnName: 'My projects', goTo: '/projects' },
    { btnName: 'My profile', goTo: '/projects' },
    { btnName: 'Sign out', goTo: '/projects' }
  ];
  return (
    <StSideBarMenu>
      {btnConfig.map(({ btnName, goTo }) => (
        <Link key={btnName} to={goTo}>
          <SideBarMenuBtn>{btnName}</SideBarMenuBtn>
        </Link>
      ))}
    </StSideBarMenu>
  );
};

const UserName = () => {
  const message = "Ya doin' well, right?";
  return (
    <>
      <StUserName>{message}</StUserName>
    </>
  );
};

const SideBar = () => {
  return (
    <StSideBar>
      <UserName />
      <SideBarMenu />
    </StSideBar>
  );
};

const StUserName = styled.div`
  font-weight: bold;
  color: #faf8f7;
`;
const StmenuBtn = styled.button`
  height: 2.5em;
  width: 100%;
  font-weight: bold;
  color: #4f4843;
  background-color: #faf8f7;
  &:hover{
    background-color: #e3e1e1;
  }
`;
const StSideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StSideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 10px;
  text-align: center;
`;

export default SideBar;
