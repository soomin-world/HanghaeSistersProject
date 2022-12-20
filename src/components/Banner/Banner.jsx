import { Carousel } from "antd";

function Banner() {
  return (
    <Carousel autoplay>
      <div>
        <img src="/image/banner1.jpg" alt="" />
      </div>
      <div>
        <img src="/image/banner2.jpg" alt="" />
      </div>
      <div>
        <img src="/image/banner5.jpg" alt="" />
      </div>
    </Carousel>
  );
}

export default Banner;
