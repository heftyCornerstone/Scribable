import styled from "styled-components";

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
`;

const SideBarMenuBtn = ({children}) => {
  return <button>{children}</button>;
};

const SideBarMenu = () => {
  const btnList = ['write a note', 'my profile', 'sign out'];
  return (
    <StSideBarMenu>
      {btnList.map((btnName) => (
        <SideBarMenuBtn key={btnName}>{btnName}</SideBarMenuBtn>
      ))}
    </StSideBarMenu>
  );
};

const UserName = () => {
  const message = "ya doin' well, right?";
  return (
    <>
      <div>{message}</div>
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

export default SideBar;
