import styled from "styled-components";
import { Button, Avatar } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

export const ProductRating = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  background-color: #fff;
  border-radius: 0.125rem;
  padding: 1.5625rem;
  margin-top: 0.9375rem;
  overflow: visible;
  border: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  min-height: 200px;
  user-select: none;
  .product_rating_avata {
    margin: 5px 0;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .product_rating_main_author-name {
      margin-left: 5px;
      font-size: 15px;
    }
  }
  .product_user_rating {
    margin: 5px 0;
  }
  .product_rating_main {
    flex: 1;
  }
  .product_rating_main_author-name {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.75rem;
  }
  .product_rating_time {
    margin: 5px 0;

    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.54);
  }
  .product_rating_content {
    display: -webkit-box;
    position: relative;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0.9375rem 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(0, 0, 0, 0.87);
    white-space: pre-wrap;
    width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  .product_rating_images {
    margin-top: 0.9375rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const RatingAvatarImg = styled(Avatar)`
  border-radius: 50%;
  width: 50;
  height: 50;
`;
export const CustomBtn = styled(Button)`
  font-size: 16px;
  color: #fff;
  background-color: royalblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:hover {
    background-color: #6486ed;
    color: #fff;
  }
`;

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
