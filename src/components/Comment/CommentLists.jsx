import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

const CommentLists = () => {
  const dispatch = useDispatch();
  const [isComment, setIsComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const del_comment = (id) => {
    console.log("댓글 삭제/", id);
    // dispatch
  };

  const edit_starCommit = (id) => {
    console.log("isEdit?/", id);
    // dispatch
  };

  const edit_endCommit = () => {
    console.log("수정완료/");
    // dispatch
  };
  return (
    <ComListBox>
      {!isEdit ? (
        <div className="com_text">{}</div>
      ) : (
        <>
          <textarea
            className="com_edit_textarea"
            defaultvalue={commentText || ""}
            onChange={(e) => {
              console.log(e.target.value);
              setCommentText(e.target.value);
            }}
          />
        </>
      )}
      {/* id가 내 id면 삭제, 수정버튼 보여주기 */}
      {!isEdit ? (
        <div className="comBtn_box">
          <button
            onClick={() => {
              del_comment();
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            수정
          </button>
        </div>
      ) : (
        <div className="comBtn_box">
          <button
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            수정취소
          </button>
          <button
            onClick={() => {
              edit_endCommit();
            }}
          >
            수정완료
          </button>
        </div>
      )}
    </ComListBox>
  );
};

const ComListBox = styled.div`
  textarea {
    width: 100%;
    height: 60px;
    /* resize: none; */
    outline: none;
    border: none;
    padding: 5px 10px;
    box-sizing: border-box;
    font-family: "GongGothicMedium";
  }
  button {
    width: 130px;
    height: 100%;
    background-color: #dcd0e6da;
    border: none;
    cursor: pointer;
    /* margin: 10px; */
  }
`;
const CommentBtn = styled.p`
  width: 200px;
  height: 40px;
  /* color: #7950f2; */
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #dcd0e6da;
`;

export default CommentLists;
