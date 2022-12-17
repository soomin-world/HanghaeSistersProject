import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
// styled components 패키지다운

const Layout = ({ children }) => {
  return (
    <>
      <StLayout>{children}</StLayout>
      <Footer />
    </>
  );
};

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  padding-top: 30px;
`;

export default Layout;
