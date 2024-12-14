import styled from "styled-components";
import NoteItem from "../components/NoteItem";
import useGetMyProjects from "../hooks/useGetMyProjects";


const Projects = () => {
  //실험용 id
  const authorId = "6cc87571-a147-400b-b663-89fc628f3931";

  const {notes, isPending, isError} = useGetMyProjects(authorId);

  if(isPending) return <div>Loading...</div>;
  if(isError) return <div>Error!</div>;

  return (
    <StProjects>
      {
        (notes.length > 0) ?
          (
            notes.map((noteData) => {
              const { id } = noteData;
              return <NoteItem key={id} configData={noteData} mode={'note'} isRemovable={true} />
            })
          ) : (
            <div>진행중인 프로젝트가 없습니다</div>
          )
      }
    </StProjects>
  );
};

export default Projects;

const StProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;