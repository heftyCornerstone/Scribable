import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    font-weight: bold;
    background-color: gray;
`;

const Home = () => {
    const navigate = useNavigate();
    const onClickStart = ()=>{
        navigate('/projects')
    }
    return (
      <StHomeMain>
        <StHomeTitle>Scribable</StHomeTitle>
        <StStartBtn type="button" onClick={onClickStart}>
          start
        </StStartBtn>
      </StHomeMain>
    );
}

export default Home;