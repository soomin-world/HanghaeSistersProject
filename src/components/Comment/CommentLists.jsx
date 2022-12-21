import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const CommentLists = ({ comment }) => {
  //comment 컴포넌트에서 댓글리스트를 props로 넘겨받음.
  console.log("댓글 리스트는", comment);
  //console.log에 댓글 리스트들 잘 출력되고 있음.
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [editcontent, setEditcontent] = useState("");

  const del_comment = () => {
    console.log("댓글 삭제/");
    // dispatch
  };

  const edit_starCommit = (id) => {
    console.log("isEdit?/", id);
    // dispatch
  };

  const upDatecontent = () => {
    console.log("수정완료/");
    // dispatch
  };
  return (
    <>
      <ComListBox>
        <li>
          <p>{comment.content}</p>
          <p>{comment.username}</p>
        </li>
        ;
      </ComListBox>
    </>
  );
};

const ComListBox = styled.ul`
  textarea {
    width: 100%;
    height: 60px;
    /* resize: none; */
    outline: none;
    border: none;
    padding: 5px 10px;
    box-sizing: border-box;
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
