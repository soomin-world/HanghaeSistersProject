import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import PostingPage from "../pages/PostingPage";
import PostingEdit from "../pages/PostingEdit";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* 디테일은 테스트용 지워주세요 */}
        <Route path="detail/" element={<Detail />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/posting" element={<PostingPage />} />
        <Route path="/postingEdit/:id" element={<PostingEdit />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
