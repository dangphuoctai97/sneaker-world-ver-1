import styled, { css } from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const CarouselContainer = styled.div`
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

export const CarouselBrands = styled.div`
  margin-top: 20px;
  & .swiper_img_container {
    width: 120px;
    height: auto;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  .white_text {
    color: #fff !important;
  }
  .text_shadow {
    text-shadow: 3px 3px 3px #000;
  }
  & .title_underline {
    position: relative;
    font-size: 28px;
    -webkit-box-align: center;
    color: rgb(39, 39, 39);
    line-height: 1.1;
    text-decoration: none;
    font-weight: 500;
    padding-bottom: 15px;
    display: block;
    width: fit-content;
    margin: auto;
    word-break: break-all;
    letter-spacing: 3px;
    cursor: pointer;

    &::before {
      right: 50%;
      content: "";
      position: absolute;
      bottom: 0px;
      width: 0%;
      height: 4px;
      background-color: #4285f4;
      transition: all 0.3s ease-in-out 0s;
    }
    &::after {
      left: 50%;
      content: "";
      position: absolute;
      bottom: 0px;
      width: 0%;
      height: 4px;
      background-color: #f6432e;
      transition: all 0.3s ease-in-out 0s;
    }
    &:hover::after,
    &:hover::before {
      width: 50%;
    }
    & a {
      color: #000;
    }
  }
`;
export const ContainerTiltle = styled(Link)`
  & span {
    ${(props) =>
      props.$active &&
      css`
        &::before {
          padding-right: 50%;
        }
        &::after {
          padding-left: 50%;
        }
        &:active::after,
        &:active::before {
          width: 50%;
        }
      `}
  }
`;

export const ProductListContainer = styled.div`
  margin-top: 20px;
  &:hover .title_underline {
    &::after,
    &::before {
      width: 50%;
    }
  }
`;
export const BestSellerContainer = styled.div`
  &:hover .title_underline {
    &::after,
    &::before {
      width: 50%;
    }
  }
  margin-top: 20px;
`;
export const BrandsContainer = styled.div`
  &:hover .title_underline {
    &::after,
    &::before {
      width: 50%;
    }
  }
  margin-top: 20px;
`;
export const CollectionContainer = styled.div`
  &:hover .title_underline {
    &::after,
    &::before {
      width: 50%;
    }
  }
  margin: 20px 20px;
  & .collection_content {
    margin-top: 20px;
    position: relative;
    padding-top: 100%;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: middle;
      transition: all 0.4s ease-in-out 0s;
      filter: brightness(60%);
    }
    .collection_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      h2 {
        position: relative;
        padding-bottom: 30px;
        font-weight: 700;
        font-size: 25px;
        text-transform: uppercase;
        letter-spacing: 5px;
        background: linear-gradient(
          to right,
          #f6432e,
          royalblue 50%,
          white 50%
        );
        background-clip: text;
        overflow: hidden;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        transition: background-position 275ms ease;
        text-decoration: none;
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0px;
          display: block;
          transform: translateX(-50%);
          width: 40px;
          height: 4px;
          transition: all 150ms linear 0s;
          background: linear-gradient(
            to right,
            #f6432e,
            royalblue 50%,
            white 50%
          );
          overflow: hidden;
          background-size: 200% 100%;
          background-position: 100%;
          transition: background-position 275ms ease;
          background-clip: text;
        }
      }
    }
    &:hover {
      img {
        transform: scale(1.5);
        filter: brightness(100%);
      }
      & .collection_title h2 {
        background-position: 0 100%;
      }
      & .collection_title h2::after {
        width: 100%;
        background-position: 0 100%;
      }
    }
  }
`;
export const RegisterContainer = styled.div`
  &:hover .title_underline {
    &::after,
    &::before {
      width: 50%;
    }
  }
  margin: 20px 0;
  background-image: url(https://i0.wp.com/www.sneakerhdwallpapers.com/wallpapers/2018/air-jordan-11-retro-og-concords-wallpaper-preview.jpg);
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  padding: 190px 0px;
  position: relative;
  .register_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    max-width: 528px;

    p {
      text-shadow: 3px 3px 3px #000;
      font-size: 18px;
      line-height: 28px;
      padding-top: 20px;
      color: rgb(255, 255, 255);
    }
  }
`;
export const BlogContainer = styled.div`
  &:hover .title_underline {
    &::after,
    &::before {
      width: 50%;
    }
  }
  margin-top: 20px;
`;

export const ShowMoreBtn = styled(Button)`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  padding: 18px 30px;
  margin: 20px;
  color: rgb(0, 40, 120);
  background-color: geekblue;
  border: 1px solid royalblue;
  &:hover {
    background-color: royalblue;
    color: #fff;
  }
`;
