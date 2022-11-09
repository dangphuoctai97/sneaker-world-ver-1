import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import * as S from "./styles";

const BrandSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      infiniti="true"
      spaceBetween={0}
      slidesPerView={6}
      loop
      autoplay={{ delay: 2000 }}
      speed={800}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <S.SliderItem>
        <Link>
          <h3>Slide 1</h3>
        </Link>
      </S.SliderItem>
      <S.SliderItem>
        <Link>
          <h3>Slide 2</h3>
        </Link>
      </S.SliderItem>
      <S.SliderItem>
        <Link>
          <h3>Slide 3</h3>
        </Link>
      </S.SliderItem>
      <S.SliderItem>
        <Link>
          <h3>Slide 4</h3>
        </Link>
      </S.SliderItem>
      <S.SliderItem>
        <Link>
          <h3>Slide 5</h3>
        </Link>
      </S.SliderItem>
      <S.SliderItem>
        <Link>
          <h3>Slide 6</h3>
        </Link>
      </S.SliderItem>
      <S.SliderItem>
        <Link>
          <h3>Slide 7</h3>
        </Link>
      </S.SliderItem>
      <S.SliderItem>
        <Link>
          <h3>Slide 8</h3>
        </Link>
      </S.SliderItem>
    </Swiper>
  );
};
export default BrandSlider;
