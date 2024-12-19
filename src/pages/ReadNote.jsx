import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGetVersionById from "../hooks/useGetVersionById";
import ReadNoteContent from "../components/readNote/ReadNoteContent";

const ReadNote = () => {
  const { versionId } = useParams();
  const { note, isPending, isError } = useGetVersionById(versionId);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <StNoteSheet>
      <NoteContentsBox>
        <ReadNoteContent noteContent={note} />
      </NoteContentsBox>
    </StNoteSheet>
  );
};

export default ReadNote;

const StNoteSheet = styled.div`
  width: 70%;
  min-height: 95vh;
  border: 2px solid #354f4d;
  border-radius: 10px;
  background-color: white;
`;
const NoteContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 40px 60px;
`;


