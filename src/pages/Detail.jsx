import Layout from "../components/layout/Layout";
import DetailContent from "../components/Detailcomponents/Detailcontent";
import Comment from "../components/Comment/Comment";
import styled from "styled-components";
import Header from "../components/Header/Header";

const Detail = () => {
  return (
    <>
      <Header />
      <Layout>
        <DetailContent />
        <CommentBox>
          <Comment />
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
