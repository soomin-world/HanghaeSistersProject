import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getPost } from "../../redux/modules/postSlice";

function MainBody() {
  const { isLoading, error, posts } = useSelector((state) => state.post);

  // console.log(posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() => {
              navigate(`/detail/${post.id}`, { state: post });
            }}
          >
            <span>글번호 :</span>
            <p>{post.id}</p>
            <span>제목 :</span>
            <p>{post.title}</p>
            <span>작성자 :</span>
            <p>{post.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainBody;
