import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const NoteItem = ({ configData, redirectTo }) => {

    const navigate = useNavigate();
    const { id, title } = configData;
    const handleOnclick = () => {
        navigate(`/${redirectTo}/${id}`);//이거 버전에서 보는가, 프로젝트에서 보는가에 따라서 내비게이트 되는 곳이 달라야 함.
    }

    return (
        <div onClick={handleOnclick}>
            <StNoteItem>
                <div>{title}</div>
                <div>
                    <button>X</button>
                    <button>V</button>
                </div>
            </StNoteItem>
        </div>
    );
};

const StNoteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 300px;
  border: 1px solid gray;
  cursor: pointer;
`;

export default NoteItem