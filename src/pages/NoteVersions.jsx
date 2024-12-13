import styled from "styled-components";
import NoteItem from "../components/NoteItem";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNoteVersions } from "../api/supabaseApi";


const CreateNewVersion = ({mainVersion}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/write/version`, { state:{ mainVersion }});
  }
  return <button type="button" onClick={handleNavigate}>Create a new version</button>
}

const NoteVersions = () => {
  const { noteId } = useParams();
  const [mainVersion, setMainVersion] = useState(null);
  const [versions, setVersions] = useState([]);

  //tanstack query를 적용해서 바꿔보자
  useEffect(() => {
    const fetchData = async () => {
      const main = await getNoteVersions(noteId, true);
      const subVersions = await getNoteVersions(noteId);

      setMainVersion(main[0]);
      setVersions(subVersions);
    };

    fetchData();
  }, []);

  return (
    <StNoteVersions>
      <StMainVersionSection>
        {mainVersion ? <NoteItem key={mainVersion.id} configData={mainVersion} mode={'version'} isRemovable={false} /> : <div>로딩중</div>}
      </StMainVersionSection>
      <CreateNewVersion mainVersion={mainVersion} />
      <StVersionsSection>
        {
          (versions.length > 0) ?
            versions.map((versionData) => {
              const { id } = versionData;
              return <NoteItem key={id} configData={versionData} mode={'version'} isRemovable={true} />
            })
            :
            <div>아직 새로운 버전이 없습니다</div>
        }
      </StVersionsSection>
    </StNoteVersions>
  );
};

const StNoteVersions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 90vh;
  gap: 30px;
`;
const StSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
const StMainVersionSection = styled(StSection)`
  justify-content: center;
  height: 120px;
  border-bottom: 1px solid gray;
`;
const StVersionsSection = styled(StSection)`
  height: 60%;
  gap: 20px;
  overflow-y: scroll;
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default NoteVersions;
