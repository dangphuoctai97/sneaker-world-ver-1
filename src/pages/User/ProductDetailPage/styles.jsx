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

export const AddToCartBtn = styled(Button)`
  font-size: 16px;
  color: #fff;
  background-color: royalblue;

  &:hover {
    background-color: #6486ed;
    color: #fff;
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
  margin-left: 16px;
`;
