import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/layout/Layout";
import MainBody from "../components/MainBody/Mainbody";

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <Layout>
        <MainBody />
      </Layout>
      <Footer />
    </>
  );
};

export default Main;
