import React from "react";
import Header from "../components/Header/Header";

import Layout from "../components/layout/Layout";
import MainBody from "../components/MainBody/Mainbody";

const Main = () => {
  return (
    <>
      <Header />
      <Layout>
        <MainBody />
      </Layout>
    </>
  );
};

export default Main;
