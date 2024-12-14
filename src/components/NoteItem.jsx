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
    const { redirectTo, btnValue } = itemMode[mode];
    const { id, title } = configData;

    const mutateSub = useDeleteVersion(id);
    const mutateMain = useDeleteNote(id);

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
            <StNoteItem>
                <div>{title}</div>
                <div>
                    <button onClick={handleRead}>{btnValue}</button>
                    {isRemovable && <button onClick={handleDelete}>X</button>}
                </div>
            </StNoteItem>
        </div>
    );
};

export default NoteItem

const StNoteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 300px;
  border: 1px solid gray;
  cursor: pointer;
`;