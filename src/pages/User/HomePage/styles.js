import styled, { css } from "styled-components";
import { Carousel } from "antd";

export const CarouselContainer = styled.div`
  padding-bottom: 40px;
  & .carouselContent {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 600px;
    padding-top: 25%;

    & img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ProductContainer = styled.div`
  height: 900px;
  & h2 {
    font-size: 28px;
    color: rgb(39, 39, 39);
    line-height: 1.1;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding-bottom: 15px;
    display: block;
    width: fit-content;
    margin: auto;
    word-break: break-all;
    &:after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 56px;
      height: 2.8px;
      background-color: currentcolor;
      content: "";
      bottom: 0px;
    }
  }
`;
export const CollectionContainer = styled.div`
  height: 400px;
`;
export const BlogContainer = styled.div`
  height: 800px;
`;
