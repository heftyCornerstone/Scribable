import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ReadNoteContent = ({ noteContent }) => {
  const navigate = useNavigate();
  const { article_title: articleTitle, content } = noteContent;
  const handleUpdate = ()=>{
    navigate('/write/update', { state: { mainVersion: noteContent} });
  }
  return (
    <>
      <NoteTitle>{articleTitle}</NoteTitle>
      <NoteContent>{content}</NoteContent>
      <button onClick={handleUpdate}>수정하기</button>
    </>
  );
};

export default ReadNoteContent;

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