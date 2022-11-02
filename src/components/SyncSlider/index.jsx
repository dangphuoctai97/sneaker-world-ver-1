import { useState } from "react";
import Slider from "react-slick";
import { Image, Space, Row, Col } from "antd";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { SLIDER_IMAGE } from "./constant";

const SyncSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const renderSliderImages = (height, width) => {
    return SLIDER_IMAGE.map((item) => {
      return (
        <Image
          key={item.id}
          style={{ position: "relative" }}
          height={height}
          width={width}
          src={item.path}
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
          zIndex: "100",
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
      <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {renderSliderImages(400, "100%")}
      </Slider>
      <h4>Second Slider</h4>
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
