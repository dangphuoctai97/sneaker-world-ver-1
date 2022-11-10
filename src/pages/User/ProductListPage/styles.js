import styled, { css } from "styled-components";
import { Collapse, Card, Slider, Tag } from "antd";

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

export const PriceSlider = styled(Slider)`
  & {
    .ant-slider-track {
      .ant-slider-track-1 {
        right: auto;
        left: 0;
      }
      .ant-slider-track-2 {
        right: auto;
        left: 100%;
      }
    }
    .ant-slider-handle {
      border: solid 2px royalblue;
      background-color: royalblue;
      .ant-slider-handle-1 {
        right: auto;
        left: 30%;
      }
      .ant-slider-handle-2 {
        right: auto;
        left: 100%;
      }
    }
  }
  ${(props) =>
    props.sliderReset &&
    css`
      .ant-slider-track {
        .ant-slider-track-1 {
          right: auto;
          left: 0;
        }
        .ant-slider-track-2 {
          right: auto;
          left: 100%;
        }
      }
      .ant-slider-handle {
        .ant-slider-handle-1 {
          right: auto;
          left: 0;
        }
        .ant-slider-handle-2 {
          right: auto;
          left: 100%;
        }
      }
    `}
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
