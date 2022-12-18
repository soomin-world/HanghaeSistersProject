import { Descriptions } from "antd";
import { useEffect } from "react";
import ReactCardSlider from "react-card-slider-component";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../../redux/modules/postSlice";

function CardSlider(props) {
  console.log(props);
  const clickedCategory = props.category;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  const posts = useSelector((state) => state.post.posts);

  console.log(posts);
  const sliderClick = () => {};
  const slides = posts.map((post) => {
    if (post.category === clickedCategory) {
      return {
        image: post.imageAfter,
        title: post.title,
        description: post.hospital,
        clickEvent: sliderClick,
      };
    }
  });
  return (
    <div>
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default CardSlider;

//[
//{
//image: posts.imageAfter,
//title: posts.title,
//description: posts.hospital,
//clickEvent: sliderClick,
//}
//];
