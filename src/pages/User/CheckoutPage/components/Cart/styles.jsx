import styled from "styled-components";
import { Button, List } from "antd";

export const CartInfo = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  border: 1px solid rgb(222, 226, 230);
`;

export const CartInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PayMentBtn = styled(Button)`
  margin-top: 16px;
  background-color: royalblue;
  color: #fff;
  width: 100%;
  height: 36px;

  &:hover {
    background-color: #6486ed;
    color: #fff;
  }
`;

export const ListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`;
