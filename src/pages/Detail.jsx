import styled from "styled-components";
import Comment from "../components/Comment";


const Detail = () => {
  return (
    // 윗부분 상세페이지
    <CommentBox>
      <Comment />
    </CommentBox>
  )
}

const CommentBox = styled.div`
  width: 1200px;
  margin: 0 auto;
`
export default Detail;
