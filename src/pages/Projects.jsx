import styled from "styled-components";
import NoteItem from "../components/NoteItem";

const StProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const StProjectsWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Projects = () => {
  const projectItemList = [
    { id: "1", title: "Title 1" },
    { id: "2", title: "Title 2" },
    { id: "3", title: "Title 3" },
  ];
  return (
    <StProjectsWrapper>
      <StProjects>
        {projectItemList.map(({ id, title }) => (
          <NoteItem key={id} title={title} />
        ))}
      </StProjects>
    </StProjectsWrapper>
  );
};

export default Projects;
