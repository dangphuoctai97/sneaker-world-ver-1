import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

export const MainContent = styled.div`
  margin-left: 200px;
  padding: 16px;
  width: 100%;
  background-color: rgb(239, 239, 239);
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
