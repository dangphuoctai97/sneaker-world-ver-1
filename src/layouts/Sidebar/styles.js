import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  bottom: 0;
  width: 200px;
  height: 100%;
  background-color: #0b326b;
  overflow: hidden;
  transition: all 0.3s;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: midnightblue;
    color: white;
  }

  ${(props) =>
    props.$active &&
    css`
      border-right: 5px solid #3face4;
      background-color: #578ea2;
    `}
`;
