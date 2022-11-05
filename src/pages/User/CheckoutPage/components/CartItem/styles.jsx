import styled from "styled-components";

export const CartItemWrapper = styled.div`
  border: 1px solid rgb(222, 226, 230);
  border-radius: 2px;
  padding: 8px;
  margin-top: 16px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;
