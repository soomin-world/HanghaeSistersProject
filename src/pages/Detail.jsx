import Layout from "../components/layout/Layout";
import DetailContent from "../components/Detailcomponents/Detailcontent";
import Comment from "../components/Comment/Comment";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useNavigate, useLocation } from "react-router-dom";

const Detail = () => {
  const { state } = useLocation();
  //메인페이지에서 get으로 받은 정보들을 useLocation을 통해 state로 넘겨받음.
  //넘겨받은 정보들을 아래와 같이 state라는 이름으로 자식컴포넌트에 props해줌.
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
