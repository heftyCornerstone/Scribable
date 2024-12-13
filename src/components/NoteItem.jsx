import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteNote, deleteVersion } from "../api/supabaseApi";


const NoteItem = ({ configData, mode, isRemovable }) => {
    const navigate = useNavigate();

    const itemMode = {
        note: { redirectTo: 'note-versions', deleteFn: deleteNote, btnValue: 'V' },
        version: { redirectTo: 'read-note', deleteFn: deleteVersion, btnValue: 'R' }
    }
    const { redirectTo, deleteFn, btnValue } = itemMode[mode];
    const { id, title } = configData;

    const handleRead = () => {
        navigate(`/${redirectTo}/${id}`);
    }
    const handleDelete = async () => {
        try {
            await deleteFn(id);
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