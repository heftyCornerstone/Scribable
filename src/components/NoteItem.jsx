import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useDeleteVersion from "../hooks/useDeleteVersion";
import useDeleteNote from "../hooks/useDeleteNote";

const NoteItem = ({ configData, mode, isRemovable }) => {
    const navigate = useNavigate();

    const itemMode = {
        note: { redirectTo: 'note-versions', btnValue: 'V' },
        version: { redirectTo: 'read-note', btnValue: 'R' }
    }
    const { redirectTo } = itemMode[mode];
    const { id, title } = configData;
    const noteToRead = (mode === "note") ? configData["main_version"] : id;

    const mutateSub = useDeleteVersion(id);
    const mutateMain = useDeleteNote(id);

    const handleNoteClick = (e) => {
        if (e.target.tagName === 'BUTTON') return;
        navigate(`/read-note/${noteToRead}`);
    }
    const handleRead = () => {
        navigate(`/${redirectTo}/${id}`);
    }
    const handleDelete = async () => {
        try {
            (mode === 'note') ? mutateMain() : mutateSub();
        } catch (error) {
            window.alert(error);
        }
    }

    return (
        <div >
            <StNoteItem onClick={handleNoteClick}>
                <div>{title}</div>
                <StNoteItemBtnSet>
                    {(mode === 'note') && <StVersionBtn onClick={handleRead}>V</StVersionBtn>}
                    
                </StNoteItemBtnSet>
                {isRemovable && <StDeleteBtn onClick={handleDelete}>×</StDeleteBtn>}
            </StNoteItem>
        </div>
    );
};

export default NoteItem

const StNoteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 10px 40px 10px 20px;
  height: 3em;
  width: 300px;
  font-weight: bold;
  font-size: 1.1rem;
  border: 2px solid #213547;
  border-radius: 10px;
  cursor: pointer;
`;
const StNoteItemBtnSet = styled.div`
    display: flex;
    gap: 0.2em;
`;

const StNoteItemBtn = styled.button`
    padding: 0.3em 0.6em;
    font-weight: bold;
    color: white;
    border: none;
    outline: none;
    background-color: #354f4d;
    &:hover{
      background-color: #698582;
    }
`;

const StVersionBtn = styled(StNoteItemBtn)`
    background-color: #354f4d;
    &:hover{
      background-color: #698582;
    }
`;

const StDeleteBtn = styled(StNoteItemBtn)`
    position: absolute;
    right: 0;
    top:0;
    background-color: transparent;
    color: black;
    &:hover{
      background-color: transparent;
      color: #d40808;
    }
`;