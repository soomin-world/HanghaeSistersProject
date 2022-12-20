import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getPosts } from "../../redux/modules/postSlice";

function CardSlider(props) {
  const selectedCategory = props.category;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, isLoading, error } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  console.log(posts);
  // posts 가 category별로 넘어온 데이터라고 가정
  if (isLoading === true) {
    return <div>로딩 중....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="card-container">
      <STInner clssName="inner">
        {posts.map((post) => (
          <STCard className="card">
            <img
              key={post.id}
              src={post.imageAfter}
              alt={"안녕하세요"}
              onClick={() => {
                navigate(`/detail/${post.id}`, { state: post });
              }}
            />
            <div>{post.title}</div>
            <div>{post.price}</div>
          </STCard>
        ))}
      </STInner>
    </div>
  );
}

const STContainer = styled.div``;
const STCard = styled.div`
  margin-top: 30px;
  width: 250px;
  height: 310px;
  background-color: #fff;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 2);
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 220px;
    height: 210px;
    margin: 15px 0px 15px 20px;
    background-color: #000;
  }
  div {
    text-align: center;
    margin: 0 15px;
    font-weight: 700;
    font-size: 15px;
  }
`;

const STInner = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
export default CardSlider;
