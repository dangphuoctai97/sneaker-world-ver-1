import styled, { css } from "styled-components";
import { Button } from "antd";

export const BlogListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  .blog_list_img {
    width: 325px;
    height: auto;
  }
`;
export const BlogListContent = styled.div`
  padding-left: 1rem;
  flex: 1;

  & {
    h4 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    p {
      margin: 5px 0;
      color: rgb(118, 118, 118);
      font-size: 14px;
    }
    .blog_content {
      display: -webkit-box;
      font-size: 15px;
      margin-bottom: 1rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      width: fit-content;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
  }
`;

export const BlogListHomePageWrapper = styled.div`
  background-color: #fff;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  &:hover {
    box-shadow: rgb(149 157 165 / 50%) 0px 8px 24px;
  }
  & .ant-card-body {
    padding: 0;
  }
  .blog_list_img {
    padding: 10px;
    max-width: 250px;
    max-height: auto;
  }
`;

export const BlogListHomePageContent = styled.div`
  background-color: #fff;

  flex: 1;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  width: 100%;
  padding: 10px 10px 15px;
  user-select: none;
  cursor: pointer;
  .blog_name {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.2s linear 0s;
    width: fit-content;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
  time {
    color: #9999;
    display: block;
    font-size: 12px;
  }
  .blog_content {
    width: 100%;
    color: #272727;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    font-size: 14px;
    line-height: 1.4;
    img {
      width: 100%;
    }
  }
`;

export const BlogFeatureWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 1rem;
  .img_100 {
    width: 100%;
    height: 100%;
    cursor: pointer;
    vertical-align: middle;
    border-style: none;
  }
  .blog_feature_content {
    display: flex;
    flex-direction: column;
    width: 100%;
    .font_size_16 {
      font-size: 16px;
    }
    .font_size_12 {
      font-size: 12px;
    }
    h5 {
      margin: 5px 0px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    p {
      margin: 5px 0;
      padding-bottom: 0;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      font-size: 14px;
    }
    .blog_content {
      display: -webkit-box;
      font-size: 15px;
      margin-bottom: 1rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
  }
`;

export const SmBlogFeatureWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.5rem 0px;
  .img_35 {
    width: 35%;
    height: 35%;
    cursor: pointer;
  }
  .blog_feature_content {
    padding: 0.3rem 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 0.3rem 0.5rem;
    width: 100%;
    .font_size_16 {
      font-size: 16px;
    }
    .font_size_12 {
      font-size: 12px;
    }
    h5 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 0px;
      font-size: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    p {
      margin: 0;
      padding-bottom: 0;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      font-size: 12px;
    }
    .blog_content {
      display: -webkit-box;
      font-size: 15px;
      margin-bottom: 1rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
  }
`;

export const ShowMoreBtn = styled(Button)`
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  color: rgb(0, 40, 120);
  background-color: geekblue;
  border: 1px solid royalblue;
  &:hover {
    background-color: royalblue;
    color: #fff;
  }
`;
