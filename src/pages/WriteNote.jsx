import styled from "styled-components";
import { createNewNote } from "../api/supabaseApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createNewVersion } from "../api/supabaseApi";
import { useEffect, useState } from "react";
import { updateVersion } from "../api/supabaseApi";

const WriteNote = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { writeMode } = useParams();
  const [mainVer, setMainVer] = useState(null);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const mode = {
      note: {
        writeFn: createNewNote,
        writeFnParam: {},
      },
      version: {
        writeFn: createNewVersion,
        writeFnParam: { noteId: mainVer?.note_id },
      },
      update: {
        writeFn: updateVersion,
        writeFnParam: { versionId: mainVer?.id },
      },
    };
    const { writeFn, writeFnParam } = mode[writeMode];

    await writeFn({
      ...writeFnParam,
      articleTitle: noteTitle,
      content: noteContent,
    }); //authorId 추가하기
    const navigateTo =
      writeMode === "note"
        ? "/projects"
        : `/note-versions/${mainVer.note_id}`;
    navigate(navigateTo);
  };

  // react hook form을 적용해서 비제어 컴포넌트의 렌더링을 최적화 할 시간이 있을까?
  const onTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setNoteContent(e.target.value);
  };

  useEffect(() => {
    if (writeMode !== "note") {
      const main = (writeMode==='version') ? location.state.mainVersion[0] : location.state.mainVersion;
      setMainVer(main);
      setNoteTitle(main.article_title);
      setNoteContent(main.content);
    }
  }, []);

  return (
    <NoteSheet>
      <NoteContentsBox onSubmit={handleOnSubmit} method="post">
        <NoteTitleInput
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={noteTitle}
          onChange={onTitleChange}
          required
        />
        <NoteContentTextarea
          name="content"
          id="content"
          value={noteContent}
          onChange={onContentChange}
          required
        ></NoteContentTextarea>
        <SubmitBtn>완료</SubmitBtn>
      </NoteContentsBox>
    </NoteSheet>
  );
};

export default WriteNote;

const NoteSheet = styled.div`
  width: 70%;
  min-height: 85vh;
  border: 1px solid gray;
  background-color: white;
`;
const NoteContentsBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 40px 60px;
  height: 100%;
`;
const NoteTitleInput = styled.input`
  width: 100%;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  outline: none;
`;
const NoteContentTextarea = styled.textarea`
  width: 100%;
  height: 60vh;
  resize: none;
  outline: none;
`;
const SubmitBtn = styled.button`
  width: 150px;
`;