import styled from "styled-components";
import { Button } from "antd";
import { BiCheck } from "react-icons/bi";

export const ProductTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const NewProductPrice = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #f44336;
  margin-bottom: 8px;
`;

export const OldProductPrice = styled.s`
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 8px;
`;

export const ProductInfo = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 8px;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding-top: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border-top: 2px solid rgb(217, 217, 217);
  img {
    max-width: 1280px;
    height: auto;
  }
`;

export const ProductRatingForm = styled.div`
  .rating_form {
  }
  .rating_header {
    margin-bottom: 1em;
    text-transform: capitalize;
    font-size: 1.125rem;
    color: rgba(0, 0, 0, 0.87);
  }
`;
export const ProductRatingContainer = styled.div`
  .rating_overview {
    background-color: #fffbf8;
    min-height: 5rem;
    border: 1px solid #f9ede5;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    border-radius: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 1.875rem;
  }
  .rating_overview_briefing {
    text-align: center;
    margin-right: 1.875rem;
  }
  .rating_overview_filter {
    flex: 1;
    margin-left: 0.9375rem;
  }
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
export const FavoritetBtn = styled(Button)`
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
  .favourite_icon {
    margin-right: 8px;
  }
  .liked_count {
    line-height: 40px;
  }
`;

export const PolicyTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  padding: 0;
`;

export const PolicyItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
`;

export const PolicyContent = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 8px 0 0 0;
`;

export const CheckIcon = styled(BiCheck)`
  color: #fff;
  background-color: green;
  border-radius: 50%;
  font-size: 20px;
  margin-right: 4px;
  text-align: center;
`;

export const MessageError = styled.span`
  color: red;
`;
