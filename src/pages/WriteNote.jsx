import styled from "styled-components";

const WriteNote = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const title = formData.get("title");
    // const content = formData.get("content");
    // console.log(title, content);
  };

  return (
    <NoteSheet>
      <NoteContentsBox onSubmit={handleOnSubmit} method="post">
        <NoteTitleInput
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
        <NoteContentTextarea name="content" id="content"></NoteContentTextarea>
        <SubmitBtn>작성 완료</SubmitBtn>
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

export default WriteNote;
