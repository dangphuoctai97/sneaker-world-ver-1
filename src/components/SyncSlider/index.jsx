import { useState } from "react";
import { Image, Space, Row, Col } from "antd";
import Slider from "react-slick";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { SLIDER_IMAGE } from "./constant";

const SyncSlider = ({ images }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const renderSliderImages = (height, width) => {
    if (!images?.length) return null;
    return images.map((item) => {
      return (
        <Image
          key={item.name}
          style={{ position: "relative" }}
          height={height}
          width={width}
          src={item.path}
          preview={false}
        />
      );
    });
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <BsArrowRightCircle
        style={{
          ...style,
          position: "absolute",
          top: "43%",
          right: "-25px",
          display: "flex",
          fontSize: "24px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <BsArrowLeftCircle
        style={{
          ...style,
          position: "absolute",
          zIndex: "1",
          top: "43%",
          left: "-25px",
          display: "flex",
          fontSize: "24px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider
        dots={true}
        {...settings}
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
      >
        {renderSliderImages(400, "100%")}
      </Slider>
      <br></br>
      <br></br>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {renderSliderImages(100, "98%")}
      </Slider>
    </div>
  );
};

export default SyncSlider;
