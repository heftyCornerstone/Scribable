import styled from "styled-components";
import NoteItem from "../components/NoteItem";
import useGetMyProjects from "../hooks/useGetMyProjects";


const Projects = () => {
  //실험용 id
  const authorId = "6cc87571-a147-400b-b663-89fc628f3931";

  const { notes, isPending, isError } = useGetMyProjects(authorId);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <StMyProjects>
      <StHeader>
        <StTitle>My Projects</StTitle>
        <StTitleCommentBox>
        <StTitleComment>{"You are making it!"}</StTitleComment>
        <StTitleComment>{"Keep your head up and just keep it up"}</StTitleComment>
        </StTitleCommentBox>
      </StHeader>
      <StProjects>

        {
          (notes.length > 0) ?
            (
              notes.map((noteData) => {
                const { id } = noteData;
                return <NoteItem key={id} configData={noteData} mode={'note'} isRemovable={true} />
              })
            ) : (
              <div>No project yet, what about start a new?</div>
            )
        }
      </StProjects>
    </StMyProjects>
  );
};

export default Projects;

const StTitleComment = styled.p`
font-weight: bold;
line-height: 2;
`
const StTitleCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.5rem;
`
const StTitle = styled.h1`
font-size: 3.3rem;
font-weight: bold;
`;
const StHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.3rem;
  width: 40vw;
  border-bottom: 2px solid black;
`;
const StProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5%;
  gap: 30px;
`;
const StMyProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 85%;
`;