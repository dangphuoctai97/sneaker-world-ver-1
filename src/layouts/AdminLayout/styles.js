import styled, { css } from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

export const MainContent = styled.div`
  margin-left: 200px;
  padding: 16px;
  width: 100%;
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
export const LoadingIcon = styled(LoadingOutlined)`
  font-size: 80px;
`;
