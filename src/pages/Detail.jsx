import Layout from "../components/layout/Layout";
import DetailContent from "../components/Detailcomponents/Detailcontent";
import Comment from "../components/Comment/Comment";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useNavigate, useLocation } from "react-router-dom";

const Detail = () => {
  const { state } = useLocation();

  return (
    <>
      <Header />
      <Layout>
        <DetailContent state={state} />
        <CommentBox>
          <Comment state={state} />
        </CommentBox>
      </Layout>
    </>
  );
};

const CommentBox = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export default Detail;
