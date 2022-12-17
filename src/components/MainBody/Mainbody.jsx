import { useState, useEffect } from "react";
import ReactCardSlider from "react-card-slider-component";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { __getPosts } from "../../redux/modules/postSlice";

function MainBody() {
  //const { isLoading, error, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    dispatch(__getPosts);
  });

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tableClickHandler(0)}
        >
          눈
        </li>
      ),
      tabCont: <div>탭1내용</div>,
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tableClickHandler(1)}
        >
          코
        </li>
      ),
      tabCont: <div>탭2 내용</div>,
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 2 ? "is-active" : ""}
          onClick={() => tableClickHandler(2)}
        >
          턱
        </li>
      ),
      tabCont: <div>탭3 내용</div>,
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 3 ? "is-active" : ""}
          onClick={() => tableClickHandler(3)}
        >
          지방흡입
        </li>
      ),
      tabCont: <div>탭4 내용</div>,
    },
  ];

  const tableClickHandler = (index) => {
    setActiveIndex(index);
  };

  const sliderClick = () => {};

  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: sliderClick,
    },
  ];

  return (
    <div>
      <div className="tabTitle">
        <STTab className="tabs is-boxed">
          {tabContArr.map((section, index) => {
            return section.tabTitle;
          })}
        </STTab>
      </div>
      <div>{tabContArr[activeIndex].tabCont}</div>
      <div>
        <ReactCardSlider slides={slides} />
      </div>
    </div>
  );
}

const STTab = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  border: 3px solid purple;
  padding: 0px 20px 0px 20px;
  //border: 1px solid;
  li {
    text-align: center;
    width: 25%;
    padding: 13px 15px;
    display: block;
    font-size: 13px;
    color: #5c5656;
    text-decoration: none;
    &:hover {
      background-color: #9179c9da;
      color: #ffffff;
    }
  }
`;
export default MainBody;
