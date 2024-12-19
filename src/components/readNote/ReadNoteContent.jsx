import Markdown from "markdown-to-jsx";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ReadNoteContent = ({ noteContent }) => {
  const navigate = useNavigate();
  const { article_title: articleTitle, content } = noteContent;
  const handleUpdate = () => {
    navigate('/write/update', { state: { mainVersion: noteContent } });
  }
  return (
    <>
      <NoteTitle>{articleTitle}</NoteTitle>
      <NoteContent>
        <Markdown>
          {content}
        </Markdown>
      </NoteContent>
      <StModifyVersionBtn onClick={handleUpdate}>Modify</StModifyVersionBtn>
    </>
  );
};

export default ReadNoteContent;

const StModifyVersionBtn = styled.button`
    padding: 0.5em 0.6em;
    font-weight: bold;
    color: white;
    border: none;
    outline: none;
    background-color: #354f4d;
    &:hover{
      background-color: #698582;
    }
`;
const NoteTitle = styled.h3`
  padding-bottom: 2rem;
  width: 100%;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
`;
const NoteContent = styled.div`
  width: 100%;
  height: 60vh;
  overflow-y: scroll;
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;