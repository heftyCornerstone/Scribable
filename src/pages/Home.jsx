import { Link } from "react-router-dom";
import styled from "styled-components";



const Home = () => {
  return (
    <StHomeMain>
      <StHomeTitle>Scribable</StHomeTitle>
      <Link to="/projects">
        <StStartBtn type="button">
          start
        </StStartBtn>
      </Link>
    </StHomeMain>
  );
}

const StHomeMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 30px;
`;
const StHomeTitle = styled.h1`
    font-size: 80px;
`;
const StStartBtn = styled.button`
    padding: 0.6em 1.2em;
    font-weight: bold;
    color: white;
    background-color: #354f4d;
    border: none;
    outline: none;
    &:hover{
      background-color: #567371;
    }
`;

export default Home;