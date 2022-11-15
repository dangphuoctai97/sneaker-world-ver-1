import styled, { css } from "styled-components";

export const ProductContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background-color: #fff;
  &:hover {
    box-shadow: rgb(149 157 165 / 50%) 0px 8px 24px;
  }
  & .ant-card-body {
    padding: 0;
  }
  .product_list_img {
    padding: 5px;
  }
`;
export const ProductContent = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-flow: column wrap;
  align-items: flex-start;
  padding: 10px 10px 15px;
  user-select: none;
  cursor: pointer;

  h3 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    display: -webkit-box;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s linear 0s;
    width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-word;
    cursor: pointer;
  }
  &:hover {
    color: royalblue;
  }

  .size_amount {
    margin: 10px 0;
    width: 100%;
    flex-flow: row wrap;
    display: flex;
    justify-content: space-between;
  }
  & .product_size,
  .product_amount,
  .product_gender,
  .product_amount {
    margin: 0;
    color: rgb(0, 40, 120);
    background-color: geekblue;
    border: 1px solid royalblue;
  }
  .product_size:hover {
    border: 1px solid royalblue;
    color: #fff;
    background-color: royalblue;
  }
  .product_amount:hover {
    border: 1px solid #f6432e;
    color: #fff;
    background-color: #f6432e;
  }
  .product_gender:hover {
    border: 1px solid #389e0d;
    color: #fff;
    background-color: #389e0d;
  }
  & .product_price {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      color: rgb(0, 40, 120);
      font-size: 14px;
    }
    & s {
      letter-spacing: 1px;
    }
    & p {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 1px;
      color: #f44336;
    }
  }
  .product_category {
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    display: flex;
    & h4 {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;
      letter-spacing: px;
      color: rgb(0, 40, 120);
    }
  }
`;
