import styled, { css } from "styled-components";
import { Collapse, Card, Tag } from "antd";

export const Wrapper = styled.div`
  padding: 16px;
`;

export const CustomCard = styled(Card)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const FilterTag = styled(Tag)`
  margin-top: 10px;
`;

// export const CustomCollapsePanel = styled(Collapse.Panel)`
//   border-bottom: 1px solid rgb(0, 58, 140);
//   &:active ::before {
//     content: "";
//     position: absolute;
//     top: -1px;
//     left: -1px;
//     width: 3px;
//     height: calc(100% + 2px);
//     background-color: rgb(0, 58, 140);
//   }
// `;
