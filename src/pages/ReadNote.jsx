import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getVersionById } from "../api/supabaseApi";

const ReadNoteContent = ({ noteContent }) => {
  const { title, content } = noteContent;
  return (
    <>
      <NoteTitle>{title}</NoteTitle>
      <NoteContent>{content}</NoteContent>
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
    <NoteSheet>
      <NoteContentsBox>
        {note ? <ReadNoteContent noteContent={note} /> : <div>로딩중</div>}
      </NoteContentsBox>
    </NoteSheet>
  );
};

const NoteSheet = styled.div`
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
