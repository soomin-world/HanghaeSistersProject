import { Descriptions } from "antd";
import { useEffect, useState } from "react";
import ReactCardSlider from "react-card-slider-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { __getPosts } from "../../redux/modules/postSlice";

function CardSlider(props) {
  const clickedCategory = props.category;
  console.log(clickedCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getPosts());
  }, []);
  const sliderClick = (id) => {
    <Link to={`/detail/${id}`} />;
  };
  const posts = useSelector((state) => state.post.posts);
  console.log(posts);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides([]);

    posts.map((post) => {
      if (post.category === clickedCategory) {
        setSlides((slide) => [...slide, post]);
        console.log(slides);
      }
    });
  }, [posts, clickedCategory]);

  return (
    <div>
      <ReactCardSlider slides={slides} />{" "}
    </div>
  );
}

export default CardSlider;

//        id :post.id,
//       image: post.imageAfter,
//       title: post.title,
//       description: post.hospital,
//       clickEvent: sliderClick,
//     };
//   }
// });
