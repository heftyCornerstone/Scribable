import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateVersion } from "../api/supabaseApi";

const UpdateNote = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [mainVer, setMainVer] = useState(null);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const articleTitle = formData.get("title");
        const content = formData.get("content");

        await updateVersion({ articleTitle, content, versionId: mainVer.id });
        navigate(`/note-versions/${mainVer.note_id}`);
    };
    // react hook form을 적용해서 비제어 컴포넌트의 렌더링을 최적화 할 시간이 있을까?
    const onTitleChange = (e) => {
        setNoteTitle(e.target.value);
    }
    const onContentChange = (e) => {
        setNoteContent(e.target.value);
    }

    useEffect(() => {
        const main = location.state;
        setMainVer(main);
        setNoteTitle(main.article_title);
        setNoteContent(main.content);
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
                <SubmitBtn>수정 완료</SubmitBtn>
            </NoteContentsBox>
        </NoteSheet>
    );
};

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

export default UpdateNote;
