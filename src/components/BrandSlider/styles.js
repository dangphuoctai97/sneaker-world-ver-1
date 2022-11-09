import styled, { css } from "styled-components";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

export const SliderItem = styled(SwiperSlide)`
  & h3 {
    background: royalblue;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
`;
