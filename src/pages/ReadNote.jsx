import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getVersionById } from "../api/supabaseApi";

const ReadNoteContent = ({ noteContent }) => {
  const navigate = useNavigate();
  const { article_title: articleTitle, content, id } = noteContent;
  const handleUpdate = ()=>{
    navigate(`/update-note/${id}`, { state: noteContent });
  }
  return (
    <>
      <NoteTitle>{articleTitle}</NoteTitle>
      <NoteContent>{content}</NoteContent>
      <button onClick={handleUpdate}>수정하기</button>
    </>
  );
};

const ReadNote = () => {
  const { versionId } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVersionById(versionId)
      setNote(data);
    };

    fetchData();
  }, []);

  return (
    <StNoteSheet>
      <NoteContentsBox>
        {note ? <ReadNoteContent noteContent={note} /> : <div>로딩중</div>}
      </NoteContentsBox>
    </StNoteSheet>
  );
};

const StNoteSheet = styled.div`
  width: 70%;
  min-height: 85vh;
  border: 1px solid gray;
  background-color: white;
`;
const NoteContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 40px 60px;
`;
const NoteTitle = styled.h3`
  width: 100%;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
`;
const NoteContent = styled.div`
  width: 100%;
  height: 60vh;
`;

export default ReadNote;
