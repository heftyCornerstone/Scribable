import styled from "styled-components";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";

import { getNotesByAuthorId } from "../api/supabaseApi";


const Projects = () => {
  const [notes, setNotes] = useState([]);

  //실험용 id
  const authorId = 11110000;

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
              return <NoteItem key={id} configData={noteData} redirectTo={'note-versions'} />
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
