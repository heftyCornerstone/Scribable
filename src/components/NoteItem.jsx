import styled from "styled-components";

const StNoteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 300px;
  border: 1px solid gray;
`;

const NoteItem = ({ title }) => {
    return (
        <div>
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

export default NoteItem