import styled from "styled-components";
import NoteItem from "../components/NoteItem";
import { useNavigate, useParams } from "react-router-dom";
import useGetVersions from "../hooks/useGetVersions";

const NoteVersions = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/write/version', { state: { mainVersion } });
  }
  const { mainVersion, subVersions, isVersionPending, isVersionError } = useGetVersions(noteId);

  if (isVersionPending) return <div>Loading...</div>;
  if (isVersionError) return <div>Error!</div>;

  return (
    <StNoteVersions>
      <StMainVersionSection>
        <NoteItem key={mainVersion[0].id} configData={mainVersion[0]} mode={'version'} isRemovable={false} />
      </StMainVersionSection>
      <StCreateVersionBtn type="button" onClick={handleNavigate}>Create a new version</StCreateVersionBtn>
      <StVersionsSection>
        {
          (subVersions.length > 0) ?
            subVersions.map((versionData) => {
              const { id } = versionData;
              return <NoteItem key={id} configData={versionData} mode={'version'} isRemovable={true} />
            })
            :
            <div>No sub-version yet, what about scribble a new?</div>
        }
      </StVersionsSection>
    </StNoteVersions>
  );
};

export default NoteVersions;


const StCreateVersionBtn = styled.button`
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
  border-bottom: 2px solid #213547;
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