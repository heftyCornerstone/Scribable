import styled from "styled-components";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";

import { getNotesByAuthorId } from "../api/supabaseApi";


const Projects = () => {
  const [notes, setNotes] = useState([]);

  //실험용 id
  const authorId = "6cc87571-a147-400b-b663-89fc628f3931";

  //tanstack query를 적용해서 바꿔보자
  useEffect(() => {
    const fetchData = async () => {
      const data = await getNotesByAuthorId(authorId);
      setNotes(data);
    };

    fetchData();
  }, []);

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

const StProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export default Projects;
